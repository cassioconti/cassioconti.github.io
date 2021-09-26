var marked = require('marked'); // npm install -D marked
var fs = require('fs');
var readMe = fs.readFileSync('README.md', 'utf-8');
var markdownReadMe = marked(readMe);
fs.writeFileSync('./README.html', markdownReadMe);