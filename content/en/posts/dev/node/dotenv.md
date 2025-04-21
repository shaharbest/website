---
title: "dotenv"
date: 2023-11-15T00:42:30+02:00
description: "Environment Variables with package dotenv"
---

# Define env vars in a file

1. Create an `.env` file
2. Use `dotenv` package.

# `.env` file content

for example:

`.env`
```txt
NISIM=bamba
SHLOMO=avi biter
DAVID=42
```

```javascript
console.log(process.env.NISIM); // undefined
console.log(process.env.SHLOMO); // undefined
console.log(process.env.DAVID); // undefined
```

# Why undefined?

having `.env` file is not enough.

you also have to:

* install `dotenv` package.
* import package.
* run `config` method.

# dotenv package

install

```sh
npm install dotenv
```

`index.js`

```javascript
require('dotenv').config();

console.log(process.env.NISIM); // 'bamba'
console.log(process.env.SHLOMO); // 'avi biter'
console.log(process.env.DAVID); // '42'
console.log(typeof process.env.DAVID); // 'string'
```

so we should have something like this

`.env`
```txt
SECRET=123
```
