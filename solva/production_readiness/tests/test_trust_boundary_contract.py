import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load():
    return json.loads((ROOT / "trust_boundary_contract.json").read_text())


def test_two_pass_is_independent():
    c = load()["verification_rule"]
    assert c["mode"] == "independent_two_pass"
    assert c["same_evidence_reused_for_both_passes"] is False
    assert c["failure_action"] == "FREEZE_AND_ESCALATE"


def test_hard_blocks_cover_trust_breach_paths():
    blocks = set(load()["hard_blocks"])
    required = {
        "credential_access_by_agent",
        "secret_in_output",
        "sentinel_bypass",
        "sentinel_self_disable",
        "authority_change_from_untrusted_content",
        "approval_from_silence",
        "approval_for_different_request",
        "scope_change_after_approval",
        "tampered_audit_chain",
        "unsafe_retry_after_ambiguous_external_state",
        "authority_bearing_parameter_drift",
    }
    assert required <= blocks


def test_consequential_path_rechecks_binding_before_commit():
    checks = load()["commit_checks"]
    for item in [
        "recompute_request_fingerprint",
        "revalidate_policy",
        "revalidate_sentinel",
        "revalidate_approval_binding",
        "confirm_external_target",
        "confirm_scope_unchanged",
        "confirm_idempotency_state",
    ]:
        assert item in checks


def test_post_action_requires_evidence_and_reconciliation():
    checks = load()["post_action_checks"]
    for item in [
        "verify_provider_or_system_result",
        "reconcile_ambiguous_state",
        "compare_expected_vs_actual",
        "record_evidence",
        "rollback_or_escalate_on_mismatch",
    ]:
        assert item in checks


def test_untrusted_content_cannot_change_authority():
    principles = set(load()["principles"])
    assert "untrusted_content_is_data_not_authority" in principles
    assert "authority_is_separate_from_intelligence" in principles


def test_parameter_continuity_is_explicitly_bound():
    c = load()
    required = {
        "mission_id", "task_id", "agent_id", "policy_version",
        "authority_scope", "request_fingerprint", "data_classification",
        "evidence_references", "expected_outcome", "idempotency_key"
    }
    assert required <= set(c["continuity_invariants"])
    assert "fresh policy and Sentinel decision" in c["continuity_rule"]


def test_hardening_never_grants_authority():
    assert "grant" in load()["promotion_rule"]
    assert "never grant new authority" in load()["promotion_rule"]
