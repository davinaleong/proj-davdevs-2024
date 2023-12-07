---
layout: "./../../layouts/project.layout.astro"
title: "QR Code Generator"
subtitle: "HTML & JS Template"
date: "2021-08-28"
description: "The HTML template of my resume for my website."
keywords: "Davina, Leong, Davina Leong, Personal Website, Resume, Template, Resume HTML Template, HTML, CSS, jQuery, JSON, Font Awesome 5, CSS Grid, Flex"
category: "html"
image: "resume-html-template.png"
link: "https://davinaleong.github.io/proj-resume-html-template/"
repo: "https://github.com/davinaleong/proj-resume-template"
featured: false
technologies:
  [
    {
      label: "Frontend",
      items: ["HTML", "CSS", "JSON", "jQuery", "Font Awesome 5"],
    },
    { label: "Highlights", items: ["CSS Grid", "Flex"] },
  ]
draft: 0
---

This [video](https://www.youtube.com/watch?v=qNiUlml9MDk) by Traversy Media on creating a QR Code Generator inspired me to create my own version. _Note:_ I did not follow the tutorial.

QR Codes are useful for mobile phone users to access links simply and quickly.

How to use:

1. Fill up the _URL_ field with the link to your website.
1. (Optional) Select the _size_ of the QR Code you want. Measurement is in pixels.
1. (Optional) Select the _colours_ you want for the QR Code. _Foreground Color_ is the color of the code and _Background Color_ is the color surrounding the QR Code.
1. Click on _submit_ and wait for your QR Code to generate.
1. (Laptop/Desktop) _Right click_ on the QR code and click on _Save as image..._
1. (Android/iOS) Follow your platform's specific instructions on how to download images from a website.

This project is build in HTML, CSS and plain JavaScript. I used **CSS Grid** to for the body and form layout and **Flexbox** for the header. The [QRCode.js](https://github.com/davidshimjs/qrcodejs) library is used to render the QR Code.
