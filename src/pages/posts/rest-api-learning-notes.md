---
layout: "./../../layouts/post.layout.astro"
title: "REST API Learning Notes"
date: "2024-02-10 06:29:00"
description: "Dive into the intricacies of REST API Architecture with comprehensive learning notes on Dav/Devs tech blog. Explore HTTP verbs, status codes, and resource links for crafting efficient and RESTful APIs. Enhance your understanding of REST principles and best practices through practical examples and valuable insights."
keywords: "REST API Learning, RESTful Architecture, HTTP Verbs, Status Codes, Resource Links, REST API Best Practices, API Design, RESTful Programming, REST API Tutorial, REST Quick Tips, Dav/Devs Tech Blog, API Learning Notes, RESTful Principles, API Development, HTTP Methods, REST API Status Codes."
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
