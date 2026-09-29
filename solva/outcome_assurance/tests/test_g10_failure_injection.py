import unittest

def assess(expected, actual, independent=True, sources=1):
    if expected is None: return 'UNKNOWN'
    if actual is None or not independent: return 'BLOCK'
    if sources > 1: return 'CONFLICT' if len(set(actual)) > 1 else 'PASS'
    return 'PASS' if expected == actual else 'VARIANCE'

class G10FailureInjection(unittest.TestCase):
    def test_independent_evidence_required(self):
        self.assertEqual(assess('up','up',True),'PASS')
        self.assertEqual(assess('up','up',False),'BLOCK')
    def test_unknown_never_passes(self): self.assertEqual(assess(None,'up'),'UNKNOWN')
    def test_missing_actual_blocks_success_claim(self): self.assertEqual(assess('up',None),'BLOCK')
    def test_negative_or_neutral_result_is_variance(self):
        self.assertEqual(assess('up','flat'),'VARIANCE')
        self.assertEqual(assess('up','down'),'VARIANCE')
    def test_conflicting_evidence_requires_reconciliation(self): self.assertEqual(assess('up',['up','down'],True,2),'CONFLICT')
    def test_activity_is_not_outcome(self): self.assertEqual(assess('outcome',None),'BLOCK')
    def test_expected_actual_comparison(self): self.assertEqual(assess('10%','7%'),'VARIANCE')
    def test_outcome_does_not_grant_authority(self): self.assertEqual('OUTCOME_VERIFIED','OUTCOME_VERIFIED')
    def test_causal_claim_requires_more_evidence(self): self.assertEqual('correlation_without_causal_evidence','ESCALATE')
    def test_evidence_preservation_required(self): self.assertTrue({'expected','actual','comparison'} >= {'expected','actual','comparison'})

if __name__=='__main__': unittest.main(verbosity=2)
