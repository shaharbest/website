---
title: "Controlled VS. Uncontrolled"
date: 2024-01-02T20:54:49+02:00
description: "Controlled Uncontrolled Elements Practices in react"
---

## Controlled

```jsx
import { useState } from "react";

export default function ShaharForm() {
    const [inputVal, setInputVal] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        alert(inputVal);
    }

    const isBad = inputVal === 'nisim';
    const inputStyle = { backgroundColor: isBad ? 'red': 'green' };

    return <form onSubmit={handleSubmit}>
        <input type="text" value={inputVal}
            style={inputStyle}
            onChange={e => setInputVal(e.target.value)} />
        <button>submit</button>
    </form>
}
```

## Uncontrolled

```jsx
import { useRef } from "react";

export default function ShaharForm() {
    const inputRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        alert(inputRef.current.value);
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button>submit</button>
    </form>
}
```
