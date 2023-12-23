---
layout: "./../../layouts/project.layout.astro"
title: "Color Palettes"
subtitle: "JS App"
date: "2020-01-15"
description: "Responsive color palette project using HTML, CSS, flex, and CSS grid. Easily explore and copy color codes. Version 2 enhances usability."
keywords: "Color Palette, HTML, CSS, Flex, Grid, jQuery, JavaScript, Responsive, Color Codes, UX"
category: "javascript"
images: [{ url: "color-palettes.png", alt: "Color Palettes" }]
links:
  [
    {
      label: "See Demo",
      url: "https://davinaleong.github.io/proj-color-palette/",
    },
    {
      label: "See Repo",
      url: "https://github.com/davinaleong/proj-color-palette-v2",
    },
  ]
featured: false
technologies:
  [
    { label: "Frontend", items: ["HTML", "CSS", "JavaScript", "JSON"] },
    { label: "Highlights", items: ["CSS Grid", "Flex"] },
  ]
draft: 0
---

This color palette project is built with `HTML` and `CSS`, incorporating flex and CSS grid for a responsive layout. Initially utilizing `jQuery` to render color swatches from a stored `JSON` file, the palette data and color values are conveniently stored in a `JSON` file for easy modifications. The choice of `jQuery` aimed at simplicity and cleanliness.

In an October 2022 update to version 2, the project transitioned away from `jQuery` to plain JavaScript for swatch population. Version 2 includes an enhanced color details pane with buttons for easy copying of color values (Hex, RGB, or HSL) to the clipboard. Designed for user convenience, Color Palettes offers a user-friendly experience for exploring and copying color codes effortlessly.
