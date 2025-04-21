---
title: "Type Check"
date: 2023-11-15T06:13:24+02:00
---

# typeof

```javascript
typeof 42; // return 'number'
typeof 'shahar'; // return 'string'
typeof true; // return 'boolean'
```

# isArray

```javascript
Array.isArray([1,2,3]); // return true
Array.isArray('nisim'); // return false
```

# String to Number

```javascript
Number('45'); // return 45
parseFloat('42.6'); // return 42.6
parseInt('12'); // return 12
```

# String

```javascript
String(42); // return '42'
```

# toString

```javascript
x.toString();
(123).toString();
(100 + 23).toString();

false.toString(); // returns "false"
true.toString(); // returns "true"
```

# Outputing not a String

```javascript
console.log({ name: "gargamel" }); // "[object Object]"
console.log([1,2,3,4]); // "1,2,3,4"
console.log(new Date()); // "Fri Jul 18 2014 09:08:55 GMT+0200"
```

# falsy truthy

what is falsy

* false
* 0
* "" (empty string)
* null
* undefined
* NaN

# NaN - Not A Number

# Bad Conversion

```javascript
Number('Balbazor');
parseInt('Chamander');
```

# Square Root Of Negative

```javascript
Math.sqrt(-1);
```

# Operation with NaN

```javascript
const r1 = NaN + 1;
const r2 = NaN * 2;
```

# Check if NaN

```javascript
const val = parseInt('nisim');

isNaN(val); // return true
```

# Don't

```javascript
// don't compare value to NaN because
Number.NaN === Number.NaN; // return false!
```

# User Input

```javascript
const userInput = window.prompt('insert a number');
const userInputConverted = Number(userInput);
if (isNaN(userInputConverted)) console.log('bad input');
else console.log('good input');
```
