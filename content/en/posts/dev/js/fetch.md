---
title: "Fetch"
date: 2023-11-08T22:36:39+02:00
description: "The function fetch"
---

`index.html`

```html
<div>
	<label for="user-id-input">user id</label>
	<input type="number" id="user-id-input">
</div>

<button id="b1">get all</button>
<button id="b2">get one</button>
<button id="b3">insert avi biter</button>
<button id="b4">delete</button>
<button id="b5">update</button>
```

```javascript {linenos=true}
const userIdInput = document.querySelector('#user-id-input');
document.querySelector('#b1').addEventListener('click', printAllUsers);
document.querySelector('#b2').addEventListener('click', printSingleUser);
document.querySelector('#b3').addEventListener('click', insertAviBiter);
document.querySelector('#b4').addEventListener('click', deleteChosenUser);
document.querySelector('#b5').addEventListener('click', updateAviDifferentEmail);
```

## Get All Users

```javascript {linenos=true}
async function printAllUsers() {
    const apiUrl = 'http://localhost:3000/users';
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data);
}
```

## Get One User By ID

```javascript {linenos=true}
async function printSingleUser() {
    const userId = userIdInput.value;
    const apiUrl = `http://localhost:3000/users/${userId}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data);
}
```

## Insert Avi Biter

```javascript {linenos=true}
function insertAviBiter() {
    const apiUrl = 'http://localhost:3000/users';
    const reqBody = {
        name: 'avi biter',
        email: 'avi@gmail.com',
    };
    const options = {
        body: JSON.stringify(reqBody),
        headers: {'Content-Type': 'application/json'},
        method: 'POST'
    };
    fetch(apiUrl, options);
}
```

## Delete User By ID

```javascript {linenos=true}
function deleteChosenUser() {
    const userId = userIdInput.value;
    const apiUrl = `http://localhost:3000/users/${userId}`;
    const options = { method: 'DELETE' };
    fetch(apiUrl, options);
}
```

## Update User With ID 4

```javascript {linenos=true}
function updateAviDifferentEmail() {
    const apiUrl = `http://localhost:3000/users/4`;
    const reqBody = { email: 'avi@walla.com' };
    const options = {
        body: JSON.stringify(reqBody),
        headers: {'Content-Type': 'application/json'},
        method: 'PATCH'
    };
    fetch(apiUrl, options);
}
```
