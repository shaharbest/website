---
title: "Imperative Declerative"
date: 2023-09-03T11:02:04-04:00
description: "Imperative vs. Declerative"
---

Imperative and Declerative are two approches we can distinguish by the question
they answer regarding achiving a given goal: How and What.

**Imperative** answer **How** to achive the goal.

**Declerative** describe the goal namely **What** is the goal.

# JavaScript Examples

## Array Double

a function that takes an array and return a new array with each element doubled.

**Imperative**

```javascript
function double(arr) {
	const doubled = [];

	for (let i = 0; i < arr.length; i++) {
		doubled.push(arr[i] * 2);
	}

	return doubled;
}
```

**Declerative**

```javascript
function double(arr) {
	return arr.map(item => item * 2);
}
```

---

## Array Sum

a function that takes an array and return the sum of all elements.

**Imperative**

```javascript
function sum(arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}
```

**Declerative**

```javascript
function sum(arr) {
	return arr.reduce((acc, item) => acc + item, 0);
}
```
