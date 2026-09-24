import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

def load(name):
    return json.loads((ROOT / name).read_text())

def test_core_stable_edge_replaceable():
    c = load("stal_v1_0_contract.json")
    assert c["principle"] == "CORE_STABLE_EDGE_REPLACEABLE"
    assert c["candidate_is_untrusted_data"] is True

def test_candidate_cannot_gain_authority():
    c = load("stal_v1_0_contract.json")
    forbidden = set(c["candidate_cannot"])
    assert "grant_or_expand_authority" in forbidden
    assert "disable_or_bypass_sentinel" in forbidden

def test_unknown_is_not_pass():
    c = load("stal_v1_0_contract.json")
    assert c["unknown_is_not_pass"] is True

def test_registry_requires_evidence():
    r = load("capability_registry_v1_0.json")
    assert "provider_identity" in r["required_evidence"]
    assert "rollback_target" in r["required_evidence"]

def test_evaluation_requires_baseline_and_comparison():
    e = load("evaluation_protocol_v1_0.json")
    assert e["baseline_required"] is True
    assert e["comparison_must_use_equivalent_workloads"] is True

def test_critical_failures_freeze_promotion():
    e = load("evaluation_protocol_v1_0.json")
    assert "authority_change" in e["critical_failure"]
    assert "secret_exposure" in e["critical_failure"]

def test_automatic_migration_is_pre_authorized_only():
    m = load("migration_policy_v1_0.json")
    assert "pre_authorized_policy_allows_migration" in m["automatic_allowed_when"]
    assert "authority_scope_changes" in m["human_release_required_when"]

def test_fail_closed_on_missing_rollback():
    m = load("migration_policy_v1_0.json")
    assert "missing_rollback" in m["fail_closed_conditions"]

def test_newer_is_not_better_by_default():
    m = load("migration_policy_v1_0.json")
    assert m["principle"] == "NEWER_DOES_NOT_MEAN_BETTER"
