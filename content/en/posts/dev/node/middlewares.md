---
title: "Middlewares in Express"
date: 2023-11-15T05:00:52+02:00
---

# What is a middleware?

a function that is going to run between
the time that the server gets the request
and the time that the server sends response

`logger` will run before the `nisim`, `shlomo` and `david` callbacks.

```javascript
app.use(logger);
app.get('/nisim', (req, res) => { });
app.get('/shlomo', (req, res) => { });
app.get('/david', (req, res) => { });

function logger(req, res, next) {
	console.log(req.originalUrl);
	next();
}
```

the `next` parameter is the next middleware
(which is a callback)

we didn't use next before because there were no next middlewares after the callbacks we wrote

# Order Matter

`logger` won't run before `nisim`

```javascript
app.get('/nisim', (req, res) => { });
app.use(logger);
app.get('/shlomo', (req, res) => { });
app.get('/david', (req, res) => { });

function logger(req, res, next) {
	console.log(req.originalUrl);
	next();
}
```

# Set Individually

```javascript
app.get('/nisim', logger, (req, res) => { });
app.get('/shlomo', (req, res) => { });
app.get('/david', logger, (req, res) => { });
```

# as many as you want

```javascript
app.get('/nisim', logger, logger, logger,
	logger, logger, logger, (req, res) => { });
```

# Auth

```javascript
app.get('/nisim',
	auth, (req, res) => res.send('nisim'));
app.get('/shlomo',
	auth, (req, res) => res.send('shlomo'));
app.get('/david',
	(req, res) => res.send('david'));

function auth(req, res, next) {
	if (req.query.admin === 'true') {
		next();
		return;
	}

	res.send('no auth');
}
```

`next` is not return!

we can define stuff to run **after**
the rest of the middlewares run.

before

```javascript
function logger1(req, res, next) {
	console.log(req.originalUrl);
	next();
}
```

after

```javascript
function logger2(req, res, next) {
	next();
	console.log(req.originalUrl);
}
```

example when it is useful:

log what was sent to the client.
