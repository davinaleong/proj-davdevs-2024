---
layout: "./../../layouts/project.layout.astro"
title: "Color Palettes"
subtitle: "JS App"
date: "2020-01-15"
description: "A simple website to store Color Palettes I use frequently."
keywords: "Davina, Leong, Davina Leong, Personal Website, Colour, Color, Palettes, App, Color Palettes, HTML, CSS, jQuery, JSON, CSS Grid, Flex"
category: "javascript"
image: "color-palettes.png"
link: "https://davinaleong.github.io/proj-color-palette/"
repo: "https://github.com/davinaleong/proj-color-palette-v2"
featured: false
technologies:
  [
    { label: "Frontend", items: ["HTML", "CSS", "JavaScript", "JSON"] },
    { label: "Highlights", items: ["CSS Grid", "Flex"] },
  ]
draft: 0
---

This project is built in `HTML` and `CSS`. `jQuery` is used to render the palettes from a `JSON` file.

The palatte data and color values are stored in a `JSON` file for easy-editing.

I decided upon `jQuery` as the main technology to render the color swatches as I wanted to keep the project simple and clean.

Feel free to use Color Palettes for your own reference. I designed the project such that it's easy to copy the swatch's hex value.

Edit 3rd Oct 2022:

This app has been updated to version 2. Version 2 does away with jQuery and uses plain JavaScript to populate the swatches. It also has a pane which displays more details of a color when clicked on. The pane also has buttons to copy the color value (Hex, RGB or HSL) to your clipboard for your convenience.

Hope you enjoy using this Color Palettes app!
