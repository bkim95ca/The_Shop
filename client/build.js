const fs = require('fs');
const path = require('path');

const output = path.join(__dirname, 'build');
fs.rmSync(output, { recursive: true, force: true });
fs.cpSync(path.join(__dirname, 'public'), output, { recursive: true });
console.log(`Static site copied to ${output}`);