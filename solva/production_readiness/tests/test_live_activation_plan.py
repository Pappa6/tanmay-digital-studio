import json
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]

def load():
    return json.loads((ROOT/"live_activation_plan_v1_0.json").read_text())

def test_real_connector_is_required_before_employment():
    p=load()
    assert "zoho_mail_connected_and_identity_verified" in p["stages"][0]["required"]

def test_outcome_evidence_is_required():
    p=load()
    assert "independent_outcome_evidence" in p["stages"][2]["required"]

def test_release_requires_explicit_approval():
    p=load()
    assert "explicit_g12_approval" in p["stages"][4]["required"]

def test_initial_scope_contains_business_research():
    p=load()
    assert "public_business_research" in p["initial_employment_scope"]

def test_restricted_scope_preserves_sentinel_and_security():
    p=load()
    assert "sentinel_changes" in p["initially_restricted"]
    assert "security_boundary_changes" in p["initially_restricted"]
