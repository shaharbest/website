---
title: "Destructure"
date: 2023-11-15T05:23:42+02:00
---

# Array

## Example

```javascript
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

## Equivalence

```javascript
const [first, second] = list;

// is equivalent to:
const first = list[0];
const second = list[1];
```

## Reassign

```javascript
let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

## Too Short Array

```javascript
const foo = ['one', 'two'];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue); // undefined
```

## Default Value

```javascript
let a, b;

[a = 666, b = 7] = [42];
console.log(a); // 42
console.log(b); // 7
```

## Example With Function Return Value

```javascript
function foo() {
	return [1, 2];
}

let a, b;
[a, b] = foo();
console.log(a); // 1
console.log(b); // 2
```

## Skip Elements

```javascript
function foo() {
	return [1, 2, 3];
}

const [a, , b] = foo();
console.log(a); // 1
console.log(b); // 3

const [c] = foo();
console.log(c); // 1
```

## Assign Rest Of Elements

```javascript
const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```

# Object

## Example

```javascript
const user = {
	id: 42,
	isVerified: true
};

const { id, isVerified } = user;

console.log(id); // 42
console.log(isVerified); // true
```

## Reassign

```javascript
let a, b;

({ a, b } = { a: 1, b: 2 });
```

## Rename

```javascript
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

## Example

```javascript
const { a = 10, b = 5 } = { a: 3 };

console.log(a); // 3
console.log(b); // 5
```

## Rename and Default Value

```javascript
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
```

## In Parameter Declaration

```javascript
const user = {
	id: 42,
	displayName: 'jdoe',
	fullName: {
		firstName: 'John',
		lastName: 'Doe'
	}
};

function userId({ id }) {
	return id;
}

console.log(userId(user)); // 42
```

## Rename in Parameter Declaration

```javascript
function userDisplayName({ displayName: dname }) {
	return dname;
}

console.log(userDisplayName(user)); // `jdoe`
```

## Nested Destructure

```javascript
function whois({ displayName, fullName: { firstName: name } }) {
	return `${displayName} is ${name}`;
}

console.log(whois(user)); // "jdoe is John"
```
