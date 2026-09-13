import unittest
from dataclasses import dataclass

@dataclass
class Runtime:
    sentinel: bool=True; policy: bool=True; audit: bool=True; config: bool=True; creds: bool=True; identity: bool=True
    queue_age: int=0; retry_rate: int=0; connector_up: bool=True; provider_ambiguous: bool=False
    stale_worker: bool=False; approval_valid: bool=True; idempotency_conflict: bool=False; security_event: bool=False
    running: bool=True

def consequential_allowed(r):
    hard = [r.sentinel, r.policy, r.audit, r.config, r.creds, r.identity,
            r.connector_up, r.approval_valid, not r.provider_ambiguous,
            not r.stale_worker, not r.idempotency_conflict, not r.security_event]
    return all(hard)

def operational_action(r, action):
    if action == 'consequential': return 'ALLOW' if consequential_allowed(r) else 'FREEZE_AND_ESCALATE'
    if action == 'internal': return 'ALLOW' if r.config and r.audit else 'SAFE_STOP'
    if action == 'shutdown': r.running=False; return 'SAFE_SHUTDOWN'
    return 'BLOCK'

class G09OperationalFailureInjection(unittest.TestCase):
    def test_baseline(self): self.assertEqual(operational_action(Runtime(),'consequential'),'ALLOW')
    def test_fail_closed_critical_dependencies(self):
        for field in ('sentinel','policy','audit','config','creds','identity'):
            r=Runtime(); setattr(r,field,False); self.assertEqual(operational_action(r,'consequential'),'FREEZE_AND_ESCALATE')
    def test_connector_and_provider_failures(self):
        for field in ('connector_up','approval_valid','provider_ambiguous'):
            r=Runtime(); setattr(r,field,False if field!='provider_ambiguous' else True); self.assertEqual(operational_action(r,'consequential'),'FREEZE_AND_ESCALATE')
    def test_stale_worker_and_idempotency(self):
        for field in ('stale_worker','idempotency_conflict'):
            r=Runtime(); setattr(r,field,True); self.assertEqual(operational_action(r,'consequential'),'FREEZE_AND_ESCALATE')
    def test_security_event(self):
        r=Runtime(security_event=True); self.assertEqual(operational_action(r,'consequential'),'FREEZE_AND_ESCALATE')
    def test_safe_shutdown_and_internal_degradation(self):
        r=Runtime(); self.assertEqual(operational_action(r,'shutdown'),'SAFE_SHUTDOWN'); self.assertFalse(r.running)
        r=Runtime(audit=False); self.assertEqual(operational_action(r,'internal'),'SAFE_STOP')
    def test_restart_recovery(self):
        r=Runtime(); r.running=False; r.running=True; self.assertEqual(operational_action(r,'consequential'),'ALLOW')
    def test_queue_pressure_does_not_grant_authority(self):
        r=Runtime(queue_age=999, retry_rate=999); self.assertEqual(operational_action(r,'consequential'),'ALLOW')

if __name__=='__main__': unittest.main(verbosity=2)
