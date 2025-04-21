---
title: "Use Reducer Hook"
date: 2023-08-17T17:04:28+03:00
tags: [reducer]
description: "Use Reducer Hook In React"
---

It can be very annoying to manage component states
with the *useState* hook alone.

```jsx {linenos=true}
function Counter() {
	const [count, setCount] = useState(0);

    function handleIncrement() { setCount(count + 1); }
    function handleDecrement() { setCount(count - 1); }
    function handleReset() { setCount(0); }

	return <>
		<span>{count}</span>
		<button onClick={handleIncrement}>+</button>
		<button onClick={handleDecrement}>-</button>
		<button onClick={handleReset}>Reset</button>
	</>;
}
```

## The Reducer Function

A way to cetralize the state management
is to use the reducer function.
This function receive an action and a
state and return a new state.
The reducer is a pure function.
That means that it should not have
any side effects. That means
it should not change the state directly
but return a new state.

For a simple demo let's define the state's
data structure and the initial state:

```jsx
const initialState = { value: 0 };
```

Let's define a reducer just for the increment action:

```jsx
function reducer(state, action) {
	if (action.type === 'increment') return { value: state.value + 1 };
	return state;
}
```

In order to use the reducer in react
we need to import the *useReducer* hook:

```jsx
import { useReducer } from "react";
```

Then we will use it:

```jsx {linenos=true}
import { useReducer } from "react";

const initialState = { value: 0 };

function reducer(state, action) {
	if (action.type === 'increment') return { value: state.value + 1 };
	return state;
}

function Counter() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <>
		<span>{state.value}</span>
		<button onClick={() => dispatch({ type: 'increment' })}>
			+
		</button>
	</>;
}
```

Let's add the *decrement* action:

```jsx {linenos=true,hl_lines=[7,"19-21"]}
import { useReducer } from "react";

const initialState = { value: 0 };

function reducer(state, action) {
	if (action.type === 'increment') return { value: state.value + 1 };
	if (action.type === 'decrement') return { value: state.value - 1 };
	return state;
}

function Counter() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <>
		<span>{state.value}</span>
		<button onClick={() => dispatch({ type: 'increment' })}>
			+
		</button>
		<button onClick={() => dispatch({ type: 'decrement' })}>
			-
		</button>
	</>;
}
```

And the *reset* action is going to be easier:

```jsx {linenos=true,hl_lines=[8,"23-25"]}
import { useReducer } from "react";

const initialState = { value: 0 };

function reducer(state, action) {
	if (action.type === 'increment') return { value: state.value + 1 };
	if (action.type === 'decrement') return { value: state.value - 1 };
	if (action.type === 'reset') return initialState;
	return state;
}

function Counter() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <>
		<span>{state.value}</span>
		<button onClick={() => dispatch({ type: 'increment' })}>
			+
		</button>
		<button onClick={() => dispatch({ type: 'decrement' })}>
			-
		</button>
		<button onClick={() => dispatch({ type: 'reset' })}>
			reset
		</button>
	</>;
}
```

There are many times when it's not only the action type that determines the new state.
For example, when we want to increment the count by a given amount.
In this case we need to pass the amount as a payload in the action object.

```jsx {linenos=true,hl_lines=["9-11","29-34"]}
import { useReducer } from "react";

const initialState = { value: 0 };

function reducer(state, action) {
	if (action.type === 'increment') return { value: state.value + 1 };
	if (action.type === 'decrement') return { value: state.value - 1 };
	if (action.type === 'reset') return initialState;
	if (action.type === 'increment-by') {
		return { value: state.value + action.payload.amount }
	}
	return state;
}

function Counter() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <>
		<span>{state.value}</span>
		<button onClick={() => dispatch({ type: 'increment' })}>
			+
		</button>
		<button onClick={() => dispatch({ type: 'decrement' })}>
			-
		</button>
		<button onClick={() => dispatch({ type: 'reset' })}>
			reset
		</button>
		<button onClick={() => dispatch({
			type: 'increment-by',
			payload: { amount: 5 }
		})}>
			increment by 5
		</button>
	</>;
}
```

writing strings is annoying and prone to errors

Soloution: constants!

```javascript
const ACTIONS = {
	INCREMENT: "increment",
	DECREMENT: "decrement",
	RESET: "reset",
	INCREMENT_BY: "change-count",
}
```

edit our reducer

```javascript {linenos=true,hl_lines=["2-5"]}
function reducer(count, action) {
	if (action.type === ACTIONS.INCREMENT) return { value: state.value + 1 };
	if (action.type === ACTIONS.DECREMENT) return { value: state.value - 1 };
	if (action.type === ACTIONS.RESET) return initialState;
	if (action.type === ACTIONS.INCREMENT_BY) {
		return { value: state.value + action.payload.amount }
	}
	return state;
}
```

edit our component

```jsx {linenos=true,hl_lines=[6,9,12,15]}
function Counter() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <>
		<span>{state.value}</span>
		<button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
			+
		</button>
		<button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
			-
		</button>
		<button onClick={() => dispatch({ type: ACTIONS.RESET })}>
			reset
		</button>
		<button onClick={() => dispatch({ type: ACTIONS.INCREMENT_BY,
			payload: { amount: 5 }
		})}>increment by 5</button>
	</>;
}
```

also coding the object with types is a pain.

Solution: action creators!

```javascript
function createIncrementAction() { return { type: ACTIONS.INCREMENT }; }
function createDecrementAction() { return { type: ACTIONS.DECREMENT }; }
function createResetAction() { return { type: ACTIONS.RESET }; }
function createIncrementByAction(amount) {
	return { type: ACTIONS.INCREMENT_BY, amount };
}
```

use actions creators

```jsx {linenos=true,hl_lines=[6,9,12,15]}
function Counter() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <>
		<span>{state.value}</span>
		<button onClick={() => dispatch(createIncrementAction())}>
			+
		</button>
		<button onClick={() => dispatch(createDecrementAction())}>
			-
		</button>
		<button onClick={() => dispatch(createResetAction())}>
			reset
		</button>
		<button onClick={() => dispatch(createIncrementByAction(5))}>
			increment by 5
		</button>
	</>;
}
```

all together now

```jsx {linenos=true}
function createIncrementAction() { return { type: ACTIONS.INCREMENT }; }
function createDecrementAction() { return { type: ACTIONS.DECREMENT }; }
function createResetAction() { return { type: ACTIONS.RESET }; }
function createIncrementByAction(amount) {
	return { type: ACTIONS.INCREMENT_BY, amount };
}

const initialState = { value: 0 };

function reducer(count, action) {
	if (action.type === ACTIONS.INCREMENT) return { value: state.value + 1 };
	if (action.type === ACTIONS.DECREMENT) return { value: state.value - 1 };
	if (action.type === ACTIONS.RESET) return initialState;
	if (action.type === ACTIONS.INCREMENT_BY) {
		return { value: state.value + action.payload.amount }
	}
	return state;
}

function Counter() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <>
		<span>{state.value}</span>
		<button onClick={() => dispatch(createIncrementAction())}>
			+
		</button>
		<button onClick={() => dispatch(createDecrementAction())}>
			-
		</button>
		<button onClick={() => dispatch(createResetAction())}>
			reset
		</button>
		<button onClick={() => dispatch(createIncrementByAction(5))}>
			increment by 5
		</button>
	</>;
}
```
