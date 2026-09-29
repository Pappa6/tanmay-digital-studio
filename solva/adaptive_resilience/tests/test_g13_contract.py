import unittest

ALLOWED={'observe','hypothesize','sandbox_test','verify','select_safe','recover','learn'}
FORBIDDEN={'change_authority','bypass_sentinel','expose_secret','alter_audit','skip_approval'}

def classify(option):
    return 'BLOCK' if option in FORBIDDEN else ('ALLOW_SANDBOX' if option in ALLOWED else 'REVIEW')

def choose(options, evidence):
    safe=[o for o in options if classify(o)=='ALLOW_SANDBOX' and evidence.get(o,False)]
    return safe[0] if safe else 'ESCALATE'

class G13AdaptiveResilience(unittest.TestCase):
    def test_innovation_stays_inside_boundary(self):
        for o in FORBIDDEN: self.assertEqual(classify(o),'BLOCK')
        for o in ALLOWED: self.assertEqual(classify(o),'ALLOW_SANDBOX')
    def test_unknown_failure_requires_testable_path(self):
        options=['observe','hypothesize','sandbox_test','verify','select_safe','recover','learn']
        evidence={o:True for o in options}
        self.assertEqual(choose(options,evidence),'observe')
    def test_no_evidence_means_escalation(self):
        self.assertEqual(choose(['recover','select_safe'],{}),'ESCALATE')
    def test_learning_cannot_change_authority(self):
        self.assertEqual(classify('change_authority'),'BLOCK')

if __name__=='__main__': unittest.main(verbosity=2)
