---
layout: "./../../layouts/post.layout.astro"
title: "SASS Learning Notes"
date: "2024-02-10 11:03:00"
description: "Immerse yourself in the world of SASS with comprehensive learning notes, covering essential links, common examples, and practical snippets. Explore string interpolation, loops, and responsive background image techniques. Elevate your SASS skills with this guide, offering valuable insights and hands-on examples for efficient stylesheet development."
keywords: "SASS Learning, SASS Tutorial, SASS Examples, SASS Documentation, SASS String Interpolation, SASS Loop, SASS Snippets, Responsive Background Image in SASS, SASS Variables, SASS Main Stylesheet, SASS Media Queries, SASS Styles, SASS Tips, SASS Tricks, Dav/Devs Tech Blog, Web Development, Frontend Development, CSS Preprocessors."
images: [{ url: "sass-learning-notes-0001.png", alt: "SASS Learning Notes" }]
---

## 1. Links

- Website: http://sass-lang.com/
- Documentation: http://sass-lang.com/documentation/file.SASS_REFERENCE.html

## 2. Common Examples

### 2.1. String Interpolation

```scss
$font = "Light";

h1 {
	font-family: "Calibri #{$font}", Arial, sans-serif;
}
```

### 2.2. Loop

```scss
$colors {
	red: #ff0000,
	blue: #0000ff,
	green: $00ff00
}

@each $color, $hex in $colors {
	// code here
}
```

## 3. Snippets

### 3.1. Responsive Background Image

`variables.scss`

```scss
$widths: (
  xxxhdpi: 1280px,
  xxhdpi: 960px,
  xhdpi: 640px,
  hdpi: 480px,
  mdpi: 320px,
  ldpi: 240px,
);

$used-widths: (
  xxhdpi: 960px,
  xhdpi: 640px,
);
```

`main.scss`

```scss
.content-md {
  @each $width, $value in $used-widths {
    @media screen and (max-width: $value) {
      // string interpolation in sass
      background-image: url("../assets/img/bg_img-#{$width}.png");
    }
  }

  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}
```

### 3.2. Loop to style all Headers

```scss
@for $i from 1 through 6 {
  h#{$i} {
    //styles here
  }
}
```
