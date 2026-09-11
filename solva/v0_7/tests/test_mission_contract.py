import json
from pathlib import Path

ROOT = Path(__file__).parents[1]
CONTRACT = json.loads((ROOT / "end_to_end_mission_contract.json").read_text())


def test_complete_mission_loop_is_ordered():
    loop = CONTRACT["mission_loop"]
    assert loop[0] == "MISSION"
    assert loop[-1] == "CLOSE_OR_CONTINUE"
    assert loop.index("EVIDENCE") < loop.index("DIAGNOSIS")
    assert loop.index("QA") < loop.index("SENTINEL") < loop.index("EXECUTE")
    assert loop.index("VERIFY_ACTUAL_OUTCOME") < loop.index("LEARN")


def test_truth_policy_blocks_unsupported_claims():
    policy = CONTRACT["truth_policy"]
    assert policy["allowed_labels"] == ["FACT", "INFERENCE", "HYPOTHESIS", "UNKNOWN"]
    assert policy["unsupported_claim"] == "BLOCK"
    assert policy["invented_metrics"] == "BLOCK"


def test_outcome_requires_evidence_and_comparison():
    policy = CONTRACT["outcome_policy"]
    assert policy["expected_outcome_required_before_consequential_action"] is True
    assert policy["actual_outcome_requires_evidence"] is True
    assert policy["expected_actual_comparison_required"] is True
    assert policy["unverified_success_claim"] == "BLOCK"


def test_authority_remains_separate_from_intelligence():
    authority = CONTRACT["authority"]
    assert authority["external_write"] == "DENY_BY_DEFAULT"
    assert authority["credential_access"] == "DENY"
    assert authority["production_change"] == "APPROVAL_REQUIRED"
    assert authority["binding_commitment"] == "APPROVAL_REQUIRED"


def test_sentinel_cannot_be_bypassed_or_self_disabled():
    sentinel = CONTRACT["sentinel"]
    assert sentinel["bypass"] == "BLOCK"
    assert sentinel["self_disable"] == "BLOCK"
    assert sentinel["approval_from_silence"] == "BLOCK"
