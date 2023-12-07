---
layout: "./../../layouts/project.layout.astro"
title: "Pokemon Teams Template"
subtitle: "HTML Template"
date: "2020-01-16"
description: "The template portion of a Pokemon-Teams React-app."
keywords: "Davina, Leong, Davina Leong, Personal Website, Pokemon, Template, Pokemon Teams Template, HTML, CSS, SASS, jQuery, JSON, Font Awesome 5, CSS Grid, Flex"
category: "html"
image: "pokemon-teams-template.png"
link: "https://davinaleong.github.io/proj-pokemon-teams-template/"
repo: "https://github.com/davinaleong/proj-pokemon-teams-template"
featured: false
technologies:
  [
    {
      label: "Frontend",
      items: ["HTML", "CSS", "SASS", "JSON", "jQuery", "Font Awesome 5"],
    },
    { label: "Highlights", items: ["CSS Grid", "Flex"] },
  ]
draft: 0
---

This project is the first part of a 2-part project I'm in the midst of building. The second part is to build this project in `ReactJS`.

I first sketched up the mockups of the app pages in [Affinity Designer](https://affinity.serif.com/en-gb/designer/).

I then built the template in `HTML` and `SASS`, using the [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemlabel=ritwickdey.live-sass) [VS Code](https://code.visualstudio.com/) extension to compile the `SASS` scripts.

This template features **CSS Grid** and **Flex**. **CSS Grid** is used to lay out the main components like the sidebar and main sections, and **Flex** is used to lay out the Team-cards.

`jQuery` is used to render the Team-cards and the Team-list on the sidebar. Dummy team data is stored in a `JSON` file and is pulled in and displayed by the Team-cards.
