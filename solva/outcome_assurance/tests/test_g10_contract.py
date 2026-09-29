import json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]

def load(): return json.loads((ROOT/'g10_contract.json').read_text())

def test_required_evidence():
    e=set(load()['required_evidence'])
    assert {'expected_outcome','action_evidence','independent_actual_outcome_evidence','expected_vs_actual_comparison'} <= e

def test_truth_rules():
    r=load()['truth_rules']; assert r['unknown_is_not_pass']; assert r['unverified_success_claim']=='BLOCK'; assert r['invented_metric']=='BLOCK'

def test_activity_is_not_outcome(): assert load()['business_rules']['activity_is_not_outcome']

def test_promotion_requires_intended_runtime_evidence(): assert 'intended runtime' in load()['promotion_rule']
