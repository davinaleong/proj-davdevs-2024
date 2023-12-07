---
layout: "./../../layouts/project.layout.astro"
title: "Image Sliders"
subtitle: "JavaScript Demo"
date: "2022-12-08"
description: "My own solution to a simple image slider without any plugins."
keywords: "davina, davina leong, leong, slider, image, html, html5, css, css3, javascript, js, vanilla javascript, css grid, flex, flexbox"
category: "javascript"
image: "image-sliders.png"
link: "https://davinaleong.github.io/proj-image-slider/"
repo: "https://github.com/davinaleong/proj-image-slider"
featured: true
technologies:
  [
    { label: "Frontend", items: ["HTML", "CSS", "JS"] },
    { label: "Deployment", items: ["GitHub Pages"] },
    { label: "Highlights", items: ["CSS Grid", "Flexbox", "Translate"] },
  ]
draft: 0
---

This is my `HTML`, `CSS` & `JS` image slider solution. I've included several other options which includes a vertical orientation. The solution uses a combination of modern `CSS` tricks and JavaScript to get the slider to work. Bascially the slides are inside a container with the `overflow` property set to `hidden`. Then I use JavaScript and `translate` to move the slides back and forth. Data attributes are used to reference the elements in JavaScript. This project uses what I've learned from Kevin Powell's [:has() opens up new possibilities with CSS video](https://www.youtube.com/watch?v=jJcO-IZJalQ) and Traversy Media's [Build 5 Projects With HTML, CSS & JavaScript video](https://www.youtube.com/watch?v=JkeyKeK3V24) to build these sliders. Feel free to use the code in your own projects! :)
