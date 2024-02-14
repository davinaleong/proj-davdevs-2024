---
layout: "./../../layouts/post.layout.astro"
title: "jQuery Learning Notes"
date: "2024-02-15"
description: "Uncover the power of jQuery through a comprehensive learning journey. Access crucial links for releases, documentation, and downloads, and enhance your expertise with W3 Schools, Google CDN, and Microsoft CDN resources. Master basic syntax, function calls, and variable usage, and dive into immersive code snippets featuring jQuery UI examples. Elevate your web development skills with fade effects, selectable/sortable elements, and accordion implementations. Explore additional snippets for document ready, animation, and interactive effects, ensuring you harness the full potential of jQuery in your projects."
keywords: "jQuery Learning, jQuery Syntax, jQuery Important Links, jQuery Releases, jQuery Documentation, jQuery Download, jQuery W3 Schools, jQuery Google CDN, jQuery Microsoft CDN, jQuery Basic Syntax, jQuery Function Calls, jQuery Variables, jQuery Code Snippets, jQuery UI Examples, jQuery Fade Effect, jQuery Selectable, jQuery Sortable, jQuery Accordion, jQuery Document Ready, jQuery Animation, jQuery Interactive Effects, Web Development, Frontend Development, Dav/Devs Tech Blog."
images:
  [{ url: "jquery-learning-notes-0001.png", alt: "jQuery Learning Notes" }]
---

## 1. Important Links

| Website       | Link/URL                                                   |
| ------------- | ---------------------------------------------------------- |
| Releases      | https://releases.jquery.com/                               |
| Documentation | https://api.jquery.com/                                    |
| Download      | https://jquery.com/download/                               |
| W3 Schools    | http://www.w3schools.com/jquery/default.asp                |
| Google CDN    | https://developers.google.com/speed/libraries/             |
| Microsoft CDN | https://learn.microsoft.com/en-us/aspnet/ajax/cdn/overview |

## 2. Basic Syntax

### 2.1. Function Calls

Syntax:

```js
$(<selector>).<JQueryMethod>();
```

Example:

```js
$("p").hide()
```

### 2.2. Variables:

Syntax:

```js
let $<JQueryVariable> = $(<selector);
```

Example:

```js
let $p = $("p")
```

## 4. Code Snippets

### 4.1. _jQuery UI_ - Fade In/Out Code Example

`index.html`

```js
<html>
  <head>
    <title>Button Magic</title>
    <link rel="stylesheet" type="text/css" href="stylesheet.css" />
    <script type="text/javascript" src="script.js"></script>
  </head>
  <body>
    <div>
      <br />
      <strong>Click Me!</strong>
    </div>
  </body>
</html>
```

`style.css`

````js
div
{
    height: 60px;
    width: 100px;
    border-radius: 5px;
    background-color: #69D2E7;
    text-align: center;
    color: #FFFFFF;
    font-family: Verdana, Arial, Sans-Serif;
    opacity: 0.5;
}```

`script.js`

```js
$(document).ready(function()
{
    $("div").mouseenter(function()
    {
       $("div").fadeTo("fast", 1);
    });

    $("div").mouseleave(function()
    {
        $("div").fadeTo("fast", 0.5);
    });
});
````

### 4.2. _jQuery UI_ - Selectable / Sortable Example

`index.html`

```js
<!DOCTYPE html>
<html>
	<head>
		<title>Select Ye Favorite</title>
		<link rel='stylesheet' type='text/css' href='stylesheet.css'/>
		<script type='text/javascript' src='script.js'></script>
		<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
	</head>
	<body>
		<ol>
			<li>Super Mario Bros.</li>
			<li>Tetris</li>
			<li>Legend of Zelda: Link's Awakening</li>
			<li>Kirby's Dream World</li>
			<li>Burger Time</li>
			<li>Pokémon Red</li>
			<li>Pokémon Blue</li>
		</ol>
	</body>
</html>
```

`style.css`

```js
ol
{
	list-style-type: none;
	position: relative;
	left: -20px;
}

ol li
{
	background: #eeeeee;
	border-radius: 5px;
	border: 1px solid black;
	margin: 3px;
	padding: 0.4em;
	font-size: 1em;
	height: 16px;
	font-family: Verdana, Arial, Sans-Serif;
}

/* jQuery css??? */
ol .ui-selected
{
	background: #F39814; color: white;
}
```

`script.js`

```js
$(document).ready(function () {
  $("ol").selectable()
  //$("ol").sortable();
})
```

### 4.3. _jQuery UI_ - Accordion Example

`index.html`

```js
<!DOCTYPE html>
<html>
	<head>
		<title>Behold!</title>
		<link rel='stylesheet' type='text/css' href='http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css'/>
		<script type='text/javascript' src='script.js'></script>
		<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
	</head>
	<body>
		<div id="menu">
			<h3>jQuery</h3>
			<div>
				<p>jQuery is a JavaScript library that makes your websites look absolutely stunning.</p>
			</div>
			<h3>jQuery UI</h3>
			<div>
				<p>jQuery UI includes even more jQuery goodness!</p>
			</div>
			<h3>JavaScript</h3>
			<div>
				<p>JavaScript is a programming language used in web browsers, and it's what powers jQuery and jQuery UI. You can learn about JavaScript in the <a href="http://www.codecademy.com/tracks/javascript" target="blank" style="text-decoration:none; color:#F39814">JavaScript track</a> here on Codecademy.</p>
			</div>
		</div>
	</body>
</html>
```

`script.js`

```js
$(document).ready(function () {
  $("#menu").accordion({ collapsible: true, active: false })
})
```

### 5. More Code Snippets

#### 5.1. Document Ready

```js
$(document).ready(function () {
  // code here
})
```

#### 5.2. Animate

```js
$(document).ready(function () {
  $("div").animate({ top: "+=100px" }, 1000)
})
```

#### 5.3. Explode

```js
$(document).ready(function () {
  $("div").click(function () {
    $(this).effect("explode")
  })
})
```

#### 5.4. Bounce

```js
$(document).ready(function () {
  $("div").click(function () {
    $(this).effect("bounce", { times: 3 }, 500)
  })
})
```

#### 5.5. Slide

```js
$(document).ready(function () {
  $("div").click(function () {
    $(this).effect("slide")
  })
})
```

#### 5.6. Accordion

```js
$(document).ready(function () {
  $("#menu").accordion({ collapsible: true, active: false })
})
```

#### 5.7. KeyDown

```js
$(document).ready(function () {
  $(document).keydown(function (key) {
    //what does parseInt do?
    switch (parseInt(key.which, 10)) {
      // R key pressed
      case 82:
        alert(
          "'R' key pressed.\n\n- Debug div Heights -\n#main: " +
            $main.height() +
            " | #downloads: " +
            $downloads.height() +
            "\n.content: " +
            $content.height() +
            " | .description: " +
            $desc.height()
        )
        break
    }
  })
})
```

#### 5.8. Equalize Heights

```js
var $content = $(".content")
var $desc = $(".description")

if ($content.height() > $desc.height()) {
  $desc.height($content.height())
} else {
  $content.height($desc.height())
}
```
