---
layout: "./../../layouts/post.layout.astro"
title: "Delving into AI"
date: "2022-12-29"
description: "Explore my AI journey, coding solutions, and insights into tools like ChatGPT, Grammarly, Bard, GitHub Copilot, and Adobe Firefly. Discover how AI enhances productivity and the nuances of each tool. Dive into the world of creativity and efficiency with AI, demystifying its role in my experiences and experiments."
keywords: "AI, Coding, Productivity, ChatGPT, Grammarly, Bard, GitHub Copilot, Adobe Firefly, Tinkering, Creative Writing, Tech Tools, Insights"
images: [{ url: "ai-0001.png", alt: "Delving into AI" }]
---

I want to list my experiences and tinkering with AI. Personally, I’m not threatened by AI taking over our jobs. I just see them as tools to enhance my productivity. For example, I had to come up with a solution for a duplicate paragraph scanner. While I used AI to generate the code, I had to think to stitch several code snippets together. The most AI can do is give you what it already knows. It cannot give originality, though it can give the illusion of it.

Let me give my observations on the different AI tools I’ve been using. Please don’t take my word for it and try these tools out yourself so that you can make your own judgements.

## ChatGPT

This tool doesn’t need any introduction. I think most who’ve heard of AI would’ve heard of this. It’s made by OpenAI whom Microsoft a major investor (not owner) is. Where ChatGPT shines is in creative writing. I’ve been using it to generate synopsis and keywords for my articles.

## Grammarly

If you surf YouTube often, you’ll see many ads on this. I gave it a try and it’s great at correcting spelling mistakes, grammar and vocabulary in my articles. It even offers writing suggestions for the paid version.

## ChatGPT vs Grammarly

I prefer Grammarly to ChatGPT when writing articles because Grammarly keeps their tone. ChatGPT will rewrite the article in its own tone and lose my voice. Even when I try to give it more precise prompts, it was still unable to maintain the original tone. Maybe I just need better prompts? Anyway, like I said, I use ChatGPT to generate a synopsis, keywords, and even titles for my articles.

## Bard

Bard is Google’s answer to ChatGPT. Though I’m a developer, I don’t care about what models they use. I care about whether they suit my needs. I use Bard when I need to do research or make comparisons.

## ChatGPT vs Bard

ChatGPT tends to be more creative while Bard tends to be more accurate. It makes sense since Bard will have access to Google’s search data. I tested both by giving them the same prompt: “What are the latest Pokémon games?” For the answer, I used serebii.net as a reference. I’m looking for Pokémon Scarlett and Violet plus expansion. ChatGPT listed Pokémon Brilliant Diamond and Shining Pearl while Bard listed Pokémon Scarlet and Violet (with The Hidden Treasure of Area Zero expansion) and 2 other games. This proves that Bard is more accurate. ChatGPT itself mentioned “As of my last knowledge update in January 2022…” meaning it’s data it only accurate till 2022. But I find ChatGPT better at creative writing. ChatGPT also tends to be more informal and friendlier, while Bard can sound monotonous.

## GitHub Copilot

This is a completely different tool from those listed above. This tool is aimed at programmers. It’s very useful for code suggestions and fixing errors. However, not all its suggestions are accurate. It kept giving me broken code when I was trying to connect to OpenAI API. Eventually, I had to watch a video on YouTube to get it working. But it has been helpful in completing repeated code.

## Adobe Firefly

This is an image-generation AI. I couldn’t figure out how to use midjourney, so I decided to try out Adobe Firefly instead. I’ve been playing around with it and it was simple to use. But I haven’t found a use case for this yet.

One thing I noticed about AI is you need to know what you want to get the most out of them. If you give vague prompts, you will get vague responses. So, you need to be specific. Or start with a generic one and find words to fine tune your prompts so you get the response you want.
Here’s my sample prompt to ChatGPT for generating a title:

--- START CONVERATION ---

> Prompt: Generate a title for _this article content_.
>
> Response: "Exploring the Intersection of Creativity and AI: Unveiling My Journey in Tinkering, Coding, and Observations on AI Tools"
>
> Observation: response is too flowery.

> Prompt: Make the tone neutral and techy.
>
> Response: "AI Tinkering Chronicles: Navigating Duplicate Paragraph Scanners and Evaluating AI Tools for Productivity Enhancement"
>
> Observation: response is too long.

> Prompt: Make it more concise.
>
> Response: "AI Tinkering: Coding Solutions, Evaluating Tools for Productivity"
>
> Observation: still too long.

> Prompt: Limit to 5 words.
>
> Response: "AI Tinkering, Coding, Productivity Evaluation"

--- END CONVERSATION ---
