---
layout: "./../../layouts/post.layout.astro"
title: "REST API Learning Notes"
date: "2024-02-10 06:29:00"
description: "Master the art of Regular Expressions (Regex) with in-depth learning notes on Dav/Devs tech blog. Uncover essential links, explore date patterns, dive into number validations, and unravel word-based regex for precise text matching. Elevate your regex skills with practical examples and valuable insights."
keywords: "Regex Learning, Regular Expressions, Regex Tutorial, Regex Debugger, Regex Patterns, Date Patterns in Regex, Number Validation in Regex, Hex Colour Regex, UUID Regex, Word-based Regex, Bible Verse Matching, Regex Examples, Regex Flowchart, Debuggex, Regex Mastery, Dav/Devs Tech Blog, Tech Learning Notes."
images:
  [{ url: "rest-api-learning-notes-0001.png", alt: "REST API Learning Notes" }]
---

## REST API Architecture

![REST API Architecture](/screenshots/posts/rest-api-learning-notes-0002.png)

| HTTP Verb | Entire Collection (Example: customers)                                                      | Specific Item (Example: customer/[id])                                        |
| --------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| GET       | 200 (Ok), list of customers. Use pagination, sorting and filtering to navigate big lists.   | 200 (Ok) single customer. 404 (Not Found), if ID is not found or invalid.     |
| PUT/PATCH | 404 (Not Founc), unless you want to update/replace every resource in the entire collection. | 200 (Ok) or 204 (No Content). 404 (Not Found), if ID is not found or invalid. |
| POST      | 201 (Created). "Location" header with link to /customer/[id] containing new ID.             | 404 (Not Found).                                                              |
| DELETE    | 404 (Not Found), unless you want to delete the whole collection&ndash;not often desirable.  | 200 (Ok). 404 (Not Found), if ID is not found or invalid.                     |

## Resource Links

- https://stackoverflow.com/questions/671118/what-exactly-is-restful-programming/671508#671508
- https://stackoverflow.com/questions/28510876/is-my-api-a-restful-api
- https://stackoverflow.com/questions/671118/what-exactly-is-restful-programming/671132#671132
- https://www.restapitutorial.com/lessons/restquicktips.html
