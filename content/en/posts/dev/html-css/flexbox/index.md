---
title: "Flexbox"
date: 2023-08-29T23:55:23+03:00
tags: [css, flexbox]
---

Full and comprehensive guide where I brought the images from:
[link](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

## Terms

![terms](img/axis.webp)

## Items and Container

![items](img/items.webp)

![container](img/container.webp)

## Structure

```html
<div class="container">
	<div class="item">nisim</div>
	<div class="item">shlomo</div>
	<div class="item">david</div>
</div>
```

```css
.container {
	display: flex;
}
```

## `flex-direction`

```css
.container {
	display: flex;
	flex-direction: row | column;
}
```

![Direction](img/dir.webp)

## `flex-wrap`

```css
.container {
	display: flex;
	flex-wrap: wrap;
}
```

![Wrap](img/wrap.webp)

## `justify-content`

What does "justify" mean?

![not that](img/judge.webp)

Justify
: The alignment of text to the left/right/both margins.

```css
.container {
	display: flex;
	justify-content: flex-start;
}
```

![justify options](img/justify.webp)

## `align-items`

```css
.container {
	display: flex;
	align-items: stretch;
}
```

![Align Items](img/align.webp)

## `align-content`

```css
.container {
	display: flex;
	align-content: flex-start;
}
```

![Align Content](img/align_content.webp)

## `gap`

```css
.container {
	display: flex;
	gap: 1rem;
}
```

Different gap between cols and rows:

```css
.container {
	display: flex;
	gap: 10px 20px;
}
```

![Gap](img/gap.webp)

