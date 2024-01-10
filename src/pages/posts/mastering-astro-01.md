---
layout: "./../../layouts/post.layout.astro"
title: "Mastering Astro #1: Project Setup"
date: "2024-01-10 11:00:00"
description: "Delve into an in-depth tutorial for experienced developers to navigate Astro, exploring optimal setups, command-line workflows, and project structuring. Elevate your web development skills with Astro's powerful capabilities."
keywords: "Astro, Web Development, Advanced Tutorial, VS Code, JavaScript, Project Setup, Command-line Workflow, NPM Dependencies, Git Repository, Markdown"
images:
  [
    {
      url: "mastering-astro-0001.png",
      alt: "Mastering Astro #1: Project Setup",
    },
  ]
---

Hey all, here’s a guide to getting started with Astro. This tutorial is not aimed at beginners, so you are expected to have some experience in web development. I’m also going to give you my ideal setup. It may not be the most optimized, but this is the workflow I’ve been using.

Prerequisites: Internet connection, VS Code, and working knowledge of HTML, CSS, and JavaScript.<br>
The programming languages needed are HTML, CSS, JavaScript, and Markdown.

Launch the terminal and run the following command:

> ```bash
> npm create astro@latest
> ```
>
> Explanation: this will ask Astro to generate a new project structure for us.
>
> Tip: to run a command, type the command and press [Enter].

Answers to questions:

Where should we create your new project?

> A: Alphanumeric name of your project. Dashes (-) and underscores (\_) are allowed. Example: astro -tutorial
>
> Explanation: to avoid bugs in the future, only use letters, numbers, underscores and dashes in your project and file names.

How would you like to start your new project?

> A: Empty
>
> Explanation: starting from scratch is simpler than using a template.

Install dependencies?

> A: Yes
>
> Explanation: This command installs all NPM dependencies that are necessary for development.

Do you plan to write TypeScript?

> A: No
>
> Explanation: to keep this tutorial simple, we will use native JavaScript. If you are up for the challenge, you choose “Yes”.

Initialize a new git repository?

> A: Yes
>
> Explanation: As a bonus, I will teach you how to put your code in a repository for storage.

Wait for Astro to set up your project. DO NOT close the terminal. Once completed, you will see “Liftoff confirmed. Explore your project!”

Please don’t close the terminal, as we’re not done yet.

Run the following command:

> ```bash
> cd astro-tutorial
> ```
>
> Explanation: “cd” means “change directory” and changes your terminal location to the project folder. Terminal commands are out of the scope of this tutorial.

After that, run this command:

> ```bash
> code .
> ```
>
> Explanation: This will launch VS Code.
