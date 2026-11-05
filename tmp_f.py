import json
p='lib/zungoContent.ts'
s=open(p,encoding='utf-8').read()
start=s.index('export const zungoBody = ')+len('export const zungoBody = ')
end=s.index(';\nexport const zungoScript',start)
body=json.loads(s[start:end])
i=body.find('<footer')
chunk=body[i:i+1200]
open('tmp_footer.txt','w',encoding='utf-8').write(chunk)
print('written')
