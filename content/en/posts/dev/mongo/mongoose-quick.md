---
title: "Mongoose Quick Start"
date: 2023-11-22T22:37:28+02:00
---

create a new folder called *my_node_project*.

open the folder with vscode.

create *package.json* with the command:

```sh
npm init -y
```

install mongoose:

```sh
npm i mongoose
```

create the followiong files:

* *db.js*
* *index.js*
* *test.js*
* *models/User.js*

```fs-tree
my_node_project
├── package.json
├── index.js
├── db.js
├── test.js
└── models
    └── User.js
```

# Files Content

*models/User.js*

```javascript{linenos=true}
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
});

module.exports = mongoose.model('user', userSchema);
```

*test.js*

```javascript{linenos=true}
const mongoose = require('mongoose');
const User = require('./User');
const db = require('./db');

main();

async function main() {
	db.connect();
	await createAvi();
	db.disconnect();
}

async function createAvi() {
	const avi = {
		name: 'avi biter',
		email: 'avi@gmail.com'
	};

	console.log('inserting avi...');
	await User.create(avi);
	console.log('avi was inserted');
}
```

*db.js* - in case your mongoDB runs in your localhost

```javascript{linenos=true}
const mongoose = require('mongoose');

const protocol = 'mongodb';
const host = '127.0.0.1';
const mongoUrl = `${protocol}://${host}`;

const options = {
    dbName: 'myDB',
};

function connect() {
    mongoose.connect(mongoUrl, options);
}

function disconnect() {
    mongoose.connection.close();
}

module.exports = { connect, disconnect };
```

add scripts to *package.json*:

```json{linenos=true}
{
	"scripts": {
		"start": "node index.js",
		"dev": "nodemon index.js",
		"test": "node test.js"
	},
}
```

# Atlas

in case your mongoDB runs on Atlas do the following:

install *dotenv*

```sh
npm i dotenv
```

create a file called *.env*

```txt
MONGO_USER=nisim
MONGO_PASS=123
MONGO_HOST=bamba.bisli.mongodb.net
```

edit *db.js* as the following

```javascript{linenos=true,hl_lines=[1,"4-5","10-11"]}
require('dotenv').config();
const mongoose = require('mongoose');

const protocol = 'mongodb+srv';
const host = env.process.MONGO_HOST;
const mongoUrl = `${protocol}://${host}`;

const options = {
    dbName: 'myDB',
    user: env.process.MONGO_USER,
    pass: env.process.MONGO_PASS,
};

function connect() {
    mongoose.connect(mongoUrl, options);
}

function disconnect() {
    mongoose.connection.close();
}

module.exports = { connect, disconnect };
```

to test your ability to connect to your MongoDB execute:

```sh
npm test
```

# Express Server

install express pacakge

```sh
npm i express
```

edit *index.js*

```javascript {linenos=true}
const db = require('./db');
const User = require('./models/User');
const express = require('express');
const port = 5000;

db.connect();

const app = express();

app.get('/users', async (req, res) => {
	const allUsers = await User.find();
	res.json(allUsers);
});

app.listen(port, () => {
    console.log('listen to port', port);
});
```

run your server

```sh
npm start
```

insert
[http://localhost:5000/users](http://localhost:5000/users)
in your browser address bar to create a request to your end point.
