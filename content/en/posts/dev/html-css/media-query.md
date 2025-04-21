---
title: "Media Query"
date: 2024-01-03T19:46:12+02:00
---

# Intro

The following css assign different bg color
to different screen sizes:

```css
body { background-color: red; }

@media all and (max-width: 500px) {
	body { background-color: blue; }
}
```

# Media Type

The word *all* can be switched with the words:

+ screen
+ print
+ speech

## default

the value *all* is the default so it can left blank like the following:

```css
body { background-color: red; }

@media (max-width: 500px) {
	body { background-color: blue; }
}
```

# Printer

the following will make the print view with different background color:

```css
body { background-color: red; }

@media print {
	body { background-color: blue; }
}
```

# Orientation

landscape
: page_width > page_height

portrait
: page_height > page_width

```css
@media (orientation: portrait) {
	body { background-color: red; }
}

@media (orientation: landscape) {
	body { background-color: blue; }
}
```

# And/Or

## And
```css
@media (orientation: portrait) and (max-width: 500px) {
	body { background-color: red; }
}
```

## Or
```css
@media (orientation: portrait), (max-width: 500px) {
	body { background-color: red; }
}
```
