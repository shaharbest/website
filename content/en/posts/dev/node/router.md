---
title: "Router in Express"
date: 2023-11-15T04:53:14+02:00
---

# Intro To Router

`index.js`

```javascript
app.get('/users', (req, res) =>
	res.send('users list'));
app.post('/users/new', (req, res) =>
	res.send('new user form'));
```

# Router

`index.js`

```javascript
const router = express.Router();

router.get('/', (req, res) =>
	res.send('users list'));
router.post('/new', (req, res) =>
	res.send('new user form'));

app.use('/users', userRouter)
```

now we can create a file for the users router

`users.js`

```javascript
const router = express.Router();

router.get('/', (req, res) =>
	res.send('users list'));
router.post('/new', (req, res) =>
	res.send('new user form'));

module.exports = router;
```

`index.js`

```javascript
const usersRouter = require('./users.js');
app.use('/users', usersRouter);
```
