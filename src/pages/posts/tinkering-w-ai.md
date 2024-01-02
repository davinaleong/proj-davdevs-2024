---
layout: "./../../layouts/post.layout.astro"
title: "Tinkering with OpenAI API"
date: "2024-01-02"
description: "Join me as a programmer tinkering with new technologies. Documenting my learning and setup tips for interacting with OpenAI API in JavaScript."
keywords: "OpenAI API, JavaScript tutorial, GitHub Repo, ChatGPT, AI tools, programming journey, code setup, NodeJS project, learning documentation, tinkering tips"
images: [{ url: "tinkering-w-ai-0001.jpg", alt: "Tinkering with OpenAI API" }]
---

As a programmer, I enjoy tinkering with new technologies. While using AI tools, I've yet to interact with AI APIs. But I've set up my project and run simple prompts against the OpenAI API. I'm going to document my learning and set up tips here.

Before that, here's the GitHub Repo: https://github.com/davinaleong/proj-small-projects. Scripts to be concerned are openai and generator.

## Learning notes

ChatGPT, Bard, and GitHub Copilot kept giving incorrect code. So, I watched a YouTube video to get my script working.

## Tutorial

> Note: this tutorial is in JavaScript.

### OpenAI

Create an account with OpenAI and log in.
On the screen to select "ChatGPT" and "API", click on "API".
Generate an API key. The instructions are self-explanatory. Remember to copy the key.

### Project

Setup a bare-bones NodeJS project with environment variables. The NPM packages you need are dotenv and openai. Remember to add your OpenAI API key to your .env file.
Create an index.js file and paste the following code:

```javascript
const dotenv = require("dotenv").config()
const OpenAI = require("openai")

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

async function main(prompt) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: prompt }],
    model: "gpt-3.5-turbo",
  })

  console.log(completion.choices[0])
}

main("Tell me a joke.")
```

Open the terminal and run `node index`.

Sample output:

```bash
{
  index: 0,
  message: {
    role: 'assistant',
    content: "Why don't scientists trust atoms?\nBecause they make up everything!"
  },
  logprobs: null,
  finish_reason: 'stop'
}
```

Your output may vary. Change the prompt to get a different response.

Happy tinkering! 🛠️ 💻😁
