---
layout: "./../../layouts/post.layout.astro"
title: "Mastering Astro #2: Buidling the Template"
date: "2024-10-01 13:30:00"
description: "Delve into an in-depth tutorial for experienced developers to navigate Astro, exploring optimal setups, command-line workflows, and project structuring. Elevate your web development skills with Astro's powerful capabilities."
keywords: "Astro, Web Development, Advanced Tutorial, VS Code, JavaScript, Buidling the Template, Command-line Workflow, NPM Dependencies, Git Repository, Markdown"
images:
  [
    {
      url: "mastering-astro-02-0001.png",
      alt: "Mastering Astro #2: Buidling the Template",
    },
  ]
---

In part 2 of this tutorial, we’ll be setting up the template for our project. The project will have 2 pages: a listing and a details page.

Programming languages used: `HTML` & `CSS`.

### Folder Structure

Your folder structure should look like this:

![Default Folder Structure](/screenshots/posts/mastering-astro-02-0002.png)

All code will go in the `/src` folder. Note: Your icons and text colors may look different. We are concerned with the names of the folders and files.

Create folders so your structure looks like this:

![Default Folder Structure](/screenshots/posts/mastering-astro-02-0003.png)

| Folder     | Description                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------------- |
| components | All component `HTML` (Astro) files go here.                                                    |
| layouts    | All layout `HTML` (Astro) files go here. A layout contains the common structure of the website |
| lib        | All `JavaScript` (JS) code go here.                                                            |
| pages      | `HTML` (Astro) code specific to a page goes here.                                              |
| styles     | All `CSS` files go here.                                                                       |

### Building the Styles

#### Reset

We reset the `CSS` to overrride the web brower's default styles to maintain a consistent look and feel accross browsers.

Under the `/styles` folder, create a CSS file and name it `reset.css`

Go to [CSS Tools: Reset CSS](https://meyerweb.com/eric/tools/css/reset/) and copy all the code in light-brown box and paste it into the `reset.css` file.

> Tip: The keyboard shortcut to copy text in Windows is `[Ctrl + C]` and to paste is `[Ctrl + V]`.

Make sure to save `reset.css`.

> Tip: The keyboard shortcut to save in Windows is `[Ctrl + S]`.

#### Utilities

This file will contain all the utility styles so we can use them easily in our HTML (Astro) files. Example: `p-4`. Warning: this process is tedious, but will help you learn basic `CSS`.

Create a new file under `/styles` and name it `utilities.css`.

Go to [Utopia](https://utopia.fyi/) and click on “Type”.<br>
In the blue-gray box: copy every things from the line `:root {` to `}`.<br>
Paste it into the `utilities.css` file.

Next, go to “Space”.<br>
Only copy the `--space-*` code.

If done correctly, your `utitlies.css` should look like this:

![utilities.css root](/screenshots/posts/mastering-astro-02-0004.png)
