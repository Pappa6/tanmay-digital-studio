import json
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]

def load():
    return json.loads((ROOT/"g08_execution_contract_v1_0.json").read_text())

def test_g08_is_provider_specific():
    p=load()
    assert p["provider_under_test"]=="zoho_mail"
    assert p["required_identity"]=="tanmay64@zohomail.in"

def test_all_21_cases_are_defined():
    p=load()
    assert len(p["test_sequence"])==21

def test_mock_execution_cannot_promote():
    p=load()
    assert "Mock, synthetic, or alternate-mail-provider execution cannot promote G08." == p["simulation_rule"]

def test_identity_and_sentinel_fail_closed():
    p=load()
    assert "identity_ambiguous" in p["fail_closed_on"]
    assert "sentinel_unavailable" in p["fail_closed_on"]
