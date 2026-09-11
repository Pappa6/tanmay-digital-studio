# SOLVA v0.8 — Test & Fitness Framework

Purpose: continuously identify and test meaningful SOLVA failure modes rather than target an arbitrary test count.

Fitness rules:
- PASS means the behavior was actually exercised and matched the expected invariant.
- FAIL means an exercised invariant was violated.
- UNKNOWN means coverage/evidence is insufficient; UNKNOWN is never PASS.
- Test count is not a fitness score.
- New capabilities, tools, connectors, autonomy, and discovered incidents must generate new or revised tests.
- Hard safety blocks take precedence over approval.
- Idempotency protection applies to consequential/external actions; harmless internal work must not be blocked merely because an informational key repeats.

Current scope includes policy matrix, hard-block precedence, authorization gates, identity resolution, idempotency, risk handling, and adversarial combinations.

This milestone is a development/testing framework. It is not a production-readiness or security-certification claim.
