import json
from pathlib import Path

ROOT = Path(__file__).parents[1]
MATRIX = json.loads((ROOT / "fitness_matrix.json").read_text())


def test_statuses_are_explicit():
    assert MATRIX["statuses"] == ["PASS", "FAIL", "UNKNOWN", "NOT_APPLICABLE"]


def test_unknown_never_counts_as_pass():
    assert "UNKNOWN is never PASS" in MATRIX["principles"]


def test_failure_modes_are_regression_driven():
    assert "every discovered failure becomes a regression case" in MATRIX["principles"]


def test_authority_is_separate_from_intelligence():
    assert "authority never increases because intelligence increases" in MATRIX["principles"]


def test_outcomes_require_evidence():
    assert "a claimed business outcome requires evidence" in MATRIX["principles"]


def test_core_domains_exist():
    required = {
        "mission_lifecycle", "state_machine", "truth_and_evidence",
        "sentinel_and_authority", "prompt_injection", "memory_integrity",
        "identity_resolution", "credentials_and_secrets", "privacy_and_data_boundary",
        "recovery_and_rollback", "outcome_verification", "learning_integrity",
        "audit_integrity", "reliability_and_regression"
    }
    assert required.issubset(set(MATRIX["domains"]))


def test_promotion_blocks_critical_unresolved_risk():
    assert "critical failure modes remain FAIL or materially unresolved UNKNOWN" in MATRIX["promotion_rule"]


def test_continuous_regression_rule_exists():
    assert MATRIX["continuous_rule"].startswith("On every material capability")
