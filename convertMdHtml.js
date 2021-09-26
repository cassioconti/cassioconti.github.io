var marked = require('marked');
var fs = require('fs');

const convert = (input) => {
    var mdFileContent = fs.readFileSync("content/" + input + ".md", "utf-8");
    var htmlConvertedContent = marked(mdFileContent);
    fs.writeFileSync("dist/content/" + input + ".html", htmlConvertedContent);
}

convert("dynamic-load-elements/README")
convert("latex/README")
convert("md-html/README")
convert("md-pdf/README")
