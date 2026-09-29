import json
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]

def load(name): return json.loads((ROOT / name).read_text())

def test_current_candidate_separation():
    r=load('capability_registry_v1_0.json')
    for c in r['capabilities']:
        assert 'current' in c and 'candidate' in c and 'backup' in c

def test_candidate_promotion_needs_release_gate():
    e=load('evaluation_protocol_v1_0.json')
    assert 'release_gate' in e['promotion_requires']

def test_sensitive_changes_require_human_release():
    m=load('migration_policy_v1_0.json')
    required={'authority_scope_changes','security_or_privacy_boundary_changes','identity_or_credential_model_changes','policy_or_mission_changes'}
    assert required.issubset(set(m['human_release_required_when']))

def test_fail_closed_conditions_are_explicit():
    m=load('migration_policy_v1_0.json')
    assert set(['unknown_evidence','sentinel_unavailable','audit_unavailable']).issubset(set(m['fail_closed_conditions']))
