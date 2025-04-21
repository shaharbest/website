---
title: "Syntactic Sugar"
date: 2023-11-21T20:52:39+02:00
---

- for of
- Trenary
- Short Circuit
- Spread Operator
- Destructure
- Arrow Function
- Property Shorthand
- Method Shorthand

# for of

iterate over an array

```javascript
const names = ['nisim', 'shomo', 'david'];
```

instead of

```javascript
for (let i = 0; i < names.length; i++) {
	const name = names[i];
	console.log(name);
}
```

`for of` syntax

```javascript
for (const name of names) {
	console.log(name);
}
```

# Trenary

instead of

```javascript
function printEvenOrOdd(num) {
	if (num % 2 === 0) {
		console.log('even');
	}
	else {
		console.log('odd');
	}
}
```

use trenary

```javascript
function printEvenOrOdd(num) {
	console.log(num % 2 === 0 ? 'even' : 'odd');
}
```

# Short Circuit

great
[documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation)
of mdn

# Spread Operator

[elaborated post](/post/js/spread)

```javascript
const a1 = ['a', 'b'];
const a2 = ['c', 'd', 'e'];
```

instead of

```javascript
a1.concat(a2); // ['a', 'b', 'c', 'd', 'e']
```

use spread

```javascript
[...a1, ...a2]; // ['a', 'b', 'c', 'd', 'e']
```

# Destructure

[elaborated post](/post/js/destructure)

# Arrow Function

without

```javascript
const arr = [1, 2, 3].map(function(curNum) {
	return 2 * curNum;
});
// [2, 4, 6]
```

with

```javascript
const arr = [1, 2, 3].map(curNum => 2 * curNum);
// [2, 4, 6]
```

arrow function and destructure

```javascript
const nisim = {fname: 'nisim', lname: 'cohen'}
const shlomo = {fname: 'shlomo', lname: 'levi'}
const david = {fname: 'david', lname: 'peretz'}

const arr = [nisim, shlomo, david];

const fullArr.map(function(obj) {
	return `${obj.fname} ${obj.lname}`;
});
```

with arrow function

```javascript
const nisim = {fname: 'nisim', lname: 'cohen'}
const shlomo = {fname: 'shlomo', lname: 'levi'}
const david = {fname: 'david', lname: 'peretz'}

const arr = [nisim, shlomo, david];

const fullArr.map(obj => `${obj.fname} ${obj.lname}`);
```

with destructure

```javascript
const nisim = {fname: 'nisim', lname: 'cohen'}
const shlomo = {fname: 'shlomo', lname: 'levi'}
const david = {fname: 'david', lname: 'peretz'}

const arr = [nisim, shlomo, david];

const fullArr = arr.map(({ fname, lname }) =>
	`${fname} ${lname}`);
```

# Property Shorthand

```javascript
const david = 42;
const shlomo = 666;
```

```javascript
const nisim = {
	david: david,
	shlomo: shlomo
}
```

```javascript
const nisim = {
	david,
	shlomo
}
```

# Method Shorthand

```javascript
const nisim = {
	shlomo: 42,
	sayHi: function() {
		console.log('hi');
	},
	sayBye: function() {
		console.log('bye');
	}
};

nisim.sayHi();
nisim.sayBye();
```

```javascript
const nisim = {
	shlomo: 42,
	sayHi() {
		console.log('hi');
	},
	sayBye() {
		console.log('bye');
	}
};

nisim.sayHi();
nisim.sayBye();
```
