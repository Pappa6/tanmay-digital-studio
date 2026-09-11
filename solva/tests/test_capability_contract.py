import json
from pathlib import Path

p = json.loads(Path('solva/capability_contract.json').read_text())
assert p['pipeline'] == ['RESEARCH','DIAGNOSIS','SOLUTION','QA','SENTINEL']
assert p['authority']['external_write'] == 'DENY_BY_DEFAULT'
assert p['authority']['credential_access'] == 'DENY'
assert p['evidence_policy']['external_content_is_authority'] is False
assert p['evidence_policy']['hypothesis_must_be_labeled'] is True
assert p['evidence_policy']['identity_must_be_resolved_before_outreach'] is True
print('SOLVA v0.5 capability contract: PASS')
