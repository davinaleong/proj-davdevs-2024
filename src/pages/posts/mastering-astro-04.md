---
layout: "./../../layouts/post.layout.astro"
title: "Mastering Astro #4: Styles Setup"
date: "2024-10-01 16:10:00"
description: "Elevate your Astro project's aesthetics with this styling tutorial. Dive into spacing utilities and color setup using CSS custom properties. Follow the step-by-step guide to enhance your project's visual appeal effortlessly."
keywords: "Mastering Astro, Astro Tutorial, Styling Essentials, CSS Setup, Spacing Utilities, Color Setup, CSS Custom Properties, Web Development, Tutorial Series, Visual Appeal"
images:
  [{ url: "mastering-astro-0004.png", alt: "Mastering Astro #4: Styles Setup" }]
---

In this tutorial, we'll set up the structure of our styles. This requires basic knowledge of `CSS`.

### Reset

We reset the `CSS` to override the web browser's default styles to maintain a consistent look and feel across browsers.

Under the `/styles` folder, create a CSS file and name it `reset.css`.

Go to [CSS Tools: Reset CSS](https://meyerweb.com/eric/tools/css/reset/), copy all the code in light-brown box, and paste it into the `reset.css` file.

> **Tip:** The keyboard shortcut to copy text in Windows is `[Ctrl + C]`, and to paste is `[Ctrl + V]`.

Make sure to save `reset.css`.

> **Tip:** The keyboard shortcut to save in Windows is `[Ctrl + S]`.

We won't be touching this file any longer.

### Main

#### A. Create

Create a new file under `/styles` and name it `main.css`.<br>
This file contains the bulk of our `CSS` code. We will be modifying this file frequently. So remember to keep it tidy.

#### B. Spacers

Go to [Utopia](https://utopia.fyi/) and click on “Type”.<br>
In the blue-gray box, copy every thing from the line `:root {` to `}`.<br>
Paste it into the `main.css` file.

Next, go to "Space".<br>
Only copy the `--space-*` code.

If done correctly, your `main.css` should look like this:

```css
:root {
  --step--2: clamp(0.7813rem, 0.7747rem + 0.0326vw, 0.8rem);
  --step--1: clamp(0.9375rem, 0.9158rem + 0.1087vw, 1rem);
  --step-0: clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem);
  --step-1: clamp(1.35rem, 1.2761rem + 0.3696vw, 1.5625rem);
  --step-2: clamp(1.62rem, 1.5041rem + 0.5793vw, 1.9531rem);
  --step-3: clamp(1.9438rem, 1.7707rem + 0.8652vw, 2.4413rem);
  --step-4: clamp(2.3325rem, 2.0823rem + 1.2511vw, 3.0519rem);
  --step-5: clamp(2.7994rem, 2.4461rem + 1.7663vw, 3.815rem);

  --space-3xs: clamp(0.3125rem, 0.3125rem + 0vw, 0.3125rem);
  --space-2xs: clamp(0.5625rem, 0.5408rem + 0.1087vw, 0.625rem);
  --space-xs: clamp(0.875rem, 0.8533rem + 0.1087vw, 0.9375rem);
  --space-s: clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem);
  --space-m: clamp(1.6875rem, 1.6223rem + 0.3261vw, 1.875rem);
  --space-l: clamp(2.25rem, 2.163rem + 0.4348vw, 2.5rem);
  --space-xl: clamp(3.375rem, 3.2446rem + 0.6522vw, 3.75rem);
  --space-2xl: clamp(4.5rem, 4.3261rem + 0.8696vw, 5rem);
  --space-3xl: clamp(6.75rem, 6.4891rem + 1.3043vw, 7.5rem);
}
```

We've given us some spacing utilities here, so we don't need to figure them out ourselves.

#### C. Colours

Next, let's set up the colour utilities.

Go to [Color Hunt](https://colorhunt.co/) and pick a palette you like. I chose this:

![Chosen Colour Palette](/screenshots/posts/mastering-astro-0004-b.png)

Click on the `rgb(xxx, xxx, xxx)` to copy the colour code. And paste it into the `root` block of the `main.css` like this:

```css
:root {
  --step--2: clamp(0.7813rem, 0.7747rem + 0.0326vw, 0.8rem);
  --step--1: clamp(0.9375rem, 0.9158rem + 0.1087vw, 1rem);
  --step-0: clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem);
  --step-1: clamp(1.35rem, 1.2761rem + 0.3696vw, 1.5625rem);
  --step-2: clamp(1.62rem, 1.5041rem + 0.5793vw, 1.9531rem);
  --step-3: clamp(1.9438rem, 1.7707rem + 0.8652vw, 2.4413rem);
  --step-4: clamp(2.3325rem, 2.0823rem + 1.2511vw, 3.0519rem);
  --step-5: clamp(2.7994rem, 2.4461rem + 1.7663vw, 3.815rem);

  --space-3xs: clamp(0.3125rem, 0.3125rem + 0vw, 0.3125rem);
  --space-2xs: clamp(0.5625rem, 0.5408rem + 0.1087vw, 0.625rem);
  --space-xs: clamp(0.875rem, 0.8533rem + 0.1087vw, 0.9375rem);
  --space-s: clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem);
  --space-m: clamp(1.6875rem, 1.6223rem + 0.3261vw, 1.875rem);
  --space-l: clamp(2.25rem, 2.163rem + 0.4348vw, 2.5rem);
  --space-xl: clamp(3.375rem, 3.2446rem + 0.6522vw, 3.75rem);
  --space-2xl: clamp(4.5rem, 4.3261rem + 0.8696vw, 5rem);
  --space-3xl: clamp(6.75rem, 6.4891rem + 1.3043vw, 7.5rem);

  --clr-yellow: rgb(250, 239, 155);
  --clr-orange: rgb(246, 215, 118);
  --clr-teal: rgb(109, 164, 170);
  --clr-green: rgb(100, 125, 135);
}
```

Name the colours accordingly and make sure they are unique.

> **Tip:** The naming convention in `CSS` is dash-separated or _kebab-case_.<br>
> You can read it here: [Kebab case](https://www.theserverside.com/definition/Kebab-case).

Remember to save the file!

What we did was declare some variables (proper term: CSS custom properties) to use in our project. Doing this saves us the hassle of changing code at multiple places if we want to make adjustments.

This concludes the boring part. In the following tutorial, we'll have some fun styling our template.

#### D: Bonus (Optional)

Here's a bonus task for those up for the challenge. Let's create tints so that we have variations of the colours.

Hover on the swatch in your **VS Code** until a colour dialogue appears.

Click on the `rgb(xxx, xxx, xxx)` until it changes to `hsl(xxx, xxx, xxx)`. This converts the color to `HSL` format. Do the same for the other 3 colours.

Your code should look like this:

```css
:root {
  --step--2: clamp(0.7813rem, 0.7747rem + 0.0326vw, 0.8rem);
  --step--1: clamp(0.9375rem, 0.9158rem + 0.1087vw, 1rem);
  --step-0: clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem);
  --step-1: clamp(1.35rem, 1.2761rem + 0.3696vw, 1.5625rem);
  --step-2: clamp(1.62rem, 1.5041rem + 0.5793vw, 1.9531rem);
  --step-3: clamp(1.9438rem, 1.7707rem + 0.8652vw, 2.4413rem);
  --step-4: clamp(2.3325rem, 2.0823rem + 1.2511vw, 3.0519rem);
  --step-5: clamp(2.7994rem, 2.4461rem + 1.7663vw, 3.815rem);

  --space-3xs: clamp(0.3125rem, 0.3125rem + 0vw, 0.3125rem);
  --space-2xs: clamp(0.5625rem, 0.5408rem + 0.1087vw, 0.625rem);
  --space-xs: clamp(0.875rem, 0.8533rem + 0.1087vw, 0.9375rem);
  --space-s: clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem);
  --space-m: clamp(1.6875rem, 1.6223rem + 0.3261vw, 1.875rem);
  --space-l: clamp(2.25rem, 2.163rem + 0.4348vw, 2.5rem);
  --space-xl: clamp(3.375rem, 3.2446rem + 0.6522vw, 3.75rem);
  --space-2xl: clamp(4.5rem, 4.3261rem + 0.8696vw, 5rem);
  --space-3xl: clamp(6.75rem, 6.4891rem + 1.3043vw, 7.5rem);

  --clr-yellow: hsl(53, 90%, 79%);
  --clr-orange: hsl(45, 88%, 71%);
  --clr-teal: hsl(186, 26%, 55%);
  --clr-green: hsl(197, 15%, 46%);
}
```

Now, let's make the tints. We will use the percentage value for this.

Naming convention:

- Start at 100.
- Increase by 100 for every 10%.
- So 9x% - 100, 8x% - 200, etc.
- So 100 is the lightest, and 1000 is the darkest tint.

Using the yellow as an example, your code should look like this:

```css
:root {
  --step--2: clamp(0.7813rem, 0.7747rem + 0.0326vw, 0.8rem);
  --step--1: clamp(0.9375rem, 0.9158rem + 0.1087vw, 1rem);
  --step-0: clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem);
  --step-1: clamp(1.35rem, 1.2761rem + 0.3696vw, 1.5625rem);
  --step-2: clamp(1.62rem, 1.5041rem + 0.5793vw, 1.9531rem);
  --step-3: clamp(1.9438rem, 1.7707rem + 0.8652vw, 2.4413rem);
  --step-4: clamp(2.3325rem, 2.0823rem + 1.2511vw, 3.0519rem);
  --step-5: clamp(2.7994rem, 2.4461rem + 1.7663vw, 3.815rem);

  --space-3xs: clamp(0.3125rem, 0.3125rem + 0vw, 0.3125rem);
  --space-2xs: clamp(0.5625rem, 0.5408rem + 0.1087vw, 0.625rem);
  --space-xs: clamp(0.875rem, 0.8533rem + 0.1087vw, 0.9375rem);
  --space-s: clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem);
  --space-m: clamp(1.6875rem, 1.6223rem + 0.3261vw, 1.875rem);
  --space-l: clamp(2.25rem, 2.163rem + 0.4348vw, 2.5rem);
  --space-xl: clamp(3.375rem, 3.2446rem + 0.6522vw, 3.75rem);
  --space-2xl: clamp(4.5rem, 4.3261rem + 0.8696vw, 5rem);
  --space-3xl: clamp(6.75rem, 6.4891rem + 1.3043vw, 7.5rem);

  --clr-yellow-100: hsl(53, 90%, 99%);
  --clr-yellow-200: hsl(53, 90%, 89%);
  --clr-yellow-300: hsl(53, 90%, 79%);
  --clr-yellow-400: hsl(53, 90%, 69%);
  --clr-yellow-500: hsl(53, 90%, 59%);
  --clr-yellow-600: hsl(53, 90%, 49%);
  --clr-yellow-700: hsl(53, 90%, 39%);
  --clr-yellow-800: hsl(53, 90%, 29%);
  --clr-yellow-900: hsl(53, 90%, 19%);
  --clr-yellow-1000: hsl(53, 90%, 9%);

  --clr-orange: hsl(45, 88%, 71%);
  --clr-teal: hsl(186, 26%, 55%);
  --clr-green: hsl(197, 15%, 46%);
}
```

Repeat for the other 3 colours.
