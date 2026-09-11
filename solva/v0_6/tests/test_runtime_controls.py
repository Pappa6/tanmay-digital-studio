import unittest
from solva.v0_6.runtime_controls import Request, Risk, Decision, evaluate

class RuntimeControlTests(unittest.TestCase):
    def test_credential_block(self):
        self.assertEqual(evaluate(Request("research", Risk.GREEN, credentials_requested=True)).decision, Decision.BLOCK)
    def test_prompt_injection_block(self):
        self.assertEqual(evaluate(Request("research", Risk.GREEN, prompt_injection_detected=True)).decision, Decision.BLOCK)
    def test_unresolved_identity_block(self):
        self.assertEqual(evaluate(Request("send_email", Risk.AMBER, external_write=True, identity_resolved=False)).decision, Decision.BLOCK)
    def test_external_write_escalates(self):
        self.assertEqual(evaluate(Request("send_email", Risk.AMBER, external_write=True)).decision, Decision.ESCALATE)
    def test_approved_external_write_allows(self):
        self.assertEqual(evaluate(Request("send_email", Risk.AMBER, external_write=True, approved=True, idempotency_key="k1")).decision, Decision.ALLOW)
    def test_production_change_escalates(self):
        self.assertEqual(evaluate(Request("deploy", Risk.RED, production_change=True)).decision, Decision.ESCALATE)
    def test_binding_commitment_escalates(self):
        self.assertEqual(evaluate(Request("bind_contract", Risk.RED, binding_commitment=True)).decision, Decision.ESCALATE)
    def test_invented_metrics_block(self):
        self.assertEqual(evaluate(Request("diagnose", Risk.GREEN, invented_metrics=True)).decision, Decision.BLOCK)
    def test_duplicate_blocks(self):
        req = Request("send_email", Risk.AMBER, external_write=True, approved=True, idempotency_key="dup")
        self.assertEqual(evaluate(req, {"dup"}).decision, Decision.BLOCK)
    def test_green_internal_allows(self):
        self.assertEqual(evaluate(Request("classify", Risk.GREEN)).decision, Decision.ALLOW)

if __name__ == "__main__":
    unittest.main()
