import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

def contract():
    return json.loads((ROOT / "g10_contract.json").read_text())

def test_false_success_is_blocked():
    c=contract()
    assert c["truth_rules"]["unverified_success_claim"]=="BLOCK"

def test_missing_baseline_is_not_pass():
    c=contract()
    assert c["truth_rules"]["missing_baseline"]=="UNKNOWN_OR_ESCALATE"

def test_causal_overclaim_is_blocked():
    c=contract()
    assert c["truth_rules"]["causal_claim_without_evidence"]=="BLOCK"

def test_negative_or_neutral_results_must_be_reported():
    c=contract()
    assert c["business_rules"]["negative_or_neutral_result_must_be_reported"]

def test_activity_cannot_substitute_for_outcome():
    c=contract()
    assert c["business_rules"]["activity_is_not_outcome"]

def test_outcome_learning_cannot_grant_authority():
    c=contract()
    assert c["authority"]["learning_cannot_change_permissions"]
