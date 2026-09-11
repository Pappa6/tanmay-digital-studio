import unittest
from solva.v0_8.fitness_framework import Request, Risk, Decision, evaluate, CONSEQUENTIAL

class FitnessFrameworkTests(unittest.TestCase):
    def test_hard_blocks_override_approval(self):
        for kwargs in [dict(credentials_requested=True), dict(prompt_injection_detected=True), dict(invented_metrics=True)]:
            self.assertEqual(evaluate(Request("research", Risk.RED, approved=True, **kwargs)), Decision.BLOCK)

    def test_identity_block_is_hard(self):
        self.assertEqual(evaluate(Request("send_email", Risk.AMBER, external_write=True, identity_resolved=False, approved=True)), Decision.BLOCK)

    def test_consequential_requires_approval(self):
        for action in CONSEQUENTIAL:
            self.assertEqual(evaluate(Request(action, Risk.GREEN)), Decision.ESCALATE)
            self.assertEqual(evaluate(Request(action, Risk.GREEN, approved=True, idempotency_key="unique")), Decision.ALLOW)

    def test_external_write_requires_approval(self):
        self.assertEqual(evaluate(Request("custom_write", Risk.GREEN, external_write=True)), Decision.ESCALATE)
        self.assertEqual(evaluate(Request("custom_write", Risk.GREEN, external_write=True, approved=True, idempotency_key="u")), Decision.ALLOW)

    def test_red_requires_approval(self):
        self.assertEqual(evaluate(Request("internal", Risk.RED)), Decision.ESCALATE)
        self.assertEqual(evaluate(Request("internal", Risk.RED, approved=True)), Decision.ALLOW)

    def test_production_and_binding_require_approval(self):
        self.assertEqual(evaluate(Request("deploy", Risk.RED, production_change=True)), Decision.ESCALATE)
        self.assertEqual(evaluate(Request("bind_contract", Risk.RED, binding_commitment=True)), Decision.ESCALATE)

    def test_duplicate_consequential_action_blocks(self):
        req = Request("send_email", Risk.AMBER, external_write=True, approved=True, idempotency_key="same")
        self.assertEqual(evaluate(req, {"same"}), Decision.BLOCK)

    def test_repeated_internal_key_does_not_create_false_duplicate(self):
        req = Request("research", Risk.GREEN, idempotency_key="same")
        self.assertEqual(evaluate(req, {"same"}), Decision.ALLOW)

    def test_missing_idempotency_key_does_not_block(self):
        self.assertEqual(evaluate(Request("send_email", Risk.AMBER, external_write=True, approved=True)), Decision.ALLOW)

    def test_risk_matrix_for_safe_internal_action(self):
        for risk in Risk:
            self.assertEqual(evaluate(Request("classify", risk, approved=True)), Decision.ALLOW)

if __name__ == "__main__":
    unittest.main()
