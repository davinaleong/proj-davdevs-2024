---
layout: "./../../layouts/project.layout.astro"
title: "New Dialog Element Example"
subtitle: "JS Demo"
date: "2022-09-20"
description: "A preview of the new dialog element with example code on GitHub."
keywords: "davina, davina leong, leong, dialog, dialog element, new, html, html5, css, css3, js, javascript, github"
category: "javascript"
image: "dialog-example.png"
link: "https://davinaleong.github.io/proj-dialog-example/"
repo: "https://github.com/davinaleong/proj-dialog-example"
featured: false
technologies:
  [
    {
      label: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "Dialog Element"],
    },
    { label: "Deployment", items: ["GitHub Pages"] },
    { label: "Highlights", items: ["Dialog Element"] },
  ]
draft: 0
---

Here is a demo I built featuring the [dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog). I found out about this new element from Kevin Powell's video [dialog = the easiest way to make a popup modal](https://www.youtube.com/watch?v=TAB_v6yBXIE&t=0s).

I decided to build my own demo to explore and play around with this new element. I built 2 dialogs--a simple one and a form one. The repo can be found [here](https://github.com/davinaleong/proj-davdevs-gatsby), where you can view my code and perhaps give you some inspiration on how to use this new `dialog` element.

Here are some simple how-tos:

- The dialog element comes with its own pseudo element, `::backdrop` which gives you--as you guessed it, ability to style the backdrop of the dialog.
- To open the dialog via **JavaScript**, use the `showModal()` function on the `dialog` element.
- To close the dialog, use the `close()` function.
