# Rendering markdown on a HTML page

1. Convert markdown to HTML:

```js
var marked = require('marked'); // npm install -D marked
var fs = require('fs');
var readMe = fs.readFileSync('README.md', 'utf-8');
var markdownReadMe = marked(readMe);
fs.writeFileSync('./README.html', markdownReadMe);
```

2. Load the converted file in a div element:

```html
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script>
            $(function () {
                $("#markdown").load("README.html");
            });
        </script>
    </head>
    <body>
        <div id="markdown"></div>
    </body>
</html>
```
