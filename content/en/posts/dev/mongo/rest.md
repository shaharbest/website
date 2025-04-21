---
title: "REST API with mongoose"
date: 2023-11-07T19:08:28+02:00
---

```sh
npm init -y
npm i express
```

`package.json`

```json
{
	"scripts": {
		"start": "node index.js",
		"dev": "nodemon index.js"
	}
}
```

`index.js`

```javascript {linenos=true}
const express = require('express');
const port = 5000;
const app = express();

let users = [
	{ id: 1, name: 'nisim', age: 42 },
	{ id: 2, name: 'shlomo', age: 23 },
	{ id: 3, name: 'david', age: 666 },
];

app.use(express.json());

app.get('/ping', (req, res) => res.send('pong'));

app.get('/users', (req, res) => {
	res.json(users);
});

app.get('/users/:id', (req, res) => {
	const givenUserId = parseInt(req.params.id);
	const requestedUser = users.find(u => u.id === givenUserId);
	res.json(requestedUser);
});

app.post('/users', (req, res) => {
	const userToAdd = req.body;
	userToAdd.id = 666;
	users.push(userToAdd);
	res.status(201).send(`${userToAdd.name} was added`);
});

app.delete('/users/:id', (req, res) => {
	const givenUserId = parseInt(req.params.id);
	users = users.filter(u => u.id !== givenUserId);
	res.send(`user with id ${givenUserId} was deleted`);
});

app.listen(port, () => {
	console.log('listen to port', port);
});
```

## Express Router

`routes/usersRouter.js`

```javascript {linenos=true}
const express = require('express');
const router = express.Router();

let users = [
	{ id: 1, name: 'nisim', age: 42 },
	{ id: 2, name: 'shlomo', age: 23 },
	{ id: 3, name: 'david', age: 666 },
];

router.get('/', (req, res) => {
	res.json(users);
});

router.get('/:id', (req, res) => {
	const givenUserId = parseInt(req.params.id);
	const requestedUser = users.find(u => u.id === givenUserId);
	res.json(requestedUser);
});

router.post('/', (req, res) => {
	const userToAdd = req.body;
	userToAdd.id = 666;
	users.push(userToAdd);
	res.status(201).send(`user ${userToAdd.name} was added`);
});

router.delete('/:id', (req, res) => {
	const givenUserId = parseInt(req.params.id);
	users = users.filter(u => u.id !== givenUserId);
	res.send(`user with id ${givenUserId} was deleted`);
});

module.exports = router;
```

and refactor the `index.js`

```javascript {linenos=true hl_lines=[12]}
const express = require('express');
const port = 5000;

const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.use('/users', require('./routes/usersRoutes'));

app.listen(port, () => {
    console.log('listen to port', port);
});
```

## Manual Server Testing

print all users

```sh
curl "localhost:5000/users"
```

print user by `id`

```sh
curl "localhost:5000/users/1"
curl "localhost:5000/users/2"
curl "localhost:5000/users/3"
```

insert "Avi Biter"

```sh
curl -X POST -H "Content-Type: application/json" \
	-d '{"name": "avi biter", "age": 25}' \
	"localhost:5000/users"
```

delete "Avi Biter"

```sh
curl -X DELETE "localhost:5000/users/666"
```

## Test MongoDB

```sh
npm i mongoose dotenv
```

`.env`

```txt
ATLAS_HOST=www.atlasmashu.com
ATLAS_USER=my-user
ATLAS_PASS=my-secret
```

`test.js`

```javascript {linenos=true}
require('dotenv').config();
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
});

const User = mongoose.model('user', userSchema);

main();

async function main() {
	mongoose.connect(`mongodb+srv://${process.env.ATLAS_HOST}`, {
		user: process.env.ATLAS_USER,
		pass: process.env.ATLAS_PASS,
		dbName: 'my-db-name'
	});
	console.log(await User.find({}));
	mongoose.connection.close();
}
```

## Break Script Into Files

we will create:

* db.js
* models/User.js

`db.js`

```javascript {linenos=true}
require('dotenv').config();
const mongoose = require('mongoose');

function connect() {
	mongoose.connect(`mongodb+srv://${process.env.ATLAS_HOST}`, {
		user: process.env.ATLAS_USER,
		pass: process.env.ATLAS_PASS,
		dbName: 'bakery'
	});
}

function disconnect() {
	mongoose.connection.close();
}

module.exports = { connect, disconnect }
```

`User.js`

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
});

module.exports = mongoose.model('user', userSchema);
```

`test.js`

```javascript {linenos=true}
const User = require('./models/User');
const db = require('./db');

main();

async function main() {
	db.connect();
	console.log(await User.find({}));
	db.disconnect();
}
```

more tests:

```javascript {linenos=true hl_lines=["8-11"]}
const User = require('./models/User');
const db = require('./db');

main();

async function main() {
	db.connect();
	await printAllUsers();
	await addAviBiter();
	await addTurtles();
	await deleteAllUsers();
	db.disconnect();
}

async function printAllUsers() {
	console.log(await User.find({}));
}

async function addAviBiter() {
	const user = await User.create({ name: "avi biter", age: 18 });
	console.log(user.name, 'was added');
}

async function addTurtles() {
	const turtles = [
		{ name: "rafael", age: 2 },
		{ name: "donatelo", age: 2 },
		{ name: "mikelangelo", age: 2 },
		{ name: "leonardo", age: 2 },
	];
	await User.insertMany(turtles);
	console.log('the turtles were added');
}

async function deleteAllUsers() {
	await User.deleteMany({});
	console.log('users collection is clean now');
}
```

