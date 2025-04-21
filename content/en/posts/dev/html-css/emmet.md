---
title: "Emmet"
date: 2023-11-15T06:23:37+02:00
---

# Id and Classes

#bamba

```html
<div id="bamba"></div>
```
```
.pita
```

```html
<div class="pita"></div>
```
```
form#bamba.pita

```

```html
<form id="bamba" class="pita"></form>
```
```
p.david.nisim.shimon
```

```html
<p class="david nisim shimon"></p>
```

# Attributes

```
p[title="Hello world"]
```

```html
<p title="Hello world"></p>
```
```
td[rowspan=2 colspan=3 title]
```

```html
<td rowspan="2" colspan="3" title=""></td>
```
```
[a='value1' b="value2"]
```

```html
<div a="value1" b="value2"></div>
```

# Text

```
a{shula}
```

```html
<a href="">shula</a>
```

# Implicit

```
.nahum
```

```html
<div class="nahum"></div>
```

# Multiplication

```
ul>li*5
```

```html
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

# Item Numbering

```
ul>li.item$*5
```

```html
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul>
```
```
h$[title=item$]{Header $}*3
```

```html
<h1 title="item1">Header 1</h1>
<h2 title="item2">Header 2</h2>
<h3 title="item3">Header 3</h3>
```

# Child

```
nav>ul>li
```

```html
<nav>
    <ul>
        <li></li>
    </ul>
</nav>
```

# Sibling

```
header+main+footer
```

```html
<header></header>
<main></main>
<footer></footer>
```

# Grouping

```
div>(header>ul>li*2>a)+footer>p
```

```html
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>
```
