---
title: "reduce VS. forEach"
date: 2023-11-15T05:46:30+02:00
description: "reduce VS. forEach Comparison in JavaScript"
---

# Sum with `forEach`

```javascript
const arr = [42, 666, 17];

let sum = 0;
arr.forEach(num => sum += num);
console.log(sum);
```

# Sum with `reduce`

```javascript
const arr = [42, 666, 17];

const sum = arr.reduce((total, num) => total + num, 0);
console.log(sum);
```

# Sum of Points

```javascript
const arr = [
	{ name: 'nisim', points: 42 },
	{ name: 'shlomo', points: 666 },
	{ name: 'david', points: 23 }
];
```

![snape](img/snape.webp)

# With `forEach`

```javascript
let sum = 0;
arr.forEach(obj => sum += obj.points);
console.log(sum);
```

# With `reduce`

```javascript
const sum = arr.reduce((total, curObj) => total + curObj.points, 0);
console.log(sum);
```

# Multiplication with `forEach`

```javascript
const arr = [42, 666, 17];

let result = 1;
arr.forEach(num => result *= num);
console.log(product);
```

# Multiplication with `reduce`

```javascript
const arr = [42, 666, 17];

const result = arr.reduce((total, num) => total * num, 1);
console.log(result);
```

# Sum of squares with `forEach`

```javascript
const arr = [42, 666, 17];

let sum = 0;
arr.forEach(num => sum += (num ** 2));
console.log(sum);
```

# Sum with `reduce`

```javascript
const arr = [42, 666, 17];

const sum = arr.reduce((total, num) => total + (num ** 2) , 0);
console.log(sum);
```

# Count Zeros with `forEach`

```javascript
const arr = [1, 1, 0, 0, 0, 1, 0];

let count = 0;
arr.forEach(num => {
	if (num === 0) count++;
});
console.log(count);
```

# Count Zeros with `reduce`

```javascript
const arr = [1, 1, 0, 0, 0, 1, 0];

const count = arr.reduce((total, num) => total + num === 0 ? 1 : 0, 0);
console.log(count);
```
