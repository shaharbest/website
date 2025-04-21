---
title: "File System"
date: 2023-11-15T05:18:56+02:00
description: "fs - File System in Node"
---


# Three ways

1. callbacks
2. sync
3. promises

print all files in a given directory

under project dir:

```txt
bamba
	f1.txt
	f2.txt
	f3.txt
```

# first import `fs` and `path`

```javascript
const fs = require('fs');
const path = require('path');
```

# generate the directory path

```javascript
const bambaPath = path.join(__dirname, 'bamba');
```

# run `readdir` function

```javascript
fs.readdir(bambaPath, (err, files) => {
	if (err) {
		console.error(err);
		return;
	}

	console.log(files);
});
```

the callback way is asynchronous

# the Sync way

```javascript
console.log(fs.readdirSync(bambaPath));
```

currently an error will crash the process.

so we should add `try`{.js} and `catch`{.js} blocks.

```javascript
try {
	console.log(fs.readdirSync(bambaPath));
}
catch (err) {
	console.error(err);
}
```

```javascript
fs.promises.readdir(bambaPath)
	.then(files => console.log(files));
```

in case of an error this program will crash the process.

so we should add the `catch` method.

```javascript
fs.promises.readdir(bambaPath)
	.then(files => console.log(files))
	.catch(err => console.error(err));
```

let's also use async await syntax

```javascript
const files = await fs.promises.readdir(bambaPath);
console.log(files);
```

this will cause an error

await reserved word can be used
only in a function with the async key word.

```javascript
nisim();

async function nisim() {
	const files =
		await fs.promises.readdir(bambaPath);
	console.log(files);
}
```

what if an error will happen?

just use `try`{.js} and `catch`{.js} blocks.

```javascript
nisim();

async function nisim() {
	try {
		const files =
			await fs.promises.readdir(bambaPath);
		console.log(files);
	}
	catch (err) {
		console.error(err);
	}
}
```

other useful fs functions

* mkdir
* rmdir
* readFile
* writeFile
* appendFile
* rm
* cp
* rename

`writeFile` and `appendFile` create the file if it doesn't exist.

`readFile` requires a second argument for encoding.

we mostly (if not only) use `utf8`

```javascript
// inside async function
const content = await fs.readFile(bambaPath, 'utf8');
console.log(content);
```
