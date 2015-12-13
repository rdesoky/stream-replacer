# Stream-Replacer

A Stream transformer and command line utility to find and replace strings in streams.


### Sample usage:
```javascript
process.stdin.pipe( require("stream-replacer")(find, replace) ).pipe(process.stdout);

```

'find' parameter default is ';'

'replace' parameter default value is '\n'

### Command line tool (strepl)



```
>npm install stream-replacer -g

>type myFile.txt | strepl find_text replace_text > myNewFile.txt

>path | strepl

```
