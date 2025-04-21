---
title: "ejs"
date: 2023-11-15T05:06:22+02:00
description: "Server Side Rendering with ejs"
---

# `render` method

by default all files to render suppose to be located in the directory `views`

create a `nisim.html` page under the `views` directory

```javascript
app.get('/king', (req, res) => {
	res.render('nisim');
});
```

it won't work because no default engine was specified

we will use engine `ejs`

```sh
npm install ejs
```

it's usefull to install the `ejs` extension fo r vscode

rename `nisim.html` to `nisim.ejs`

```javascript
app.set('view engine', 'ejs');

app.get('/shlomo', (req, res) => {
	res.render('nisim');
});
```

`nisim.ejs`

```html
<html>
	<body>
		<h1>
			<%= 2 + 2 %>
		</h1>
	</body>
</html>
```

# add arguments to render

```javascript
app.set('view engine', 'ejs');

app.get('/shlomo', (req, res) => {
	res.render('nisim', { pokemon: 'pikachu' });
});
```

`nisim.ejs`

```html
<html>
	<body>
		<h1>
			<%= locals.pokemon %>
		</h1>
	</body>
</html>
```
