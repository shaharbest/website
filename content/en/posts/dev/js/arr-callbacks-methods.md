---
title: "Array Callbacks Methods"
date: 2024-01-08T18:25:41+02:00
---

* forEach
* filter
* map
* find
* findIndex
* sort
* reduce

------------------

for loops are really annoying to implement for scanning an array:

```javascript
const arr = ['nisim', 'shlomo', 'david'];

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
```

output

```txt
nisim
shlomo
david
```

## forEach

```javascript
const arr = ['nisim', 'shlomo', 'david'];

arr.forEach(shaharCallback);

function shaharCallback(name) {
	console.log(name);
}
```

output

```txt
nisim
shlomo
david
```
