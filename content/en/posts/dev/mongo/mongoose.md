---
title: "Mongoose Review"
date: 2023-11-07T16:56:42+02:00
---

mongoose is an
[orm](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping)
for MongoDB.

create a new Node project

```sh
mkdir my_node_app
cd my_node_app
npm init -y
```

install *mongoose* package

```sh
npm install mongoose
```

You need an address (URL) for your mongoDB.
When we use Atlas then we get the URL from their website.

It looks like the following:

```txt
mongodb+srv://<user>:<pass>@<host>/<db>?<someparams>
```

## Connect to mongoDB

```javascript
const mongoose = require('mongoose');

const myMongoDBUrl = '<your-mongodb-url>';

mongoose.connect(myMongoDBUrl);
```

all following queries will wait untill a connection establishes.

## Mongoose Terms

Schema
: define the strucure of your data.

Model
: a contructor responsible for creating and reading from MongoDB.

Document
: an instance of a model.

## Creating A Schema

easier to do it in a seperate file

*User.js*

```javascript
const userSchema = new mongoose.Schema({
	name: String,
	age: Number
});

// 'User' is the name of the collection
// you are going to see in the DB
module.exports = mongoose.model('User', userSchema);
```

## importing model to *index.js*

```javascript
const User = require('./User');
```

## Use The Model

```javascript
const user = new User({ name: 'nisim', age: 42 });
user.save().then(() => console.log('user saved...'));
```

async await

```javascript
const user = new User({ name: 'nisim', age: 42 });
await user.save();
console.log('user saved...');
```

The *create* alternative

```javascript
const user = await User.create({
	name: 'nisim',
	age: 42
});

console.log('user saved...');
```

## Edit Object

this program won't edit the new user's name

```javascript
const user = await User.create({
	name: 'nisim',
	age: 42
});

user.name = 'shlomo';
// no change in DB after
```

*save* method is required to update DB

```javascript
const user = await User.create({
	name: 'nisim',
	age: 42
});

user.name = 'shlomo';

await user.save();
```

Let's extend the schema

```javascript
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	email: String,
	createAt: Date,
	updateAt: Date,
	bestFriend: mongoose.SchemaTypes.ObjectId,
	hobbies: [String],
	address: {
		street: String,
		city: String,
	}
});
```

## Define Seperate Schema For Address

instead of the following

```javascript
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	address: {
		street: String,
		city: String,
	}
});
```

good for reuse (drier code)

```javascript
const addressSchema = new mongoose.Schema({
	street: String,
	city: String,
});

const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	address: addressSchema
});
```

## errors caused by the schema

that's fine

```javascript
const u1 = await User.create({
	name: 'nisim',
	age: 42
});
```

process will crash

```javascript
const u2 = await User.create({
	name: 'nisim',
	age: 'pita' // not a number!
});
```

surround with *try* and *catch*

```javascript
try {
	const u2 = await User.create({
		name: 'nisim',
		age: 'pita' // not a number!
	});
}
catch (err) {
	console.error(err);
}
```

## Validation

validate email

```javascript
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	email: String
});
```

### required

```javascript
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	email: {
		type: String,
		required: true,
	}
});
```

### lowercase

email will be saved in lowercase

```javascript
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	email: {
		type: String,
		required: true,
		lowercase: true,
	}
});
```

### Default Value

Let's define default value to *createAt*

```javascript
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	createAt: Date,
});
```

```javascript
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	createAt: {
		type: Date,
		// not good
		default: new Date(),
	},
});
```

```javascript
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	createAt: {
		type: Date,
		default: () => Date.now(),
	},
});
```

### Immutable

no justification for changing the creation time

```javascript
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	createAt: {
		type: Date,
		default: () => Date.now(),
		immutable: true,
	},
});
```

### min and max

age can't be less then 0.
so let's define minimum and maximum.

```javascript
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
});
```

