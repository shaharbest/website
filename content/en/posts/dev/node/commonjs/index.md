---
title: "CommonJS"
date: 2023-11-15T05:10:10+02:00
---

CommonJS is the way to package our JavaScript code into modules for the Node runtime.

![brain](img/brain.webp)

In simple terms: a way to break a single js script into many.

# Examples

`stam.js`

```javascript
const num = 42;
module.exports = { num }; // { num } is a shorthand for { num: num }
```

`index.js`

```javascript
const bamba = require('./stam');
bamba.num; // 42
```

---

if you want to import only `num`:

`index.js`

```javascript
const number = require('./stam').number;
number; // 42
```

you can also use the [destructure](/post/js/destructure) syntax

`index.js`

```javascript
const { number } = require('./stam');
number; // 42
```

---

functions and classes

`stam.js`

```javascript
function sayHi() { console.log('hi'); }

function sayBye() { console.log('bye'); }

class Person {
	constructor(_fname, _lname) {
		this.fname = _fname;
		this.lname = _lname;
	}
}

module.exports = { sayHi, sayBye, Person };
```

importing them exactly the same way

`index.js`
```javascript
const { sayHi, sayBye, Person } = require('./stam');

sayHi();
sayBye();
new Person('avi', 'biter');
```

---

# Core modules (builtin)

`index.js`

```javascript
const fs = require('fs');
```

---

# Installed modules

only after installing express by executing:

```sh
npm install express
```

you can run

```javascript
const express = require('express');
```
