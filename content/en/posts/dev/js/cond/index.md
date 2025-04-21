---
title: "Conditionals"
date: 2023-09-06T06:03:22+03:00
description: "Conditionals in JavaScript"
---

## Comparison Operators

| Operator    | Meaning                     |
| :--------:  | :------------------------   |
| `==`        | equal to                    |
| `===`       | equal value and equal type  |
| `<`         | Less then                   |
| `>`         | Greater then                |
| `!=`        | not equal                   |
| `!==`       | not equal value or not equal type |
| `<=`        | Less then or Equal to       |
| `>=`        | Greater then or Equal to    |


## if else

```js
const isHot = false;

if (isHot) {
	console.log('It is so hot today!');
}
else {
	console.log('nice day for a walk!');
}
```

## else if

```js
const isHot = false;
const isCold = true;

if (isHot) {
	console.log('it is hot!');
	console.log('you should drink');
}
else if (isCold) {
	console.log('brrrr, so cold');
	console.log('we should wear worm cloth');
}
else {
	console.log('nice day tody');
	console.log('we can go outside');
}

console.log('good bye!');
```

## Exercise

The price of a house `$1M`.
If a buyer has good credit he has to put down 10%.
Otherwise they need to put down 20%.
create a program that calculate how much down payment
a buyer need to pay.

```js
const answer = window.prompt('have good credit? (y/n): ');
// your code
console.log("buyer has to put down", downPayment, '$');
```

## And

```js
const isWizard = true;
const isVillain = true;

if (isWizard && isVillain) {
	console.log("Slizerin!");
}
```

![malfoy](img/malfoy.webp)

## Or

```js
const isBrave = false;
const isWizlly = true;

if (isBrave || isWizlly) {
	console.log("Grifindor!");
}
```

## Not

```js
const isBoy = true;

if (!isBoy) {
	console.log("You are a girl!");
}
```


## Example

Elligible name is between 3 to 50 letters.

```js
const name = 'Bilbi';

if (name.length < 3) {
	console.log("too short");
}
else if (name.length > 50) {
	console.log("too long");
}
else {
	console.log("fine");
}
```

## Exercise

1 `kg` = 2.20462 `lb`

Code js script that do the following:

* Request a number from the user.
* Ask if the number was in pounds or kg.
* Print what the same weight in the other unit.

## Solution

```js
const quantity = Number(window.prompt('insert weight: '));
const unit = window.prompt('What the unit? (L)bs or (K)g: ');

if (unit.toUpperCase() == 'L') {
	console.log("In kg it is", quantity / 2.20462);
}
else if (unit.toUpperCase() == 'K') {
	console.log("In lbs it is", quantity * 2.20462);
}
else {
	console.log("invalid unit");
}
```
