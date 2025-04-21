---
title: "Firebase Auth"
date: 2023-08-19T01:04:39+03:00
tags: [react, firebase, authentication, node, express]
description: "Firebase Authentication With React"
---

# New Firebase Project

[firebase console](https://console.firebase.google.com/)

create new firebase project

create firebase client web app

copy given config to `firebase.js` file in your react app.

# Client Side

## Initialize React App With Firebase

install `firebase-tools` globally

```sh
run as administrator: npm i -g firebase-tools
```

login to firebase:

```sh
firebase login
```

initialize firebase in your react app:

```sh
firebase init
```

name `public` dir as `dist`

choose hosting option (without github actions)

set routing for SPA

## Deploy

```sh
firebase deploy
```

## Authentication

```sh
npm i firebase
```

Enable in firebase console auth methods in firebase console.
For example you can enable the google provider and email + password.

in `firebase.js`

create the file in src

export app

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXX.firebaseapp.com",
  projectId: "XXXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXX.appspot.com",
  messagingSenderId: "XXXXXXXXXXX",
  appId: "X:XXXXXXXXXXX:web:XXXXXXXXXXXXXXXXXXXXXX"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

```js
import { getAuth } from "firebase/auth";
export const auth = getAuth(app);
```

in Components throughout your react app:

```js
import {
  signOut,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider
} from 'firebase/auth';
```

## Hooks

in a given component to get your hands on the signed in user:

```sh
npm i react-firebase-hooks
```

```js
import { useAuthState } from 'react-firebase-hooks/auth';

const [user, loading, error] = useAuthState(auth);
```

# Node Server Side

let's create a node server with express:

in `server` dir:

```sh
npm init -y
npm i express cors
```

`index.js`

```js
const cors = require('cors');
const express = require('express');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
```

let's add the following endpoints:

```js
app.get('/ping', (req, res) => res.send('pong'));
app.post('/secret', (req, res) => res.send('I like cheese'));
```

## get credentials from firebase console

project settings -> Service accounts -> Firebase admin SDK -> Generate new private key

copy paste the admin init commands code sample

```js
const admin = require('firebase-admin');
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
```

## Authorization

```sh
npm i firebase-admin
```

create auth middleware

when authenticated client wants to be authorised when requesting from the server side:

send post request with header:

```txt
"authorization: Bearer <signedin-user-token>"
```

## verifing a given token

to get the signedin user token:

```js
import { getIdToken } from 'firebase/auth'
await getIdToken(user);
```
