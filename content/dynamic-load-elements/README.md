# Dynamic replace of div elements

1. Find all div elements that contains a `markdown` attribute and use its values to load an HTML.

```html
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script>
            $(function () {
                $("div[markdown]").each((index, elem) => {
                    const mdFile = elem.attributes["markdown"].value + ".html"
                    $.get(mdFile, response => {
                        elem.innerHTML = response
                    });
                })
            });
        </script>
    </head>
    <body>
        <div markdown="README"></div>
    </body>
</html>
```
