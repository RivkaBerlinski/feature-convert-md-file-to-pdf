const markdownpdf = require('markdown-pdf');
const fs = require('fs');

const filename = process.argv[2];

if(!filename){
  throw new Error(`You must provide a filename as an argument`)
}

if(!fs.existsSync(filename)){
  throw new Error(`File '${filename}' does not exist`)
}

if(Path.extname(filename) !== '.md'){
  throw new Error(`File '${filename}' is not a Markdown file`)
}

const markdown = fs.readFileSync(filename, 'utf8');

markdownpdf().from.string(markdown).to('output.pdf', function () {
  console.log('PDF created');
});

