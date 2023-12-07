---
layout: "./../../layouts/project.layout.astro"
title: "Dav/Devs"
subtitle: "Astro App"
date: "2020-01-16"
description: "My portfolio website."
keywords: "Davina, Leong, Davina Leong, Personal Website, Davina Devs, Davina-Devs, Dav / Devs, HTML, CSS, SASS, jQuery, JSON, Font Awesome 5, CSS Grid, Flex, GatsbyJS, ReactJS, Netlify, Affinity Designer"
category: "javascript"
image: "dav-devs.png"
link: "https://davina-devs.com/"
repo: "https://github.com/davinaleong/proj-davdevs-2023-astro"
featured: true
technologies:
  [
    {
      label: "Frontend",
      items:
        [
          "HTML",
          "SASS",
          "Font Awesome 5",
          "GatsbyJS",
          "ReactJS",
          "JSON",
          "React Markdown",
        ],
    },
    { label: "Deployment", items: ["Netlify"] },
    { label: "Highlights", items: ["CSS Grid", "Flex", "Markdown"] },
    { label: "Mockups", items: ["Affinity Designer"] },
  ]
draft: 0
---

This project is [this website](https://davina-devs.com/) you're looking at right now.

This project was originally built in [ReactJS](https://reactjs.org/), but it lacked routes. This project was moved to [GatsbyJS](https://www.gatsbyjs.com/) later on. I took it as an opportunity to learn GatsbyJS. Since I had some ReactJS background, it was simple to pick up, and I got the site moved in a day.

"**Dav/Devs**" stands for Davina develops, to emphasise what I enjoy doing: building (or developing) applications.

I specialise in building websites and web applications. _Yellow_ is the main color of the `JavaScript` logo, hence my pick for it as the site's main color. The _yellow_ theme is to emphasise my transition from `PHP` to `JavaScript` as my primary language of choice for web development. I've decided I'll only use `PHP` when the project calls for the need to use a `PHP`-based application like [Laravel](https://laravel.com/docs/6.x) or [CraftCMS](https://craftcms.com/).

This project had 3 phases: mockup, templating and development.

I first designed the mockups in [Affinity Designer](https://affinity.serif.com/en-gb/designer/). It's akin to Adobe's Illustrator, and a good alternative if you don't need a subscription-based graphics software. Affinity Photo is their answer to Adobe's Photoshop.

The template is then developed in `HTML` and `SASS`. `SASS` is used over raw `CSS` to maintain code readability and maintainability. For repeatable-content like the project cards, I first stored a list of dummy project data into a `JSON` file. The cards are then rendered with `jQuery`, with the data pulled from the `JSON` file. **CSS Grid** is used to lay out the _navbar_ and _main_ content. It is also used to lay out the project cards too both on the Home page and the Projects page.

Once the template is done, I developed the app in `ReactJS`. To maintain code simplicity, I decided to keep it a purely static app; i.e. there is no database attached to it. The project's images are stored in a public folder; accessible from the app's root folder. I then used a `JSON` file to store the app's data like the site's name and author. This is so I can modify the site's content from a single file. Check out this project's [GitHub repo](https://github.com/davinaleong/proj-davdevs) to see more.

I want to bring attention to the write-up portion of a project's details page. I'm using a `Markdown` renderer ([React Markdown](https://github.com/rexxars/react-markdown)) to render the project's about section.

By the way, need some something to cheer you up? Click the **smiley** icon to get some laughter in your life! 😁
