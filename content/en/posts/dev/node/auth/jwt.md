---
title: "jwt - Authorization "
date: 2023-11-14T16:23:22+02:00
---

# Authentication vs Authorization

Authentication
: Checking that a username and
password are correct.

Authorization
: Making sure that the user
that sent a request to my server
is the same one that logged in
through my authentication process
previously.

---

[JWT Online Playground](https://jwt.io)

### JWT Content

* header - encoding algorithm
* payload - all info you want to store inside
* signature

### JWT Signature

It is made from the header + payload
and a secret key.

It allow us to check if the client
tampered with the token content.

The client can't change the content
and create a matching signature
because he doesn't have the secret key.

jwt makes it easy for developers to allow a client to login only once
for a system that comprise of multiple servers.

## NPM Package

```sh
npm i jsonwebtoken
```

let's generate tokens

first we need to import from the `jsonwebtoken` package

```javascript
const jwt = require('jsonwebtoken');
```

secret key: "123"

```javascript
const token = jwt.sign({ nisim: 42 }, '123');
console.log(token);
```

output

```txt
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaXNpbSI6NDIsImlhdCI6MTY3NzQyMzk3MH0.RtB6DnZfiQ6kALGTtqqbmVsw-AdkmP7S9lL7t4iff5U
```

same secret used to generate

```javascript
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
	'eyJuaXNpbSI6NDIsImlhdCI6MTY3NzQyMzk3MH0.' +
	'RtB6DnZfiQ6kALGTtqqbmVsw-AdkmP7S9lL7t4iff5U';

try {
	const data = jwt.verify(token, '123');
	console.log('success! data:', JSON.stringify(data));
}
catch (error) {
	console.error('failed!');
}
```

output

```txt
success! data: { nisim: 42, iat: 1677423970 }
```

in case `verify` method receive different key

```javascript
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
	'eyJuaXNpbSI6NDIsImlhdCI6MTY3NzQyMzk3MH0.' +
	'RtB6DnZfiQ6kALGTtqqbmVsw-AdkmP7S9lL7t4iff5U';

try {
	const data = jwt.verify(token, '123');
	console.log('success! data:', JSON.stringify(data)});
}
catch (error) {
	console.error('failed!');
}
```

output

```txt
failed!
```

having secrets in the code base is a bad practice

```javascript
const jwt = require('jsonwebtoken');
const secret = '123';
const result = jwt.sign({ nisim: 42 }, secret);
```

The solution of using secrets without encoding
them plainly in your js source files is to use
environment variables.

click [here](/post/node/dotenv) to read my guide
for using environment variables in a node program.

If you know how already then you should know we
have to do the following:

```sh
npm i dotenv
```

create `.env` file

`.env`

```txt
SECRET=123
```

```javascript
require('dotenv').config();
const jwt = require('jsonwebtoken');
const result = jwt.sign({ nisim: 42 }, process.env.SECRET);
```

what should be our secret?

You can generate once in a node repl session.

execute the `node` command without arguments

```sh
node
```

run the following command in the node session:

```javascript
require('crypto').randomBytes(64).toString('hex');
```

The `crypto` package is builtin so there is no need to install it.

output

```txt
7df15f6d1ad6dc74824957198d31f1ff884236b9940305eff153918c13566131e84449fccd580d99e0ca26e76ac26b42ad2ed73a61312ec4cb8e7c3d59604c32
```

so we can copy the output and paste it as
the value of the `SECRET` variable so `.env`
should look like this:

`.env`
```txt
SECRET=7df15f6d1ad6dc74824957198d31f1ff884236b9940305eff153918c13566131e84449fccd580d99e0ca26e76ac26b42ad2ed73a61312ec4cb8e7c3d59604c32
```

## Login End Point

authenticated user receive an access token

```javascript
app.post('/login', (req, res) => {
	// authenticate user

	// in case of successfully authentication
	const accessToken = jwt.sign({ name: req.body.username },
		process.env.SECRET);

	res.json({ accessToken });
});
```

How should the client send his token?

Let's say the client want to add a new singer.

POST /singers endpoint

request body:

```json
{
	"fname": "avi",
	"lname": "biter"
}
```

headers:

```txt
Content-Type: 'application/json'
Authorization: 'Bearer 7df15f6...'
```

The token should be assigned to the
`Authorization` header after the prefix "Bearer "

There is a single space between
the word `Bearer` and the token.

It's a good practice to authorize your endpoints via a middleware.

for the sake of simplicity let's authorize `GET /sayHi` end point

```javascript
app.get('/sayHi', auth, (req, res) => {
	res.send(`hi ${req.user.name}!`);
});
```

Let's implement the `auth` middleware.

This is a structure of a middleware function:

```javascript
function auth(req, res, next) {
	// our implementation
}
```

The following function will extract the token from a request object:

```javascript
function extractToken(req) {
	const authHeader = req.headers.authorization;
	return authHeader && authHeader.split(' ')[1];
}
```

Now we can use it to implement the auth middleware:

```javascript
function auth(req, res, next) {
	const token = extractToken(req);

	if (!token) return res.sendStatus(401);

	try {
		const user = jwt.verify(token, process.env.SECRET);
		req.user = user;
		next();
	}
	catch (error) {
		res.sendStatus(403);
	}
}
```
