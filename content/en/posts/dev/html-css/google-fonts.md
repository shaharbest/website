---
title: "Google Fonts"
date: 2024-01-03T19:48:53+02:00
---

# use font on the internet

go to https://fonts.google.com/

click on a font you want

click on "Select this style"

copy the `link` elements.

example:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Modak&display=swap" rel="stylesheet">
```

paste it under `head` element in your page.

copy `font-family` line.

example:

```
font-family: 'Modak', cursive;
```

paste it under the relevant selector

```css
p {
	font-family: 'Modak', cursive;
}
```

# download font

after clicking "Select this style" click "Download All".

move the downloaded zip file to your website directory.

unzip the file.

add the following code to your css:

```css
@font-face {
    font-family: my-downloaded-font;
    src: url(./path/to/your/font_file.ttf);
}
```

use the name you used for `font-family` in the relevant selector in the css

```css
p {
	font-family: my-downloaded-font;
}
```
