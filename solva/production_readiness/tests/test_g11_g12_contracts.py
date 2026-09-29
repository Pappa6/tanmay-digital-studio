import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

def load(name):
    return json.loads((ROOT / name).read_text())

def test_g11_regression_lock():
    g = load("g11_regression_lock_contract.json")
    assert g["release_rule"]
    assert "FAIL or UNKNOWN blocks release" in g["release_rule"]
    assert len(g["coverage_domains"]) >= 10

def test_g12_requires_explicit_binding():
    g = load("g12_human_release_control_contract.json")
    required = set(g["approval_requirements"])
    assert {"approver_identity","candidate_version","scope","intended_environment","explicit_approval_action"} <= required
    assert "approval_from_silence" in g["prohibitions"]
    assert "inferred_approval" in g["prohibitions"]

def test_g12_does_not_claim_actual_approval():
    g = load("g12_human_release_control_contract.json")
    assert "not evidence of an actual production approval" in g["status_note"]
