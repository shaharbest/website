---
title: "Functions"
date: 2023-09-27T14:14:03+03:00
---

Function Definition

```javascript
function printKing() {
    console.log('avi biter');
}

printKing();
```

### Function Value

just like other values:

```javascript
const nisim = 42;
const shlomo = 'gimel yafit';
const david = false;
```

you can assign a function value to a variable

```javascript
const printSinger = function() {
    return 'shimi tavori';
};
```

We can this function with the variable
just like a function defined regularly:

```javascript
const printKing = function() {
    console.log('avi biter');
};

printKing();
```

### Warning

assignment of function value is not hoisted as regular function definition.

```javascript
printKing(); // works fine

function printKing() {
    console.log('avi biter');
}
```

```javascript
printKing(); // error!
// Uncaught ReferenceError: can't access lexical
// declaration 'printKing' before initialization

const printKing = function() {
    console.log('avi biter');
};
```

### Callback

a function passed into another function as an argument, which is then invoked
inside the outer function to complete some kind of routine or action.

```javascript
const greeting = function(name) {
	alert('Hello ' + name);
};

function processUserInput(callback) {
	const name = prompt("Please enter your name.");
	callback(name);
}

processUserInput(greeting);
```

### Use Alias

instead of definning the function and giving it a name
we can pass it's definition as an argument to the
*processUserInput* function.

```javascript
function processUserInput(callback) {
	const name = prompt("Please enter your name.");
	callback(name);
}

processUserInput(function(name) {
	alert('Hello ' + name);
});
```

------------------------

## Arrow Function

### Multiple Lines + Multiple Parameters

```javascript
const doSomething = function(p1, p2, p3) {
    // first line
    // second line
    // ...
};
```

arrow version

```javascript
const doSomething = (p1, p2, p3) => {
    // first line
    // second line
    // ...
};
```

### Multiple Lines + Single Parameter

```javascript
const doSomething = function(p1) {
    // first line
    // second line
    // ...
};
```

arrow version

```javascript
const doSomething = (p1) => {
    // first line
    // second line
    // ...
};
```

with a single parameter the parenthesis can be omitted

```javascript
const doSomething = p1 => {
    // first line
    // second line
    // ...
};
```

### Single Return Line + Multiple Parameters

```javascript
const getSomething = function(p1, p2, p3) {
    return 'buldozer';
};
```

arrow version

```javascript
const getSomething = (p1, p2, p3) => {
    return 'buldozer';
};
```

shorthand: with a single return line the block parenthesis and the `return` word
can be omitted.

```javascript
const getSomething = (p1, p2, p3) => 'buldozer';
```

## Single Return Line + Single Parameter

```javascript
const getDouble = function(num) {
    return 2 * num;
};
```

arrow version

```javascript
const getDouble = (num) => {
    return 2 * num;
};
```

shorthand: as explained before

```javascript
const getDouble = num => 2 * num;
```
