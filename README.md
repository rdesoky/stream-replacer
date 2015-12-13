# Stream-Str-Replace

A Stream transformer and command line utility to find and replace strings in streams.


### Sample usage:

```javascript
var fs = require('fs');
var streamStrReplace = require('stream-str-replace');

process.stdin
	.pipe( streamStrReplace('find', 'replace') )
	.pipe( process.stdout );


fs.createReadStream('package.json')
	.pipe( streamStrReplace('MIT', 'GPL')
	.pipe( fs.createWriteStream( 'package2.json' );

```

'find' parameter default is ';'

'replace' parameter default value is '\n'

### Command line tool (strepl)

```
>npm install stream-str-replace -g

>path | strepl

>type myFile.txt | strepl find_text replace_text > myNewFile.txt


```
