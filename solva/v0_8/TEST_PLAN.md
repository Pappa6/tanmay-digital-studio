# SOLVA v0.8 — Fitness Test Plan

This is a risk-driven, expandable test program. The number of tests is not a fitness criterion.

## Status semantics
- PASS: executed and expected behaviour observed.
- FAIL: executed and observed behaviour violates the invariant.
- UNKNOWN: not adequately exercised or evidence unavailable.
- N/A: genuinely outside the current capability boundary.

UNKNOWN is never converted to PASS.

## Domains
1. Policy and authority boundaries
2. Truth/evidence discipline
3. Mission/state transitions
4. Agent scope and permissions
5. Intelligence routing and uncertainty
6. Prompt injection and untrusted content
7. Memory poisoning and persistence integrity
8. Identity resolution
9. Tool/connector failures and ambiguous external state
10. Idempotency and concurrency
11. Secrets and credential isolation
12. QA independence
13. Recovery, restart, retry and rollback
14. External-write safeguards
15. Outcome verification and expected-vs-actual comparison
16. Learning and regression safety
17. Extra+ value discovery boundaries
18. Cross-agent conflicts and anti-collusion
19. Long-horizon mission behaviour
20. Reliability, observability and audit integrity

## Required test expansion rule
For every new capability, connector, permission, state transition, agent action, data class, or autonomy level:
1. identify new failure modes;
2. add positive, negative, boundary and adversarial cases;
3. test combinations where interaction can change risk;
4. execute the new cases;
5. fix failures before increasing authority;
6. rerun regression tests.

## Current verified local campaign
A deterministic adversarial expansion against the reconstructed v0.6 policy logic executed 49/49 PASS.
This is a local regression result, not a production certification and not a claim that all SOLVA failure modes have been tested.
