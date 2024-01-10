---
layout: "./../../layouts/post.layout.astro"
title: "Mastering Astro #2: Folder Structure"
date: "2024-01-10 13:30:00"
description: "Dive into part 2 of the Astro tutorial, focusing on organizing your project with an optimized folder structure. Follow the guide to create essential folders like assets, components, layouts, lib, pages, and styles for efficient development."
keywords: "Astro, Project Structure, Folder Setup, Web Development, HTML, CSS, JavaScript, Astro Tutorial, Coding Organization"
images:
  [
    {
      url: "mastering-astro-0002.png",
      alt: "Mastering Astro #2: Folder Structure",
    },
  ]
---

In part 2 of this tutorial, we'll set up our project's folder structure.

### Folder Structure

Your folder structure should look like this:

All code will go in the `/src` folder. Note: Your icons and text colours may look different. We are concerned with the names of the folders and files.

Create folders so your structure looks like this:

![Folder Structure](/screenshots/posts/mastering-astro-0002-a.png)

| Folder     | Description                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------------- |
| assets     | All non-code files like images and fonts go here.                                              |
| components | All component `HTML` (Astro) files go here.                                                    |
| layouts    | All layout `HTML` (Astro) files go here. A layout contains the common structure of the website |
| lib        | All `JavaScript` (JS) code goes here.                                                          |
| pages      | `HTML` (Astro) code specific to a page goes here.                                              |
| styles     | All `CSS` files go here.                                                                       |
