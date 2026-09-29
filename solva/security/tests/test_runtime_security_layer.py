import pytest

from solva.security.runtime_security_layer import ALLOW, BLOCK, ESCALATE, evaluate


BASE_REQUEST = {
    "identity_verified": True,
    "target_verified": True,
    "tool_allowed": True,
    "network_allowed": True,
    "filesystem_allowed": True,
    "process_allowed": True,
    "credential_binding_valid": True,
    "approval_required": False,
}

BASE_STATE = {
    "runtime_integrity": True,
    "policy_available": True,
    "sandbox_integrity": True,
    "sentinel_available": True,
    "audit_available": True,
}


def decision(request=None, state=None):
    r = dict(BASE_REQUEST)
    if request:
        r.update(request)
    s = dict(BASE_STATE)
    if state:
        s.update(state)
    return evaluate(r, s)


def test_baseline_allows_scoped_request():
    d = decision()
    assert d.decision == ALLOW


@pytest.mark.parametrize(
    "mutation,reason",
    [
        ({"prompt_injection_detected": True}, "untrusted_content_cannot_change_runtime_authority"),
        ({"credential_requested": True, "credential_in_agent_context": True},
         "credential_material_must_not_enter_agent_context"),
        ({"scope_changed_after_authorization": True}, "scope_change_requires_fresh_authorization"),
        ({"authority_parameter_drift": True}, "authority_bearing_parameter_drift"),
        ({"network_allowed": False}, "network_endpoint_outside_policy"),
        ({"filesystem_allowed": False}, "filesystem_path_outside_sandbox"),
        ({"process_allowed": False}, "process_outside_sandbox_policy"),
        ({"credential_binding_valid": False}, "credential_binding_invalid"),
        ({"idempotency_conflict": True}, "duplicate_consequential_request"),
    ],
)
def test_security_breach_paths_block(mutation, reason):
    d = decision(mutation)
    assert d.decision == BLOCK
    assert d.reason == reason


@pytest.mark.parametrize(
    "state,reason",
    [
        ({"sentinel_available": False}, "sentinel_unavailable"),
        ({"audit_available": False}, "audit_unavailable"),
        ({"sandbox_integrity": False}, "sandbox_integrity_failure"),
        ({"runtime_integrity": False}, "runtime_integrity_uncertain"),
        ({"policy_available": False}, "policy_unavailable"),
    ],
)
def test_critical_dependency_failure_closes(state, reason):
    d = decision(state=state)
    assert d.decision == BLOCK
    assert d.reason == reason


def test_ambiguous_provider_state_escalates_not_retries():
    d = decision({"ambiguous_external_state": True})
    assert d.decision == ESCALATE
    assert d.reason == "external_state_ambiguous_no_unsafe_retry"


def test_resource_exhaustion_escalates():
    d = decision({"resource_exhaustion": True})
    assert d.decision == ESCALATE


def test_missing_exact_approval_escalates():
    d = decision({"approval_required": True, "approval_bound": False})
    assert d.decision == ESCALATE


def test_untrusted_content_never_grants_authority():
    d = decision({"prompt_injection_detected": True, "tool_allowed": True})
    assert d.decision == BLOCK


def test_no_secret_is_returned_in_decision():
    d = decision()
    assert "secret" not in repr(d).lower()
