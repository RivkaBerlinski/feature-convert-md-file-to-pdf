const markdownpdf = require('markdown-pdf');
const fs = require('fs');

const filename = process.argv[2];

if(!filename){
  console.error('Error: You must provide a filename as an argument');
  process.exit(1);
}

if(!fs.existsSync(filename)){
  console.error(`Error: File '${filename}' does not exist`);
  process.exit(1);
}

if(Path.extname(filename) !== '.md'){
  console.error(`Error: File '${filename}' is not a Markdown file`);
  process.exit(1);
}

const markdown = fs.readFileSync(filename, 'utf8');

markdownpdf().from.string(markdown).to('output.pdf', function () {
  console.log('PDF created');
});

