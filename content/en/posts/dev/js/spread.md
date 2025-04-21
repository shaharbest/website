---
title: "Spread Operator"
date: 2023-11-15T05:30:58+02:00
---

# Example

```javascript
function sum(x, y, z) {
	return x + y + z;
}

const numbers = [20, 10, 30];

console.log(sum(...numbers));
```

# Many Options

```javascript
const arr1 = [0, 1, 2];
const arr2 = [9, 8, 7];
const num = 12;

const newArr1 = [...arr1];
const newArr2 = [...arr1, num];
const newArr3 = [num, ...arr1];
const newArr4 = [...arr1, ...arr2];
const newArr5 = [...arr1, ...arr2, num];
const newArr6 = [num, ...arr1, ...arr2];
const newArr7 = [...arr1, num, ...arr2];
```

# Useful For Cloning

```javascript
const obj = { shimon: 1, david: 'pita' }
const objClone = { ...obj }
```

# Concatination

```javascript
function myFunction(v, w, x, y, z) { }
let args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

# Object Summary

```javascript
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj1 = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }

let mergedObj2 = { ...obj1, shimi: 'bilbi' };
// Object { foo: "baz", x: 42, shimi: 'bilbi' }
```

# Warning

```javascript
const obj = { key: 'value' };
const arr = [...obj]; // TypeError: obj is not iterable
```
