---
title: "npm"
date: 2023-11-15T05:12:32+02:00
tags: [npm, node]
description: "Node Package Manager - npm"
---

# Terminal

toggle vscode terminal:
`Ctrl` + `~`

# Node

## What Is It?

JavaScript runtime environment

## Is it installed on my machine?

run on terminal this:

```sh
node --version
```

and this:

```sh
npm --version
```

## REPL - Read Evaluate Print Loop

execute:

```sh
node
```

to end the node session press: `Ctrl + C`

## Run Script

create file `index.js`

```javascript
console.log('Gimel Yafit');
```

execute:

```sh
node index.js # output: Gimel Yafit
```

# CommonJS - Running Multiple Scripts

```fs-tree
my_project
├── index.js
└── nisim.js
```

simplest

`nisim.js`

```javascript
const bestSinger = 'Avi Biter';
module.exports = bestSinger;
```

`index.js`

```javascript
const myVariable = require('./nisim');
myVariable; // 'Avi Biter'
```

---

export an object:

`nisim.js`

```javascript
const bestSinger = 'Avi Biter';
module.exports = { bestSinger };
```

`index.js`

```javascript
const nisim = require('./nisim');
nisim; // { bestSinger: 'Avi Biter' }
nisim.bestSinger; // 'Avi Biter'
```

---

with destructor:

`nisim.js`

```javascript
const bestSinger = 'Avi Biter';
module.exports.bestSinger = bestSinger;
```

`index.js`

```javascript
const { bestSinger } = require('./nisim');
bestSinger; // 'Avi Biter'
```

---

export multiple stuff:

`nisim.js`

```javascript
const bestSinger = 'Avi Biter';

function isBestSinger(singerName) {
	return singerName === 'Avi Biter';
}

module.exports = {
	bestSinger,
	isBestSinger
};
```

`index.js`

```javascript
const { bestSinger, isBestSinger } = require('./nisim');
bestSinger; // 'Avi Biter'
isBestSinger('Aci Biter'); // true
isBestSinger('Shimi Tavori'); // false
```

# npm - Node Package Manager

install packages on your system

comes from: `npmjs.org`

# Quick Start


## create `package.json` file

config by a wizard

```sh
npm init
```

default config

```sh
npm init --yes
```

# Add package to your project

```javascript
npm install lodash
```

`index.js`

```javascript
const lodash = require('lodash');
const arr = ['nisim', 'shlomo', 'david'];
lodash.each(arr, name => console.log(name));
```

- dependencies in `package.json` file
- `node_modules` folder

In case not all dependencies appear in `node_modules`.

run on terminal:

```sh
npm install
```

# Uninstall package

```sh
npm uninstall lodash
```
