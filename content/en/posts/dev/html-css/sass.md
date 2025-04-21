---
title: "Sass"
date: 2024-01-03T19:50:28+02:00
---

# scss vs sass

## file extensions

* .scss file
* .sass file

# scss

## .scss extension

scss

```scss
$pita-font-stack: Helvetica, sans-serif;
$bamba-color: #333;

body {
	font: 100% $pita-font-stack;
	color: $bamba-color;
}
```

css

```css
body {
	font: 100% Helvetica, sans-serif;
	color: #333;
}
```

sass

```sass
$pita-font-stack: Helvetica, sans-serif;
$bamba-color: #333;

body
	font: 100% $pita-font-stack;
	color: $bamba-color;
```

css

```css
body {
	font: 100% Helvetica, sans-serif;
	color: #333;
}
```

# Nesting

scss

```scss
nav {
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li { display: inline-block; }

	a {
		display: block;
		padding: 6px 12px;
		text-decoration: none;
	}
}
```

css

```css
nav ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

nav li { display: inline-block; }

nav a {
	display: block;
	padding: 6px 12px;
	text-decoration: none;
}
```

# Modules

base.scss

```scss
$pita-font-stack: Helvetica, sass-serif;
$bamba-color: #333;

body {
	font: 100% $pita-font-stack;
	color: $bamba-color;
}
```

styles.scss

```scss
@use 'base';

.inverse {
	background-color: base.$bamba-color;
	color: white;
}
```

```css
body {
	font: 100% $pita-font-stack;
	color: $bamba-color;
}

.inverse {
	background-color: #333;
	color: white;
}
```

# Module name

prefix with underscore to avoid creating css file of it

# Mixins

scss

```scss
@mixin transform($property) {
	-webkit-transform: $property;
	-ms-tranform: $property;
	transform: $property;
}

.box { @include transform(rotate(30deg)); }
```

css

```css
.box {
	-webkit-transform: rotate(30deg);
	-ms-tranform: rotate(30deg);
	transform: rotate(30deg);
}
```

# Inheritance

```scss
%message-shared {
	border: 1px solid #ccc;
	padding: 10px;
	color: #333;
}

.message {
	@extend %message-shared;
}
```

```scss
.success {
	@extend %message-shared;
	border-color: green;
}

.error {
	@extend %message-shared;
	border-color: red;
}

.warning {
	@extend %message-shared;
	border-color: yellow;
}
```

# Operators

scss

```scss
.container { width: 100% }

article[role="main"] {
	float: left;
	width: 600px / 960px * 100%;
}

article[role="complementary"] {
	float: right;
	width: 300px / 960px * 100%;
}
```

css

```css
.container { width: 100% }

article[role="main"] {
	float: left;
	width: 62.5%;
}

article[role="complementary"] {
	float: right;
	width: 31.25%;
}
```

# Conditionals

```scss
@mixin triangle($size, $color, $direction) {
	height: 0;
	width: 0;

	border-color: transparent;
	border-style: solid;
	border-width: $size / 2;

	@if $direction == up {
		border-bottom-color: $color;
	}
	@else if $direction == right {
		border-left-color: $color;
	}
	@else if $direction == down {
		border-top-color: $color;
	}
	@else if $direction == left {
		border-right-color: $color;
	}
	@else {
		@error "Unknown direction #{$direction}."
	}
}

.next {
	@include triangle(5px, black, right);
}
```

```css
.next {
	height: 0;
	width: 0;
	border-color: transparent;
	border-style: solid;
	border-width: 2.5px;
	border-left-color: black;
}
```

# IDE

install extension "live sass compiler"

## Set output path

* open setting.
* search for "live sass compiler".
* click "Edit in settings.json".
* add the following:

```json
{
	"liveSassCompile.settings.formats": [
		{
			"extensionName": ".css",
			"format": "expanded",
			"savePath": "/css"
		}
	]
}
```
