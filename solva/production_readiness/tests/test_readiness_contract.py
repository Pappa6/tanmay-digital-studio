import json
from pathlib import Path

ROOT = Path(__file__).parents[1]
GATES = json.loads((ROOT / 'readiness_gates.json').read_text())
GPT6 = json.loads((ROOT / 'gpt6_activity_profile.json').read_text())
CERT = json.loads((ROOT / 'completion_certificate.schema.json').read_text())


def test_unknown_never_passes():
    assert GATES['unknown_is_pass'] is False


def test_production_requires_all_applicable_gates():
    assert 'Production-ready only when all applicable gates are PASS' in GATES['promotion_rule']


def test_certificate_requires_evidence():
    assert 'evidence_bundle_id' in CERT['required_fields']
    assert 'unresolved_unknowns' in CERT['required_fields']
    assert 'known_limitations' in CERT['required_fields']


def test_local_simulation_cannot_be_production_claim():
    assert any('Local simulation must not be represented as production verification' in r for r in CERT['validity_rules'])


def test_intelligence_does_not_grant_authority():
    assert GPT6['model_role'] == 'intelligence engine, never authority source'
    assert GPT6['completion_policy']['authority_separate_from_intelligence'] is True


def test_controlled_tooling():
    assert GPT6['tool_policy']['mcp_allowed_only_through_sentinel'] is True
    assert GPT6['tool_policy']['computer_use_requires_policy_and_approval'] is True


def test_consequential_completion_evidence():
    assert GPT6['completion_policy']['claim_success_only_with_evidence'] is True
