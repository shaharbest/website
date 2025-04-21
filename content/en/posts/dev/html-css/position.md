---
title: "Position"
date: 2023-08-30T06:05:25+03:00
tags: [css, position]
description: "Position Property in CSS"
---

## Values For `position` Property

- `static`
- `absolute`
- `reletive`
- `fixed`
- `sticky`

## Example

```css
.nisim {
	position: static;
}
```

## Default

`static` is the default.

## Movement Properties

- `top`
- `right`
- `bottom`
- `left`

```css
.nisim {
	position: absolute;

	top: 1rem;
	right: 2rem;
	bottom: 3rem;
	left: 4rem;
}
```

## `relative`

The element movements (with movement properties) are compare to its position if
it would have been static.

```css
.nisim {
	position: relative;
}
```

## `absolute`

- Elements in the page ignore an absolute element.
- The element movements (with movement properties) are compare to it's closest
  parent which is relative.

```css
.nisim {
	position: absolute;
}
```

## `fixed`

Always stays in the same place even if the page is scrolled.

```css
.nisim {
	position: fixed;
}
```

## `sticky`

Acts like relative but when the user scroll down as soon as the element hit the
top of the page it behaves like a fixed element.

```css
.nisim {
	position: sticky;
}
```
