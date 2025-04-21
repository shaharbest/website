---
title: "Loop"
date: 2023-12-27T20:00:22+02:00
---

# Loop

repetition of commands until a specific condition is met.

# objective of loop

```javascript
const msg = 'hi';
console.log(msg);
console.log(msg);
console.log(msg);
console.log(msg);
console.log(msg);

// but with loop
// sytax for: "do the following 5 times":
	console.log(msg);
```

# syntax
```javascript
for (let i = 0; i < 5; i++) {
	console.log(msg);
}
```

# Vocabulary

Iteration
: a single execution of the loop block

# Exercise

create a program that receive a number from user.

in case num is 1 print 'a'

in case num is 2 print 'aa'

in case num is 3 print 'aaa'

in case num is 4 print 'aaaa'

and so on

# Solution
```javascript
var num = Number(window.prompt('insert a number'));
var output = '';

for (let i = 0; i < num; i++) {
	output += 'a';
}

console.log(output);
```

# In the example

```javascript
for (let i = 0; i < 5; i++) {
	console.log(msg);
}
```

| expression  | desc                            |
| :-----:     | :--------                       |
| `let i = 0` | executed once before all        |
| `i < 5`     | the condition                   |
| `i++`       | executed after every iteration  |

# In General

```javascript
for (exp1; exp2; exp3) {
	// code block
}
```

| expression  | desc                            |
| :-----:     | :--------                       |
| `exp1`      | executed once before all        |
| `exp2`      | the condition                   |
| `exp3`      | executed after every iteration  |

# while

another way to code a loop

```javascript
num = Number(window.prompt('insert number'));

while (num % 10 !== 0) {
	console.log(num);
	num++;
}
```

# in general

```javascript
while (condition) {
	// code block
}
```

# do while

```javascript
num = Number(window.prompt('insert number'));

do {
	console.log(num);
	num++;
}
while (num % 10 !== 0);
```

# in general

```javascript
do {
	// code block
}
while (condition);
```

statement that break the loop

```javascript
break;
```

break the current iteration and move on to the next

```javascript
continue;
```
