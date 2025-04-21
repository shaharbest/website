---
title: "Beginners"
date: 2023-11-26T17:31:03+02:00
description: "React - Beginner Coding Sample"
---

# Vite

what is it? [link](https://vitejs.dev/guide/)

* a bundler
* a dev server

scaffold your vite project by executing:

```sh
npm create vite@latest
```

```fs-tree
my_react_app/
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

run in the project directory:

```sh
npm i
```

to see the template run:

```sh
npm run dev
```

and open the browser on [localhost:5173](http://localhost:5173)

to build the project run:

```sh
npm run build
```

# Basic

`/src/App.jsx`

```jsx
function App() {
	return <h1>Nisim</h1>;
}
```

An Alternative

```jsx
function Title() {
	return <h1>Nisim</h1>;
}

function App() {
	return <Title></Title>;
}
```

if no children

```jsx
function Title() {
	return <h1>Nisim</h1>;
}

function App() {
	return <Title />;
}
```

# Style

```jsx
function Title() {
	return <h1 style={{ color: 'blue' }}>
		Nisim
	</h1>;
}
```

or

```jsx
function Title() {
	const titleStyle = { color: 'blue' };

	return <h1 style={titleStyle}>
		Nisim
	</h1>;
}
```

# Props

```jsx
function Title(props) {
	const titleStyle = { color: props.color };

	return <h1 style={titleStyle}>
		Nisim
	</h1>;
}

function App() {
	return <Title color='red' />;
}
```
