---
title: "bcrypt for Authentication"
date: 2023-11-14T16:23:22+02:00
---

# The Naive Way

```javascript
const users = [];

app.post('/users', (req, res) => {
	const newUser = {
		username: req.body.username,
		password: req.body.password,
	};

	users.push(newUser);
	res.sendStatus(201);
});
```

1. We want to know if a registered user typed
   the right password in the login process.

2. We don't want the passwords to be stored
   plainly in the server machine.

The solution: hashing

# Hash

Hash Function
: a function that gets data and return a string.

This string is called a hash.

## sha256

The string: 'pass' hashed is:

`d74ff0ee8da3b9806b18c877dbf29bbde50b5bd8e4dad7a3a725000feb82e8f1`

The string: 'pas' hashed is:

`7f1f073d8bb9b2e3ad6c885019660d1b51b389f8e9169ebd15586467f8bc87e6`

this one called 256 because
the hash us made from 256 bits.

## What is special about it?

You can't know the original data by looking at the hash.

to the contrary:

```javascript
function foo(num) {
	return 2 * num;
}
```

If `foo` function returns `6` we know it received `3`.

If hash function returns: `7f1f073d8bb9b2e3ad6c885019660d1b51b389f8e9169ebd15586467f8bc87e6`

There is no way of knowing what the function received.

[Online Demo](https://emn178.github.io/online-tools/sha256.html)

so instead of storing a password plainly
we can store it's hash.

## Login Process

1. A user send his username and password.
2. The server hash the received password.
3. The server compare the hashed password
   with the stored hash.
4. if the two hashed are the same then
   it must be the right password.

# Attack Types

1. Rainbow table
2. Brutforce Attack
3. Dictionary Attack

## Rainbow table

lots and lots of entries in this kind of a table

| password |   hash    |
|:--------:|:----------|
|   pass   | 9f56e7... |
|  bamba   | 43a8f3... |
|  bisli   | bb7673... |

[Online Example](https://hashes.com/en/decrypt/hash)

## Brutforce Attack

Try every possible combination

Hash every possible combination
and compare to a target hash

## Dictionary Attack

Hash common passwords
and compare to a target hash

# Salt

Salt is a short random string. For example: `P#)!z`.

The server create a salt for each registered user.

let's say:

| Chosen Password  | Generated Salt  |
| :--------------: | :-------------: |
| `Ilikecats`      | `P#)!z`         |

Instead of hashing `Ilikecats`
the server will hash the
concatenation: `IlikecatsP#)!z`

this is the hash of the concatenation:

`9a5be4ec21a7ac006a8d93c85e5682f8c111bc973bb930b5edfe99dd4291854c`

The concatenation of the plain salt
and the hash will be stored:

`P#)!z.9a5be4ec21a7ac006a8d93c85e5682f8c111bc973bb930b5edfe99dd4291854c`

Salt eliminate the problem of Rainbow table
but not the brutforce and dictionary

`script.js`

```javascript
const bcrypt = require('bcrypt');

printSaltAndHash('123');

async function printSaltAndHash(pass) {
	const salt = await bcrypt.genSalt();
	const hashedPass = await bcrypt.hash(pass, salt);
	console.log(salt);
	console.log(hashedPass);
}
```

Let's see the output of running the script twice:

```sh
node script.js
node script.js
```

first execution output

```txt
$2b$10$ACc6BnjeKG3Rjqrny6XU8u
$2b$10$ACc6BnjeKG3Rjqrny6XU8ulElm307008bZA41UUAsKQn8iQHRrlVG
```

second execution output

```txt
$2b$10$Yq3Cse7zgtMxLrVcyhHYee
$2b$10$Yq3Cse7zgtMxLrVcyhHYeewQ6VcnIGn6f3v1uVeyUJso9yOAGPnVG
```

Even if two users inserted the same
passwords, it's almost certain that
a different hash will be stored.

```javascript
async function printSaltAndHash(pass) {
	const salt = await bcrypt.genSalt();
	const hashedPass = await bcrypt.hash(pass, salt);
	console.log(salt, hashedPass);
}
```

## `bcrypt.getSalt` method argument

The function receive rounds as an
argument - `10` by default.

```javascript
const salt = await bcrypt.genSalt();
```

equivalent to

```javascript
const salt = await bcrypt.genSalt(10);
```

## `bcrypt.hash` method arguments

The second arg of `hash` is a salt or rounds number so

```javascript
const salt = await bcrypt.genSalt(10);
const hashedPass = await bcrypt.hash(pass, salt);
```

equivalent to

```javascript
const hashedPass = await bcrypt.hash(pass, 10);
```

therefore

```javascript
async function printSaltAndHash(pass) {
	const salt = await bcrypt.genSalt();
	const hashedPass = await bcrypt.hash(pass, salt);
	console.log(salt, hashedPass);
}
```

equivalent to

```javascript
async function printSaltAndHash(pass) {
	const hashedPass = await bcrypt.hash(pass, 10);
	console.log(salt, hashedPass);
}
```

Don't forget to handle problems

```javascript
async function printSaltAndHash(pass) {
	try {
		const hashedPass = await bcrypt.hash(pass, 10);
		console.log(salt, hashedPass);
	}
	catch (err) {
		console.error(err);
	}
}
```

## Register End Point

```javascript
app.post('/users/register', async (req, res) => {
	try {
		const givenPass = req.body.password;
		const hashedPass = await bcrypt.hash(givenPass, 10);

		const newUser = {
			username: req.body.username,
			password: hashedPass,
		};

		users.push(newUser);
		res.sendStatus(201);
	}
	catch (err) {
		res.sendStatus(500);
	}
});
```

# Login

```javascript
app.post('/users/login', async (req, res) => {
	// find user by name

	// inform failure in case of unknown user.
	// end function.

	// check if given pass match to
	// the hashed and salted one.

	// inform client the compare result
}
```

```javascript
app.post('/users/login', async (req, res) => {
	try {
		const user = users.find(u => u.username === req.body.username);

		if (!user) return res.status(400).send('unknown username');

		const hashedSaltedPass = user.password;
		const givenPass = req.body.password;

		if (await bcrypt.compare(givenPass, hashedSaltedPass))
			res.send('success');
		else
			res.status(401).send('not allowed');
	}
	catch {
		res.status(500).send('server error');
	}
}
```
