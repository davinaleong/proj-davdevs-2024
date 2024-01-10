---
layout: "./../../layouts/post.layout.astro"
title: "Mastering Astro #5: Beautifying Body, Header & Footer"
date: "2024-10-01 17:00:00"
description: "Dive into the fun part of your Astro project by beautifying the listing page. Create a grid layout for mobile and desktop views, and follow a step-by-step guide to code the body, header, and footer styles. Learn how to enhance your layout and make code reusable for a more efficient development process."
keywords: "Mastering Astro, Astro Tutorial, Web Development, Styling Essentials, CSS, Header Styling, Footer Styling, Responsive Design, Grid Layout"
images:
  [
    {
      url: "mastering-astro-0005.png",
      alt: "Mastering Astro #5: Beautifying Body, Header & Footer",
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
  background-color: var(--clr-secondary);
}
```

Let's also make the links look nicer.

```css
a {
  color: var(--clr-primary);
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

We'll use Flexbox to make the layout of our header.

Notice how we're using the CSS properties we declared earlier? The allows us to reuse our code. And if we want to change the theme, we just have to modify the custom properties in the `root` block.

```css
.primary-header {
  padding: var(--space-s);
  display: flex;
  align-items: center;
  gap: var(--space-s);
  justify-content: space-between;
  background-color: var(--clr-accent-2);
}

.primary-header__heading {
  font-size: var(--step-3);
  font-weight: 700;
  color: var(--clr-primary);
}
```

Go to your web browser. You should see the heading and "Home" link side by side.

#### Advanced: Keep Header at the Top of the Page (Optional)

If you are up for the challenge, let's try to make the header stick to the top.

Update the code as such:

```css
body {
  /* ... truncated code */
  position: relative;
}

/* ... truncated code */

.primary-header {
  /* ... truncated code */
  position: sticky;
  top: 0;
  z-index: 1;
}
```

Go to your web browser. You should see the header staying at the top when you scroll down.

#### Advanced: Make Code Reusable (Optional)

Notice that we're using the same CSS property for the padding and gap for the `.primary-header` block.

Let's make it so we don't repeat ourself.

```css
.primary-header {
  --_primary-header-space: var(--space-s);

  padding: var(--_primary-header-space);
  display: flex;
  align-items: center;
  gap: var(--_primary-header-space);
  justify-content: space-between;
  background-color: var(--clr-accent-2);
  position: sticky;
  top: 0;
}
```

This doesn't do anything visually, but improves our code style.

### 2. Footer

Next, let's style the footer.

These are my styles:

```css
.primary-footer {
  padding: var(--space-s);
}

.primary-footer__content {
  text-align: center;
  font-size: var(--step--1);
  font-style: italic;
}
```

Go to your browser to see its effect.

This concludes this tutorial. We will style the main section in the next tutorial.
