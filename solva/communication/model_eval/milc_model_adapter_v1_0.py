"""Provider-neutral MILC model adapter."""
from dataclasses import dataclass
from typing import Protocol

@dataclass(frozen=True)
class ModelOutput:
    language: str
    script: str
    intent: str
    confidence: float
    response_language: str
    authority_granted: bool

class MILCModelAdapter(Protocol):
    def generate(self, message: str, expected_intent: str) -> ModelOutput:
        """Run the intended model and return structured MILC output."""
        ...
