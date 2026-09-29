import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load():
    return json.loads((ROOT / "runtime_security_layer_contract.json").read_text())


def test_security_is_outside_llm_reasoning():
    c = load()
    assert "security_is_enforced_outside_llm_reasoning" in c["design_principles"]
    assert "LLM_prompt_cannot_override_runtime_policy" in c["enforcement_rules"]


def test_sandbox_and_credential_isolation_are_explicit():
    c = load()["controls"]
    assert "isolated_task_filesystem" in c["sandbox"]
    assert "no_secret_material_in_agent_context" in c["credential_isolation"]
    assert "credential_use_audited_without_logging_secret_value" in c["credential_isolation"]


def test_network_and_tool_access_are_policy_bound():
    controls = load()["controls"]["network_and_tool_control"]
    assert "allowlisted_or_policy_bound_endpoints" in controls
    assert "tool_scope_bound_to_authorized_mission" in controls
    assert "unapproved_arbitrary_network_access_denied" in controls


def test_independent_sentinel_and_fail_closed_controls_exist():
    c = load()
    assert "sentinel" in c["integration_contract"]
    assert "sentinel_unavailable_blocks_consequential_execution" in c["enforcement_rules"]
    assert "audit_unavailable_blocks_consequential_execution" in c["enforcement_rules"]


def test_consequential_events_are_auditable():
    evidence = set(load()["controls"]["evidence"])
    required = {
        "pre_execution_decision",
        "execution_event",
        "provider_or_system_result",
        "post_execution_verification",
        "policy_version",
        "request_fingerprint",
        "mission_id",
        "task_id",
        "idempotency_key",
    }
    assert required <= evidence


def test_srl_does_not_grant_authority():
    assert "never grants new authority" in load()["promotion_rule"]
    assert "does_not_replace_sentinel" in load()["non_goals"]
