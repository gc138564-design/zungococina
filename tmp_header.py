import json
p='lib/zungoContent.ts'
s=open(p,encoding='utf-8').read()
start=s.index('export const zungoBody = ')+len('export const zungoBody = ')
end=s.index(';\nexport const zungoScript',start)
body=json.loads(s[start:end])
i=body.find('<header')
chunk=body[i:i+1500]
open('tmp_header.txt','w',encoding='utf-8').write(chunk)
print('written')
