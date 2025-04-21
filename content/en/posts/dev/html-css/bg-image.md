---
title: "Background Image"
date: 2023-08-30T16:53:23+03:00
tags: [css, images, background]
description: "Background Image in CSS"
---

## Attributes

* `background-image`
* `background-repeat`
* `background-size`
* `background-position`

## Syntax

```css
.container {
	background-image: url(path/to/your/image.jpg);
}
```

## Repetition

```css
.container {
	background-repeat: repeat; /* default */
}

.container {
	background-repeat: no-repeat;
}
```

## Size

```css
.container {
	background-size: auto; /* default */
	background-size: contain;
	background-size: cover;
}
```

## `contain` vs. `cover`

|           | see all image | no empty parts |
|:---------:|:-------------:|:--------------:|
| `contain` |       V       |                |
| `cover`   |               |       V        |

## Position

```css
.container {
	background-position: left top; /* default */
	background-position: center;
	background-position: top;
	background-position: bottom;
	background-position: left;
	background-position: right;
}
```
