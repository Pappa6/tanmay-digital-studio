import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load():
    return json.loads((ROOT / "g09_operations_observability_contract.json").read_text())


def test_required_operational_controls_exist():
    controls = set(load()["required_controls"])
    required = {
        "liveness_check", "readiness_check", "dependency_health",
        "queue_depth_and_age", "error_rate", "retry_rate",
        "audit_integrity_alerting", "security_event_alerting",
        "unknown_state_metrics", "stale_worker_detection",
        "idempotency_conflict_metrics", "incident_escalation",
        "rate_limits", "circuit_breakers", "backpressure",
        "safe_shutdown", "restart_recovery", "configuration_drift_detection",
    }
    assert required <= controls


def test_critical_trust_alerts_exist():
    alerts = set(load()["critical_alerts"])
    assert {
        "sentinel_bypass_attempt",
        "credential_exposure_attempt",
        "audit_integrity_failure",
        "unauthorized_external_write_attempt",
        "authority_parameter_drift",
        "recovery_failure",
    } <= alerts


def test_consequential_path_fails_closed_on_control_plane_loss():
    conditions = set(load()["fail_closed_conditions"])
    assert "audit_unavailable_for_consequential_action" in conditions
    assert "sentinel_unavailable_for_consequential_action" in conditions
    assert "policy_unavailable_for_consequential_action" in conditions
    assert "configuration_integrity_uncertain" in conditions
    assert "credential_state_uncertain" in conditions


def test_unknown_does_not_promote():
    assert "cannot pass until" in load()["promotion_rule"]
