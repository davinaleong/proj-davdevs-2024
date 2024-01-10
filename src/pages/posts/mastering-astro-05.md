---
layout: "./../../layouts/post.layout.astro"
title: "Mastering Astro #5: Beautifying the Listing Page"
date: "2024-10-01 17:00:00"
description: "Elevate your Astro project's aesthetics with this styling tutorial. Dive into spacing utilities and color setup using CSS custom properties. Follow the step-by-step guide to enhance your project's visual appeal effortlessly."
keywords: "Mastering Astro, Astro Tutorial, Styling Essentials, CSS Setup, Spacing Utilities, Color Setup, CSS Custom Properties, Web Development, Tutorial Series, Visual Appeal"
images:
  [
    {
      url: "mastering-astro-0005.png",
      alt: "Mastering Astro #5: Beautifying the Listing Page",
    },
  ]
---

Now we're at the fun part&ndash;beautifying the listing page.

Before we style our page, it's important to have an idea of how the layout will look like. For simplicity we'll go with a grid layout like this:

| Moblie                                                            | Desktop                                                            |
| ----------------------------------------------------------------- | ------------------------------------------------------------------ |
| ![Mockup - Mobile](/screenshots/posts/mastering-astro-0005-a.png) | ![Mockup - Desktop](/screenshots/posts/mastering-astro-0005-b.png) |

Let's start coding. Make sure that your website is running on your browser.

Before we can see our styles, we need to link it to our page.

Open `index.astro` file in **VS Code**.

Paste these lines of code between the `---`.

```js
import "../styles/reset.css"
import "../styles/main.css"
```

If done right, your website should have a _serif_ font.

Next, we'll work on the overall styles. We do this by styling the `body` element.

```css
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: var(--step-0);
  line-height: 1.5;
  color: black;
  background-color: var(--clr-yellow);
}
```

Let's also make the links look nicer.

```css
a {
  color: var(--clr-green);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

Now, let's add some classes to our `HTML` like so:

```html
<header class="primary-header">
  <h1 class="primary-header__heading">My Favourite Food</h1>

  <a href="/">Home</a>
</header>

<main class="main-primary">
  <a class="card">
    <div class="card__images">
      <img src="/src/assets/images/apple-pie-0001.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0002.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0003.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0004.jpg" alt="" srcset="" />
    </div>

    <div class="flow">
      <h2 class="card__heading">Post Title</h2>

      <p>Rating: 5</p>
      <p>Location: Bedok, Singapore</p>
    </div>
  </a>

  <a class="card">
    <div class="card__images">
      <img src="/src/assets/images/apple-pie-0001.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0002.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0003.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0004.jpg" alt="" srcset="" />
    </div>

    <div class="flow">
      <h2 class="card__heading">Post Title</h2>

      <p>Rating: 5</p>
      <p>Location: Bedok, Singapore</p>
    </div>
  </a>

  <a class="card">
    <div class="card__images">
      <img src="/src/assets/images/apple-pie-0001.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0002.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0003.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0004.jpg" alt="" srcset="" />
    </div>

    <div class="flow">
      <h2 class="card__heading">Post Title</h2>

      <p>Rating: 5</p>
      <p>Location: Bedok, Singapore</p>
    </div>
  </a>
</main>

<footer class="primary-footer">
  <p class="primary-footer__content">
    My Favourite Food &copy; Davina Leong, 2024
  </p>
</footer>
```

Our strategy for tackling this is header, footer, main, and card.

### 1. Header

We'll use Flexbox to make the layout of our header. This allows us to put the title and home link on the same line.

```css
.primary-header {
  padding: var(--space-s);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--clr-orange);
}

.primary-header__heading {
  font-size: var(--step-3);
  font-weight: 700;
  color: var(--clr-green);
}
```

#### Advanced: Keep Header at the Top of the Page (Optional)

Update the code as such

```css
body {
  ...
  position: relative;
}

...

.primary-header {
  ...
  position: sticky;
  top: 0;
  z-index: 1;
}
```
