const markdownpdf = require('markdown-pdf');
const fs = require('fs');

const markdown = fs.readFileSync('input.md', 'utf8');

markdownpdf().from.string(markdown).to('output.pdf', function () {
  console.log('PDF created');
});