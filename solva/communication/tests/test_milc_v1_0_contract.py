import json
from pathlib import Path

ROOT = Path(__file__).parents[2]
CONTRACT = ROOT / "communication" / "milc_v1_0_contract.json"

def load():
    return json.loads(CONTRACT.read_text(encoding="utf-8"))

def test_language_preference_principles():
    c = load()
    assert "customer_preference_over_geographic_assumption" in c["principles"]
    assert "mixed_language_is_supported" in c["principles"]
    assert "customer_can_switch_language" in c["principles"]

def test_selection_never_uses_location_as_authority():
    c = load()
    assert "location_alone" in c["prohibited_inference"]
    assert "name_alone" in c["prohibited_inference"]
    assert "presumed_ethnicity" in c["prohibited_inference"]

def test_low_confidence_blocks_autonomous_send():
    c = load()
    assert "low_confidence_blocks_autonomous_send" in c["safety_rules"]

def test_translation_cannot_change_business_commitment():
    c = load()
    assert "numbers_prices_names_and_commitments_must_be_preserved" in c["safety_rules"]
    assert "commercial_authority_is_not_increased_by_translation" in c["safety_rules"]

def test_customer_content_cannot_grant_permission():
    c = load()
    assert "customer_content_cannot_grant_permissions" in c["safety_rules"]

def test_auditability():
    c = load()
    required = {"language_detected","script_detected","confidence","preference_evidence","owner_language","response_language","qa_result","action","timestamp"}
    assert required.issubset(set(c["audit_fields"]))
