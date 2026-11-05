import json
p='lib/zungoContent.ts'
s=open(p,encoding='utf-8').read()
start=s.index('export const zungoBody = ')+len('export const zungoBody = ')
end=s.index(';\nexport const zungoScript',start)
body=json.loads(s[start:end])
# find section ids
import re
for m in re.finditer(r'<section[^>]*id="[^"]*"', body):
    print(m.group(0))
