import fs from 'fs';
const text = fs.readFileSync('src/pages/Conversations/index.tsx', 'utf8');
const fixed = text.replace(/\\\\`/g, '`').replace(/\\\\$/g, '$');
fs.writeFileSync('src/pages/Conversations/index.tsx', fixed);
