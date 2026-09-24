import json
from pathlib import Path

REG=Path(__file__).parents[1]/"indian_language_registry_v1_0.json"
MATRIX=Path(__file__).parent/"test_milc_adversarial_matrix.json"

def test_registry_has_22_scheduled_languages():
    d=json.loads(REG.read_text())
    assert len(d["languages"])==22
    assert {x["code"] for x in d["languages"]}=={"as","bn","brx","doi","gu","hi","kn","ks","kok","mai","ml","mni","mr","ne","or","pa","sa","sat","sd","ta","te","ur"}

def test_registry_includes_required_script_examples():
    d=json.loads(REG.read_text())
    by={x["code"]:x for x in d["languages"]}
    assert "Gurmukhi" in by["pa"]["scripts"]
    assert "Tamil" in by["ta"]["scripts"]
    assert "Telugu" in by["te"]["scripts"]
    assert "Gujarati" in by["gu"]["scripts"]
    assert "Odia" in by["or"]["scripts"]

def test_registry_preserves_milc_safety_policy():
    d=json.loads(REG.read_text())
    assert d["selection_policy"]["prohibited_inference"]==["location_alone","name_alone","phone_number_alone","presumed_ethnicity"]
    assert d["selection_policy"]["low_confidence"]=="CLARIFY_OR_ESCALATE"

def test_adversarial_matrix_has_15_cases():
    cases=json.loads(MATRIX.read_text())
    assert len(cases)==15
    assert all("id" in c and "expected" in c for c in cases)

def test_registry_is_explicitly_not_a_fluency_claim():
    d=json.loads(REG.read_text())
    assert any("does not by itself prove" in n for n in d["notes"])
