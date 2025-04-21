---
title: "Website File Path"
date: 2023-08-20T20:23:06-04:00
tags: [html, path]
---

# Pages Example

Let's say you have the following static website project
and each file has links to other files.

```fs-tree
blue
├── a.html
└── red
    ├── b.html
    └── green
        └── c.html
```

## Relative Path

`a.html`

```html
<a href="red/b.html">B</a>
<a href="red/green/c.html">C</a>
```

`b.html`

```html
<a href="../a.html">A</a>
<a href="green/c.html">C</a>
```

`c.html`

```html
<a href="../../a.html">A</a>
<a href="../b.html">B</a>
```

## Absolute Path

`a.html`

```html
<a href="/red/b.html">B</a>
<a href="/red/green/c.html">C</a>
```

`b.html`

```html
<a href="/a.html">A</a>
<a href="/red/green/c.html">C</a>
```

`c.html`

```html
<a href="/a.html">A</a>
<a href="/red/b.html">B</a>
```


# Images Example

Let's say you have the following static website project and each web page has
the same three images that are located in different directories.

```fs-tree
blue
├── a.html
├── squirtle.webp
└── red
    ├── b.html
    ├── chamander.webp
    └── green
        ├── c.html
        └── balbazor.webp
```

## Relative Path

`a.html`

```html
<img src="squirtle.webp">
<img src="red/chamander.webp">
<img src="red/green/balbazor.webp">
```

`b.html`

```html
<img src="../squirtle.webp">
<img src="chamander.webp">
<img src="green/balbazor.webp">
```

`c.html`

```html
<img src="../../squirtle.webp">
<img src="../chamander.webp">
<img src="balbazor.webp">
```

## Absolute Path

`a.html`

```html
<img src="/squirtle.webp">
<img src="/red/chamander.webp">
<img src="/red/green/balbazor.webp">
```

`b.html`

```html
<img src="/squirtle.webp">
<img src="/red/chamander.webp">
<img src="/red/green/balbazor.webp">
```

`c.html`

```html
<img src="/squirtle.webp">
<img src="/red/chamander.webp">
<img src="/red/green/balbazor.webp">
```