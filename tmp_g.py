const fs = require('fs');
const s = fs.readFileSync('lib/zungoContent.ts','utf8');
const i = s.indexOf('class=\\"gallery\\"');
console.log('found', i);
if (i>=0) console.log(s.slice(i-20, i+500));
