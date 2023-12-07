---
layout: "./../../layouts/project.layout.astro"
title: "Script Trivia"
subtitle: "ReactJS"
date: "2023-05-10"
description: "Quiz app for non-IT professionals."
keywords: "script trivia, script, trivia, quiz, app, non-IT professionals"
category: "react"
image: "script-trivia.png"
link: "https://script-trivia.netlify.app/"
repo: "https://github.com/davinaleong/proj-script-trivia"
featured: true
technologies:
  [
    { label: "Frontend", items: ["ReactJS", "Webpack", "SASS", "Typescript"] },
    { label: "Deployment", items: ["Netlify"] },
  ]
draft: 0
---

I developed this project to support my passion in opening the minds of non-IT professionals to the world of IT--namely coding. I feel that in this age where we are surrounded by technology, it is important to have some background understanding of the apps they use. It is NOT the aim of this app to convert people into programmers.

This app is built in `ReactJS`, `Typescript` & `SASS`. It is compiled using my custom `Webpack` boilerplate. This app doesn't have a backend as I don't want to pay for a database. The quiz data is baked into the code. This means a rebuild when new quizzes are added.

To avoid any legal implications, the app does not store or track one's progress. This means that if one closes the page, their progress will be lost.