```javascript
const userSchema = new mongoose.Schema({
	name: String,
	age: {
		type: Number,
		min: 0,
		max: 120,
	},
});
```

### String min length

```javascript
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	email: {
		type: String,
		required: true,
		lowercase: true,
		minLength: 10,
	}
});
```

### Custom Validation

only even ages

```javascript
const userSchema = new mongoose.Schema({
	name: String,
	age: Number
});
```

```javascript
const userSchema = new mongoose.Schema({
	name: String,
	age: {
		type: Number,
		validate: {
			validator: v => v % 2 === 0,
			message: props => `${props.value} not even`,
		}
	},
});
```

all validation (built in and custom)
run only in case of the methods
*create* and *save*.

update methods that skip your validations:

* *findByIdAndUpdate()*
* *findOneAndUpdate()*
* *updateMany()*
* *updateOne()*
* *findById*
* *find*
* *findOne*
* *exists*
* *deleteOne*
* *deleteMany*

The *find* method is confusing.
Therefore the mongoose implement "queries"

```javascript
await User.where('name').equals('nisim');
await User.where('age').gt(12);
```

instead of

```javascript
User.find({ age: { $gte: 21, $lte: 65 } });
```

we can write

```javascript
User.where('age').gte(21).lte(65);
```

Passing query conditions is permitted

```javascript
User.find().where({ name: 'wonderful' })
```

Chaining

```javascript
User.where('age').gte(21).lte(65)
	.where('name', 'wonderful')
	.where('friends').slice(10)
```

*ref* property and *populate* method

```javascript
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	bestFriend: mongoose.SchemaTypes.ObjectId,
});
```

add the ref property

```javascript
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	bestFriend: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: 'User'
	}
});
```

insert data for demo

```javascript
const p1 = await User.create({
	name: 'nisim',
	age: 42
});

const p2 = await User.create({
	name: 'shlomo',
	age: 13
});

p1.bestFriend = p2.id;
```

nothing special:

```javascript
await User.where('name').equals('nisim');
```

return

```javascript
{
	_id: new ObjectId("6422c2697b370569a04a51de"),
	name: 'nisim',
	age: 42,
	bestFriend: new ObjectId("6422c26b7b370569a04a51e1")
}
```

but with *populate*

```javascript
await User.where('name').equals('nisim')
	.populate('bestfriend');
```

return

```javascript
{
	_id: new ObjectId("6422c2697b370569a04a51de"),
	name: 'nisim',
	age: 42,
	bestFriend: {
		_id: new ObjectId("6422c26b7b370569a04a51e1"),
		name: 'shlomo',
		age: 13,
	}
}
```

# Progressive mongoose

*User.js*

```javascript
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
});
```

## Methods

```javascript
// not arrow function!
userSchema.methods.sayHi = function() {
	console.log(`Hi! my name is ${this.name}`);
};
```

*index.js*

```javascript
const p1 = await User.create({ name: 'nisim' });
p1.sayHi();
```

## Static Methods

*User.js*

```javascript
userSchema.statics.findByName = function(givenName) {
	return this.find({ name: givenName });
};
```

*index.js*

```javascript
const p1 = await User.findByName('nisim');
```

## Define Query

*User.js*

```javascript
userSchema.query.byName = function(givenName) {
	return this.where('name').equals(givenName);
};
```

*index.js*

```javascript
const p1 = await User.find().byName('nisim');
```

## Virtual

*User.js*

```javascript
const userSchema = new mongoose.Schema({
	fname: String,
	lname: String,
});

userSchema.virtual('fullName').get(function() {
	return `${this.fname} ${this.lname}`;
});
```

DB content

```javascript
[
	{ fname: 'nisim', lname: 'cohen' },
	{ fname: 'shlomo', lname: 'levi' },
	{ fname: 'david', lname: 'israel' }
]
```

```javascript
const [ nisim ] = await User.where('fname')
	.equals('nisim');

console.log(nisim.fullName); // output "nisim cohen"
```
