---
layout: "./../../layouts/project.layout.astro"
title: "Password Visibility"
subtitle: "JavaScript Demo"
date: "2022-10-07"
description: "A solution I came up with for the password visibility toggle found on many modern websites."
keywords: "davina, davina leong, leong, password, password visibility, visibility, html, html5, css, css3, js, javascript"
category: "javascript"
image: "password-visibility.png"
link: "https://davinaleong.github.io/password-visibility/"
repo: "https://github.com/davinaleong/proj-password-visibility"
featured: false
technologies:
  [
    { label: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
    { label: "Deployment", items: ["GitHub Pages"] },
    { label: "Highlights", items: ["CSS Adjacent Sibling Selector"] },
  ]
draft: 0
---

Here is my solution/demo to the password visibility toggle found on many websites. This is a pure JavaScript solution. As per the pattern I learned from Kevin Powell, I've used `data-` attributes as my selectors like the form or password toggle buttons. I've now streamlined to use a custom `data-element` attribute and the value as the label of the element--e.g. `data-element=\"form-example\"`. Then I access it in `CSS` like this: `[data-element=form-example]` or in `JS` like this: `document.querySelector(\"[data-element=form-example]\")`.

For the solution demo, the form doesn't do anything and just outputs the form values on the page itself.

Feel free to use my code for your own reference! :)