## Reset Script

`package.json`

```json {linenos=true hl_lines=[5]}
{
	"scripts": {
		"start": "node index.js",
		"dev": "nodemon index.js",
		"resetDB": "node resetDB.js"
	}
}
```

`resetDB.js`

```javascript {linenos=true}
const db = require('./db');
const User = require('./models/User');

main();

async function main() {
	db.connect();
	await resetDB();
	db.disconnect();
}

async function resetDB() {
	await cleanDB();
	await addDataSample();
}

async function addDataSample() {
	const sampleOfUsers = require('./dataSample.json').users;
	console.log('inserting data sample...');
	await User.insertMany(sampleOfUsers);
	console.log('data sample was inserted');
}

async function cleanDB() {
	console.log('cleanning db...');
	await User.deleteMany({});
	console.log('db is clean');
}
```

`dataSample.json`

```json
{
	"users": [
		{ "name": "nisim", "age": 42 },
		{ "name": "shlomo", "age": 23 },
		{ "name": "david", "age": 666 }
	]
}
```

## Refactor REST API to use mongoDB

`index.js`

```javascript {linenos=true hl_lines=[1, 6]}
const db = require('./db');
const port = 5000;
const express = require('express');
const app = express();

db.connect();

app.use(express.json());
app.get('/ping', (req, res) => res.send('pong'));
app.use('/users', require('./routes/usersRoutes'));

app.listen(port, () => {
    console.log('listen to port', port);
});
```

`usersRoutes.js`

```javascript {linenos=true}
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
	res.json(await User.find({}));
});

router.get('/:id', async (req, res) => {
	res.json(await User.findById(req.params.id));
});

router.post('/', async (req, res) => {
	const userToAdd = await User.create(req.body);
	res.status(201).send(`${userToAdd.name} was added`);
});

router.delete('/:id', async (req, res) => {
	const userToDelete =
		await User.findByIdAndDelete(req.params.id);
	res.send(`${userToDelete.name} was deleted`);
});

module.exports = router;
```

We should handle exceptions

```javascript {linenos=true hl_lines=[6,"8-11",15,"18-21",25,"28-31",35,"38-41"]}
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
	try {
		res.json(await User.find({}));
	}
	catch (error) {
		res.status(500).send('server error');
	}
});

router.get('/:id', async (req, res) => {
	try {
		const requestedUser = await User.findById(req.params.id);
		res.json(requestedUser);
	}
	catch (error) {
		res.status(500).send('server error');
	}
});

router.post('/', async (req, res) => {
	try {
		const userToAdd = await User.create(req.body);
		res.status(201).send(`${userToAdd.name} was added`);
	}
	catch (error) {
		res.status(500).send('server error');
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const userToDelete = await User.findByIdAndDelete(req.params.id);
		res.send(`${userToDelete.name} was deleted`);
	}
	catch (error) {
		res.status(500).send('server error');
	}
});

module.exports = router;
```

## Client Side

add static routing

`index.js`

```javascript {linenos=true hl_lines=[3, 9]}
const db = require('./db');
const port = 5000;
const path = require('path');
const express = require('express');
const app = express();

db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.get('/ping', (req, res) => res.send('pong'));
app.use('/users', require('./routes/usersRoutes'));

app.listen(port, () => {
    console.log('listen to port', port);
});
```

`public/index.html`

```html {linenos=true}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>my client</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>

<body>
    <h1>My Awesome Client</h1>
    <pre id="output-test"></pre>
</body>

</html>
```

`public/script.js`

```javascript {linenos=true}
const outputEl = document.querySelector('#output-test');

initPage();

async function initPage() {
    const allUsers = await fetchAllUsers();
    outputEl.innerText = JSON.stringify(allUsers, null, 2);
}

async function fetchAllUsers() {
    const res = await fetch('/users');
    return await res.json();
}
```

## Table Element in Webpage

`public/index.html`

```html {linenos=true hl_lines=[5]}
<!-- head element stuff -->

<body>
    <h1>My Awesome Client</h1>
    <table id="users-table"></table>
</body>
```

```javascript {linenos=true}
const usersTable = document.querySelector('#users-table');

initPage();

async function initPage() {
    const allUsers = await fetchAllUsers();
    const usersInJSON = JSON.stringify(allUsers, null, 2);
    outputEl.innerText = usersInJSON;
    insertUsersToTable(allUsers);
}

function insertUsersToTable(users) {
    const rows = users.map(u => createUserRow(u));
    usersTable.append(...rows);
}

function createUserRow(user) {
    const userRow = document.createElement('tr');
    const cells = ['name', 'age']
    	.map(p => createTableCell(user[p]));
    userRow.append(...cells);
    return userRow;
}

function createTableCell(text) {
    const cellEl = document.createElement('td');
    cellEl.innerText = text;
    return cellEl;
}

async function fetchAllUsers() {
    const res = await fetch('/users');
    return await res.json();
}
```
