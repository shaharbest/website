---
title: "Pizza"
date: 2024-01-10T16:41:51+02:00
---

```javascript
let pizza;
console.log('order pizza');
pizza = '🍕';
console.log('pizza arrived');
```

--------------------------

```javascript
let pizza;
orderPizza();
console.log(`eat ${pizza}`);

function orderPizza() {
	console.log('order pizza');
	pizza = '🍕';
	console.log('pizza arrived');
}
```

output

```txt
order pizza
pizza arrived
eat 🍕
```

--------------------------

happen later

```javascript
let pizza;
orderPizza();
console.log(`eat ${pizza}`);

function orderPizza() {
	console.log('order pizza');
	setTimeout(() => {
		pizza = '🍕';
	}, 2000);
	console.log('pizza arrived');
}
```

output

```txt
order pizza
pizza arrived
eat undefined
```

--------------------------

```javascript
let pizza;
orderPizza();
console.log('call nisim');
console.log(`eat ${pizza}`);

function orderPizza() {
	console.log('order pizza');
	setTimeout(() => {
		pizza = '🍕';
		console.log('${pizza} is ready');
	}, 2000);
	console.log('pizza arrived');
}
```

--------------------------

```javascript
orderPizza();
console.log('call nisim');
console.log(`eat ${pizza}`);

function orderPizza(callback) {
	console.log('order pizza');
	setTimeout(() => {
		const pizza = '🍕';
		callback(pizza);
	}, 2000);
	console.log('pizza arrived');
}

function pizzaReady(pizza) {
	console.log(`eat the ${pizza}`);
}
```
