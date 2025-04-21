---
title: "List Rendering"
date: 2023-08-09T20:05:14+03:00
description: "List Rendering In React"
tags: ['react']
---

```jsx
const myList = <ul>
	<li>balbazor</li>
	<li>chamander</li>
	<li>squirtle</li>
</ul>;
```

```jsx
const myList = <ul>
	{
		[
			<li>balbazor</li>,
			<li>chamander</li>,
			<li>squirtle</li>,
		]
	}
</ul>;
```

```jsx
const items = [
	<li>balbazor</li>,
	<li>chamander</li>,
	<li>squirtle</li>,
];

const myList = <ul>{items}</ul>;
```

```jsx
const pokemons = ['balbazor', 'chamander', 'squirtle'];
const items = pokemons.map(p => <li>{p}</li>);
const myList = <ul>{items}</ul>;
```

let's use `map` and `filter`

```jsx
const pokemons = [
    'pikachu',
    'balbazor',
    'chamander',
    'squirtle'
];

function ShaharList() {
    const listItems =
        pokemons.map(item => <li>{item}</li>);

    return <ul>{listItems}</ul>;
}
```

# Error in the console

```txt
Warning: Each child in a list should have a unique "key" prop.
```

# Solution

if pokemons names in the list are unique then

```jsx
pokemons.map(item => <li key={item}>{item}</li>);
```

# unique property

in case there is other unique property to the items

```jsx
const pokemons = [
	{ id: 42, name: 'pikachu' },
	{ id: 666, name: 'balbazor' },
	{ id: 53, name: 'pikachu' },
	{ id: 12, name: 'balbazor' }
];
```

# Then

```jsx
pokemons.map(item =>
	<li key={item.id}>{item.name}</li>);
```

# Destructure

```jsx
pokemons.map(({ id, name }) =>
	<li key={id}>{name}</li>);
```

# Unimportant Case

```jsx
const pokemons = [
    'pikachu',
    'pikachu',
    'chamander',
    'chamander',
    'squirtle'
];
```

use the index parameter
of array method callback

# Use Index

```jsx
pokemons.map((item, index) =>
	<li key={index}>{item.name}</li>);
```

# Filter the fire pokemons

```javascript
const pokemons = [
	{ id: 42, name: 'pikachu', power: 'electric' },
	{ id: 53, name: 'chamander', power: 'fire' },
	{ id: 53, name: 'charizard', power: 'fire' },
	{ id: 12, name: 'squirtle', power: 'water' }
];
```

# Precede the `filter` method

```jsx
function ShaharList() {
	const listItems =
		pokemons.filter(p => p.power === 'fire')
			.map((item, index) =>
				<li key={index}>{item.name}</li>);

	return <ul>{listItems}</ul>;
}
```
