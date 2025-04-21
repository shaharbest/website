---
title: "Redux Toolkit"
date: 2023-08-31T15:13:43-04:00
tags: [redux, redux-toolkit]
description: "Redux Toolkit in React"
---

let's scaffold a react app with vite and redux toolkit

```sh
npm init vite@latest my_react_app -- --template react
cd my_react_app
npm i @reduxjs/toolkit react-redux
npm run dev
```

`App.js`

```jsx
export default function App() {
	return <h1>Demo</h1>;
}
```

import `Provider` from *react-redux* and `configureStore`
from *@reduxjs/toolkit* to create a store and pass
it to `Provider` as a prop named *store* to make it
available to all components in the app.

```jsx {linenos=true}
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {},
});

export default function App() {
	return <Provider store={store}>
		<h1>Demo</h1>
	</Provider>;
}
```

import `createSlice` from *@reduxjs/toolkit*
to create a slice of the store and
pass it's reducer to the store.

```jsx {linenos=true,hl_lines=[2,"4-8",12]}
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: { value: 0 },
	reducers: {},
});

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
	},
});

export default function App() {
	return <Provider store={store}>
		<h1>Demo</h1>
	</Provider>;
}
```

create a template of `Counter` component and
use it in `App` component.

```jsx {linenos=true,hl_lines=[19,"23-29"]}
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: { value: 0 },
	reducers: {},
});

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
	},
});

export default function App() {
	return <Provider store={store}>
		<h1>Demo</h1>
		<Counter />
	</Provider>;
}

function Counter() {
	return <>
		<button>-</button>
		0
		<button>+</button>
	</>;
}
```

import `useSelector` from *react-redux*
to select a value from the store in the
component.

```jsx {linenos=true,hl_lines=[1,24,28]}
import { Provider, useSelector } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: { value: 0 },
	reducers: {},
});

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
	},
});

export default function App() {
	return <Provider store={store}>
		<h1>Demo</h1>
		<Counter />
	</Provider>;
}

function Counter() {
	const count = useSelector(state => state.counter.value);

	return <>
		<button>-</button>
		{count}
		<button>+</button>
	</>;
}
```

add *increment* and *decrement* reducers to `counterSlice`.

```jsx {linenos=true,hl_lines=[8,9]}
import { Provider, useSelector } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: { value: 0 },
	reducers: {
		increment: state => { state.value++; },
		decrement: state => { state.value--; },
	},
});


const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
	},
});

export default function App() {
	return <Provider store={store}>
		<h1>Demo</h1>
		<Counter />
	</Provider>;
}

function Counter() {
	const count = useSelector(state => state.counter.value);

	return <>
		<button>-</button>
		{count}
		<button>+</button>
	</>;
}
```

import and use `useDispatch` from *react-redux*
to dispatch actions to the store.

```jsx {linenos=true,hl_lines=[1,28]}
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: { value: 0 },
	reducers: {
		increment: state => { state.value++; },
		decrement: state => { state.value--; },
	},
});

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
	},
});

export default function App() {
	return <Provider store={store}>
		<h1>Demo</h1>
		<Counter />
	</Provider>;
}

function Counter() {
	const count = useSelector(state => state.counter.value);
	const dispatch = useDispatch();

	return <>
		<button>-</button>
		{count}
		<button>+</button>
	</>;
}
```

dispatch *increment* and *decrement* actions on click of the buttons.

```jsx {linenos=true,hl_lines=["31-37"]}
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: { value: 0 },
	reducers: {
		increment: state => { state.value++ },
		decrement: state => { state.value-- },
	},
});

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
	},
});

export default function App() {
	return <Provider store={store}>
		<h1>Demo</h1>
		<Counter />
	</Provider>;
}

function Counter() {
	const count = useSelector(state => state.counter.value);
	const dispatch = useDispatch();

	return <>
		<button onClick={() => dispatch(counterSlice.actions.decrement())}>
			-
		</button>
		{count}
		<button onClick={() => dispatch(counterSlice.actions.increment())}>
			+
		</button>
	</>;
}
```
