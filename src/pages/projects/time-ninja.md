---
layout: "./../../layouts/project.layout.astro"
title: "TimeNinja"
subtitle: "Laravel App"
date: "2023-04-08"
description: "Create and customize your own countdown timers."
keywords: "timeninja, timer, countdown, laravel, css3, html5, javascript, js, php, mysql, scss"
category: "laravel"
image: "time-ninja.png"
link: "https://time-ninja.herokuapp.com/"
repo: ""
featured: true
technologies:
  [
    { label: "Frontend", items: ["HTML", "SCSS", "JavaScript"] },
    { label: "Backend", items: ["PHP", "Laravel", "MySQL"] },
    { label: "Deployment", items: ["Heroku"] },
    { label: "Storage", items: ["AWS S3"] },
  ]
draft: 0
---

I had an idea of a countdown timer creator that would allow users to personalize the design of the timers.
They would also be able to share the link of the timer with their peers and share in the celebration of counting down a particular event.
This project is the end product of that idea.

Some of the features this app has are the ability to upload images as backgrounds, changing the font and color of the content and dials, and characteristics of the dials.
I wanted to keep this a web app so it won't take up space on their devices.

This project was built in Laravel 10 using `PHP` and `MySQL`.
`SCSS` is used to build the `CSS` framework for the frontend of the site, while vite is used to compile the frontend assets like the styles and scripts.
I used `JavaScript` for the countdown animation.
I used a combination of `CSS` transitions and `JavaScript` to animate the form panels when the prev and next buttons are clicked.
TimeNinja is deployed on Heroku and uses AWS S3 to store the images.

Feel free to play around with the app and submit any feedback via the contact form.