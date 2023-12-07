---
layout: "./../../layouts/project.layout.astro"
title: "The Beloved's Blog"
subtitle: "React App"
date: "2022-04-20"
description: "A blog to glorify Jesus with my revelations and testimonies."
keywords: "Davina, Leong, Davina Leong, CMS, HTML, CSS, buttons, animation, css animation, flex, flexbox, Laravel, PHP, projects"
category: "react"
image: "the-beloveds-blog.png"
link: "https://the-beloveds-blog.com/"
repo: "https://github.com/davinaleong/proj-the-beloveds-blog-2023"
featured: false
technologies:
  [
    {
      label: "Frontend",
      items:
        [
          "HTML",
          "SASS",
          "Grid",
          "Flexbox",
          "ReactJS",
          "GatsbyJS",
          "Typescript",
        ],
    },
    { label: "Deployment", items: ["Netlify"] },
    { label: "Highlights", items: ["React Markdown"] },
  ]
draft: 0
---

This blog is built in [GatsbyJS](https://www.gatsbyjs.com/) which is based off [ReactJS](https://reactjs.org/). I decicded to use this project to get my feet wet in [TypeScript](https://www.typescriptlang.org/). It also uses [SASS](https://sass-lang.com/) as for the styles. The layout features [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) in its design. It is used in the post listing section on the landing and archive pages. It is also used to organise the pagination on the archive page.

One of the main highlights of this website is the use of [React Markdown](https://github.com/remarkjs/react-markdown) to render the post content. It also features [GraphQL](https://graphql.org/) for it's interaction with the [Content Management System](https://www.davina-devs.com/projectItem/?uuid=davinas-cms) or CMS's API.
