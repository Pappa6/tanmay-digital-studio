import json
from pathlib import Path

ROOT = Path(__file__).parent
MATRIX = ROOT / "milc_authority_sentinel_integration_matrix_v1_0.json"

EXPECTED = {
    "INT01": "ALLOW_LANGUAGE_ADAPTATION",
    "INT02": "ALLOW_LANGUAGE_ADAPTATION",
    "INT03": "SWITCH_RESPONSE_LANGUAGE",
    "INT04": "CLARIFY_OR_ESCALATE",
    "INT05": "BLOCK_AUTHORITY_ESCALATION",
    "INT06": "BLOCK_BINDING_MISMATCH",
    "INT07": "UNTRUSTED_CONTENT",
    "INT08": "BLOCK_IDENTITY_MISMATCH",
    "INT09": "NO_LOCATION_INFERENCE",
    "INT10": "FAIL_CLOSED",
}

def test_matrix_is_complete_and_exact():
    data = json.loads(MATRIX.read_text(encoding="utf-8"))
    cases = {case["id"]: case["expected"] for case in data["cases"]}
    assert cases == EXPECTED
    assert len(cases) == 10

def test_promotion_rule_blocks_on_any_critical_failure():
    data = json.loads(MATRIX.read_text(encoding="utf-8"))
    assert "Any authority" in data["promotion_rule"]
    assert "blocks promotion" in data["promotion_rule"]
