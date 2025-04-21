---
title: "Array"
date: 2023-12-27T16:55:03+02:00
---

Numbers

```javascript
const numbers = [42, 666, 7];
```

String Arrays

```javascript
const names = ['nisim', 'david', 'shlomi', 'metushelach'];
```

Multiple Data Type Arrays

```javascript
const whateverArray = [666, 'bilbi', false, true, -17.5];
```

## Access Element

```javascript
const nums = [42, 666, 7];

console.log(nums[0]); // 42
console.log(nums[1]); // 666
console.log(nums[2]); // 7
```

## Length

```javascript
const arr = ['a', 'b', 'c'];
console.log(arr.length); // 3
```

How to access the last element?

```javascript
const arr = ['foo', 'bar', 'shimon'];
console.log(arr[arr.length - 1]); // shimon
```

## Simple Methods

* concat
* push
* pop
* shift
* unshift
* slice
* splice
* join
* includes
* indexOf
* lastIndexOf
* reverse

### concat

```javascript
const a1 = [1,2,3];
const a2 = [7,8,9];
const a3 = a1.concat(a2);
console.log(a3); // [1,2,3,7,8,9]
```

### push

```javascript
const arr = ['A', 'B'];

arr.push('C'); // returns 3
console.log(arr); // ['A', 'B', 'C']

arr.push('X', 'Y', 'Z'); // returns 6
console.log(arr); // ['A', 'B', 'C', 'X', 'Y', 'Z']
```

### pop

```javascript
const arr = ['A', 'B', 'C'];

arr.pop(); // returns 'C'
console.log(arr); // ['A', 'B']

arr.pop(); // returns 'B'
console.log(arr); // ['A']
```

### unshift

```javascript
const arr = ['A', 'B'];

arr.unshift('shimon'); // returns 3
console.log(arr); // ['shimon', 'A', 'B']

arr.unshift('X', 'Y', 'Z'); // returns 6
console.log(arr);
// ['X', 'Y', 'Z', 'shimon', 'A', 'B' ]
```

### shift

```javascript
const arr = ['A', 'B', 'C'];

arr.shift(); // returns 'A'
console.log(arr); // ['B', 'C']

arr.shift(); // returns 'B'
console.log(arr); // ['C']
```

### slice

```javascript
const arr = ['A', 'B', 'C', 'D', 'E'];

arr.slice(2);     // ["C", "D", "E"]
arr.slice(2, 4);  // ["C", "D"]
arr.slice(1, 5);  // ["B", "C", "D", "E"]
arr.slice(-2);    // ["D", "E"]
arr.slice(2, -1); // ["C", "D"]
```

### splice

```javascript
const m1 = ['Jan', 'March', 'April', 'June'];
m1.splice(1, 0, 'Feb');
console.log(m1);
// ['Jan', 'Feb', 'March', 'April', 'June']

const m2 = ['Jan', 'March', 'April', 'June'];
m2.splice(1, 2, 'pita');
console.log(m2);
// ['Jan', 'pita', 'June']

const m3 = ['Jan', 'March', 'April', 'June'];
m3.splice(1, 2, 'bisli', 'bamba', 'kifkef');
console.log(m3);
// ['Jan', 'bisli', 'bamba', 'kifkef', 'June']
```

### join

```javascript
const arr = ['nisim', 'david', 'shlomo'];
arr.join('@'); // returns 'nisim@david@shlomo'
arr.join('##'); // returns 'nisim##david##shlomo'
arr.join(); // returns 'nisim,david,shlomo'
```

### includes

```javascript
const array1 = [1, 2, 3];
console.log(array1.includes(2)); // true
console.log(array1.includes(17)); // false

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // true
console.log(pets.includes('at')); // false
```
