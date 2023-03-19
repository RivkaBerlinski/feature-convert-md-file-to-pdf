const markdownpdf = require('markdown-pdf');
const fs = require('fs');

const filename = process.argv[2];

if(!filename){
  throw new MissingFilename("Error: You must provide a filename as an argument");
}

if(!fs.existsSync(filename)){
  throw new ExistFilename("Error: File '${filename}' does not exist");
}

if(Path.extname(filename) !== '.md'){
  throw new FileTypeError("Error: File '${filename}' is not a Markdown file");
}

const markdown = fs.readFileSync(filename, 'utf8');

markdownpdf().from.string(markdown).to('output.pdf', function () {
  console.log('PDF created');
});


class MissingFilename extends Error {
  constructor(message) {
    super(message);
    this.name = "MissingFilename";
  }
  }
class ExistFilename extends Error {
  constructor(message) {
    super(message);
    this.name = "ExistFilename";
  }
  }
class FileTypeError extends Error {
  constructor(message) {
    super(message);
    this.name = "FileTypeError";
  }
  }