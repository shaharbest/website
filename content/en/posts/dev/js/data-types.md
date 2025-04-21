---
title: "Data Types"
date: 2023-09-06T16:30:51+03:00
description: "Data Types in JavaScript"
---

* string - `"Avi Biter"`, `"123"`, `"true"`, `""`.
* number - `123`, `123.456`, `0.123`, `0`, `-123`.
* boolean - `true`, `false`.
* null - `null`.
* undefined - `undefined`.


## `typeof` Operator

```js
typeof 5
typeof 'batista'
typeof true
```

### Examples

| Expression         | Returns     |
| :-----:            | :-----:     |
| `typeof 5`         | `'number'`  |
| `typeof 'batista'` | `'string'`  |
| `typeof true`      | `'boolean'` |

## Conversion

### From String To Number

```js
const str = '123';
const num1 = Number(str);
const num2 = parseInt(str);
```

### From Number To String

```js
const num = 123;
const str1 = String(num);
const str2 = num.toString();
```
