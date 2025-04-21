---
title: "Client Side Routing"
date: 2023-08-09T20:10:50+03:00
description: "Client Side Routing In React"
---

<https://blog.webdevsimplified.com/2022-07/react-router/>

install package

```sh
npm i react-router-dom
```

in *main.jsx*

```jsx
import { BrowserRouter } from "react-router-dom";
```

in `main.jsx`

change this

```jsx
<React.StrictMode>
	<App />
</React.StrictMode>
```

to this

```jsx {hl_lines=[2,4]}
<React.StrictMode>
	<BrowserRouter>
		<App />
	</BrowserRouter>
</React.StrictMode>
```

in *App.jsx*

```jsx
import { Route, Routes } from "react-router-dom"
```

and

```jsx
function App() {
	return <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<About />} />
		<Route path="/contact" element={<Contact />} />
	</Routes>;
}
```

run the following addresses in your address bar
(change the port if needed):

* <http://localhost:5173/>
* <http://localhost:5173/about>
* <http://localhost:5173/contact>

links:

```jsx
function Navbar() {
	return <nav>
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/contact">Contact</Link></li>
		</ul>
	</nav>;
}
```

## Dynamic Routing

```jsx
<Routes>
	<Route path="/" element={<Home />} />
	<Route path="/books" element={<Catalog />} />
	<Route path="/books/:id" element={<BookPage />} />
</Routes>
```

*BookPage.jsx*

```jsx
import { useParams } from "react-router-dom"

function BookPage() {
	const { id } = useParams();
	return <h1>Book {id}</h1>;
}
```

## Priority

```jsx
<Routes>
	<Route path="/" element={<Home />} />
	<Route path="/books" element={<Catalog />} />
	<Route path="/books/:id" element={<BookPage />} />
	<Route path="/books/new" element={<NewBook />} />
</Routes>
```

## 404 Page

```jsx
function App() {
	return <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<About />} />
		<Route path="/contact" element={<Contact />} />
		<Route path="*" element={<NotFound />} />
	</Routes>;
}
```

## Nested

not nested

```jsx
<Routes>
	<Route path="/" element={<Home />} />
	<Route path="/books" element={<Catalog />} />
	<Route path="/books/:id" element={<BookPage />} />
	<Route path="/books/new" element={<NewBook />} />
	<Route path="/about" element={<About />} />
</Routes>
```

nested

```jsx
<Routes>
	<Route path="/" element={<Home />} />
	<Route path="/books" />
		<Route index element={<Catalog />} />
		<Route path=":id" element={<BookPage />} />
		<Route path="new" element={<NewBook />} />
	</Route>
	<Route path="/about" element={<About />} />
</Routes>
```

## Layout

```jsx
<Routes>
	<Route path="/" element={<Home />} />
	<Route path="/books" element={<BooksLayout />} />
		<Route index element={<Catalog />} />
		<Route path=":id" element={<BookPage />} />
		<Route path="new" element={<NewBook />} />
	</Route>
	<Route path="/about" element={<About />} />
</Routes>
```

in *BooksLayout.jsx*

import

```jsx
import { Link, Outlet } from "react-router-dom"
```

layout

```jsx
function BooksLayout() {
	return <>
		<nav>
			<ul>
				<li><Link to="/books/1">Book 1</Link></li>
				<li><Link to="/books/2">Book 2</Link></li>
				<li><Link to="/books/new">New Book</Link></li>
			</ul>
		</nav>

		<Outlet />
	</>;
}
```
