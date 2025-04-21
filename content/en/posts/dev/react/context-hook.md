---
title: "Context Hook"
date: 2024-01-30T15:04:58+02:00
---

this demo looks better with the following static css style

```css
* { margin: 0; padding: 0; }
h1 { text-align: center; padding-block: 1em; }
main p { text-align: justify; }
footer p { text-align: center; }
p { padding: 1em; }
```

# Simple Page

```jsx {linenos=true}
export default function App() {
	return <>
		<Header />
		<Main />
		<Footer />
	</>;
}

function Header() {
	return <h1>
		Shahar Website
	</h1>;
}

function Main() {
	return <main>
		<Article />
		<Article />
		<Article />
	</main>;
}

function Article() {
	return <p>
		Lorem ipsum...
	</p>;
}

function Footer() {
	return <footer>
		<p>all rights reserved to me</p>
	</footer>;
}
```

# Scattered Theme Switches

add theme "switch" for each component
who will implement accordingly.

```jsx {linenos=true,hl_lines=[10,26,34]}
export default function App() {
	return <>
		<Header />
		<Main />
		<Footer />
	</>;
}

function Header() {
	const isDark = false;

	return <h1>
		Shahar Website
	</h1>;
}

function Main() {
	return <main>
		<Article />
		<Article />
		<Article />
	</main>;
}

function Article() {
	const isDark = false;

	return <p>
		Lorem ipsum...
	</p>;
}

function Footer() {
	const isDark = false;

	return <footer>
		<p>all rights reserved to me</p>
	</footer>;
}
```

# Conditional Style

add conditional styling implementation

```jsx {linenos=true,hl_lines=["12-14",16,"32-34",36,"44-46",48]}
export default function App() {
	return <>
		<Header />
		<Main />
		<Footer />
	</>;
}

function Header() {
	const isDark = true;

	const style = isDark ?
		{ backgroundColor: 'black', color: 'white' } :
		{ backgroundColor: 'white', color: 'black' };

	return <h1 style={style}>
		Shahar Website
	</h1>;
}

function Main() {
	return <main>
		<Article />
		<Article />
		<Article />
	</main>;
}

function Article() {
	const isDark = true;

	const style = isDark ?
		{ backgroundColor: 'black', color: 'white' } :
		{ backgroundColor: 'white', color: 'black' };

	return <p style={style}>
		Lorem ipsum...
	</p>;
}

function Footer() {
	const isDark = true;

	const style = isDark ?
		{ backgroundColor: 'black', color: 'white' } :
		{ backgroundColor: 'white', color: 'black' };

	return <footer style={style}>
		<p>all rights reserved to me</p>
	</footer>;
}
```

# Centralize

We would like to centralize the theme.

```jsx {linenos=true,hl_lines=[2]}
export default function App() {
	const isDark = false; // one to rule them all

	return <>
		<Header isDark={isDark} />
		<Main isDark={isDark} />
		<Footer isDark={isDark} />
	</>;
}
```

# Prop Drilling

we will use props

```jsx {linenos=true,hl_lines=["5-7",11,21,29,39,"23-25"]}
export default function App() {
	const isDark = false; // one to rule them all

	return <>
		<Header isDark={isDark} />
		<Main isDark={isDark} />
		<Footer isDark={isDark} />
	</>;
}

function Header({ isDark }) {
	const style = isDark ?
		{ backgroundColor: 'black', color: 'white' } :
		{ backgroundColor: 'white', color: 'black' };

	return <h1 style={style}>
		Shahar Website
	</h1>;
}

function Main({ isDark }) {
	return <main>
		<Article isDark={isDark} />
		<Article isDark={isDark} />
		<Article isDark={isDark} />
	</main>;
}

function Article({ isDark }) {
	const style = isDark ?
		{ backgroundColor: 'black', color: 'white' } :
		{ backgroundColor: 'white', color: 'black' };

	return <p style={style}>
		Lorem ipsum...
	</p>;
}

function Footer({ isDark }) {
	const style = isDark ?
		{ backgroundColor: 'black', color: 'white' } :
		{ backgroundColor: 'white', color: 'black' };

	return <footer style={style}>
		<p>all rights reserved to me</p>
	</footer>;
}
```

so tidious!

# Let's Use Context

create context object

```jsx
import { createContext } from "react";
const ThemeContext = createContext(null);
```

the *null* arg determine a default value we will see.

wrap the app with `ThemeContext.Provider` component
and pass to it's `value` prop the data we used to
"drill" before

```jsx {linenos=true,hl_lines=[5,9]}
export default function App() {
	const isDark = false;

	return <>
		<ThemeContext.Provider value={isDark}>
			<Header />
			<Main />
			<Footer />
		</ThemeContext.Provider>
	</>;
}
```

# Use The Context

import the hook

```jsx {linenos=true,hl_lines=[3]}
import {
	createContext,
	useContext
} from "react";
```

run this hook in the beginning of
every component that actualy use it

```jsx {linenos=true,hl_lines=[2, 22, 34]}
function Header() {
	const isDark = useContext(ThemeContext);

	const style = isDark ?
		{ backgroundColor: 'black', color: 'white' } :
		{ backgroundColor: 'white', color: 'black' };

	return <h1 style={style}>
		Shahar Website
	</h1>;
}

function Main() {
	return <main>
		<Article />
		<Article />
		<Article />
	</main>;
}

function Article() {
	const isDark = useContext(ThemeContext);

	const style = isDark ?
		{ backgroundColor: 'black', color: 'white' } :
		{ backgroundColor: 'white', color: 'black' };

	return <p style={style}>
		Lorem ipsum...
	</p>;
}

function Footer() {
	const isDark = useContext(ThemeContext);

	const style = isDark ?
		{ backgroundColor: 'black', color: 'white' } :
		{ backgroundColor: 'white', color: 'black' };

	return <footer style={style}>
		<p>all rights reserved to me</p>
	</footer>;
}
```

# Custom Hook

```jsx {linenos=true}
import { useContext, createContext } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children, value }) {
    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>;
}

export function useTheme() {
    return useContext(ThemeContext);
}
```

# Use Our Custom Hook

```jsx {linenos=true,hl_lines=[1, 7, 11, 16, 36, 51]}
import { useTheme, ThemeProvider } from "./Theme";

export default function App() {
	const isDark = true;

	return <>
		<ThemeProvider value={isDark}>
			<Header />
			<Main />
			<Footer />
		</ThemeProvider>
	</>;
}

function Header() {
	const isDark = useTheme();

	const style = isDark ?
		{ backgroundColor: 'black', color: 'white' } :
		{ backgroundColor: 'white', color: 'black' };

	return <h1 style={style}>
		Shahar Website
	</h1>;
}

function Main() {
	return <main>
		<Article />
		<Article />
		<Article />
	</main>;
}

function Article() {
	const isDark = useTheme();

	const style = isDark ?
		{ backgroundColor: 'black', color: 'white' } :
		{ backgroundColor: 'white', color: 'black' };

	return <p style={style}>
		Lorem ipsum dolor sit amet,
		consectetur adipiscing elit,
		sed do eiusmod tempor incididunt
		ut labore et dolore magna aliqua.
	</p>;
}

function Footer() {
	const isDark = useTheme();

	const style = isDark ?
		{ backgroundColor: 'black', color: 'white' } :
		{ backgroundColor: 'white', color: 'black' };

	return <footer style={style}>
		<p>all rights reserved to me</p>
	</footer>;
}
```
