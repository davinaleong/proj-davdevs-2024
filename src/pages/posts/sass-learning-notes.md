---
layout: "./../../layouts/post.layout.astro"
title: "SASS Learning Notes"
date: "2024-02-10 11:03:00"
description: "Accelerate your Ionic learning journey with insightful notes on essential links, common commands, and practical snippets. Explore Ionic Icons integration, master common commands for project creation and development, and troubleshoot issues like Ionic Page Generation errors or playing audio in Ionic. Enhance your Ionic skills with this comprehensive guide, offering solutions and tips for efficient development."
keywords: "Ionic Learning, Ionic Tutorial, Ionic Commands, Ionic Icons, Ionic Snippets, Ionic Solutions, Ionic Page Generation, Ionic Audio, Ionic Troubleshooting, Ionic Project Creation, Ionic Development, Cordova Integration, Ionic Configurations, Dav/Devs Tech Blog, Mobile App Development, Hybrid App Development, Ionic Framework."
images: [{ url: "sass-learning-notes-0001.png", alt: "SASS Learning Notes" }]
---

## 1. Links

Ionic Icons: https://ionicframework.com/docs/v2/ionicons

## 2. Common Commands

| Command                      | What it does?                  |
| ---------------------------- | ------------------------------ |
| `ionic start --v2`           | Creates a new Ionic 2 project  |
| `ionic serve`                | Launch app in browser          |
| `ionic generate page <page>` | Generates an Ionic <page> page |

## 3. Snippets and Solutions

### 3.1 Fix to Ionic Page Generation Error

Link to solution:

https://stackoverflow.com/questions/44620882/ionic-error-generators-are-only-available-for-ionic-2-projects

1. Open the ionic.config.json file.
1. Copy &amp; paste these lines:

   ```
   "typescript": true,
   "v2": true
   ```

1. Save and re-run the generate page command.

### 3.2. Play Audio on in Ionic

Install necessary plugins

https://stackoverflow.com/questions/43279411/ionic-2-how-to-play-sound-effects

Testing in browser with cordova

https://stackoverflow.com/questions/40815183/ionic-2-cordova-is-not-available-make-sure-to-include-cordova-js-or-run-in-a-d

Install the browser platform for cordova to load cordova plugins.

```bash
cordova platform add browser
```

Run the Ionic app on the browser platform.

```bash
ionic cordova run browser
```
