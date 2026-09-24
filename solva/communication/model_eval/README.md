# MILC Model-In-Loop Evaluation

This package separates model generation from independent evaluation.

A runtime provider must supply structured outputs for the 22-case corpus. Provider credentials and endpoints are runtime configuration only and must never be committed.

Promotion requires all 22 cases executed by the intended model adapter, structured output captured for every case, deterministic independent scoring, zero critical errors, native-speaker validation for fluency, and MILC-to-Authority-to-Sentinel integration tests.

If the provider is unavailable, status remains UNKNOWN.
