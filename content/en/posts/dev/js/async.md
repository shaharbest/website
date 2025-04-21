---
title: "Asynchronous"
date: 2023-11-08T16:55:13+02:00
description: "Asynchronous Programming"
---

[API Example](https://random-data-api.com/api/v2/users?size=2)

```javascript
const apiUrl = 'https://random-data-api.com/api/v2/users?size=2';

fetch(apiUrl)
	.then(res => res.json())
	.then(data => doSomething(data));
```

just print it

```javascript
function doSomething(data) {
	console.log(data);
}
```

dom manipulation

```javascript
function doSomething(data) {
	document.body.innerHTML = `
		<h1>data:</h1>
		<pre>${JSON.stringify(data, null, 2)}</pre>
	`;
}
```

## Async Await

Promise (no syntactic sugar)

```javascript
function shahar1() {
	fetch(apiUrl)
		.then(res => res.json())
		.then(data => doSomething(data));
}
```

async await syntax

```javascript
async function shahar2() {
	const res = await fetch(apiUrl);
	const data = await res.json();
	doSomething(data);
}
```

## Dealing with Failure

Promise (no syntactic sugar)

```javascript
function shahar1() {
	fetch(apiUrl)
		.then(res => res.json())
		.then(data => {
			if (true) throw 'shahar exception'; // simulate failure
			doSomething(data);
		})
		.catch(error => {
			document.body.innerHTML = `<h1>fetch failed!</h1>`;
		});
}
```

async await syntax

```javascript
async function shahar2() {
	try {
		const res = await fetch(apiUrl);
		const data = await res.json();
		if (true) throw 'shahar exception'; // simulate failure
		doSomething(data);
	}
	catch (error) {
		document.body.innerHTML = `<h1>fetch failed!</h1>`;
	}
}
```
