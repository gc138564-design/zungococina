import json
p='lib/zungoContent.ts'
s=open(p,encoding='utf-8').read()
start=s.index('export const zungoBody = ')+len('export const zungoBody = ')
end=s.index(';\nexport const zungoScript',start)
body=json.loads(s[start:end])
i=body.find('id="experiencia"')
print(body[i-20:i+900])
