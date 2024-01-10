---
layout: "./../../layouts/post.layout.astro"
title: "Mastering Astro #6: Style Listing Content"
date: "2024-10-01 20:00:00"
description: "Continue your journey in mastering Astro by enhancing the styling of your listing page. Learn how to create a responsive grid layout for your cards, style the card elements, and make your images look visually appealing. Explore techniques to improve code organization and prepare for the next step—splitting your HTML code into reusable components."
keywords: "Mastering Astro, Astro Tutorial, Web Development, Styling, Grid Layout, Responsive Design, CSS, Card Styling, Image Grid, Code Organization, HTML Components"
images:
  [
    {
      url: "mastering-astro-0006.png",
      alt: "Mastering Astro #6: Style Listing Content",
    },
  ]
---

Let's continue styling the listing page.

First, add the header height and footer to the `root` block as custom properties.

```css
--primary-header-height: 8rem;
--primary-footer-height: 5.5rem;
```

We'll use them like this to make the main span the whole website length.

```css
.main-primary {
  --_main-primary-space: var(--space-m);

  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: var(--_main-primary-space);
  padding: var(--_main-primary-space);
  min-height: calc(
    100vh - var(--primary-header-height) - var(--primary-footer-height)
  );
}
```

This will put our cards in a grid layout.

Next, let's work on the _card_ class.

```css
.card {
  padding: var(--space-s);
  background-color: var(--clr-accent-2);
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
}

a.card {
  color: black;
}

a.card:hover {
  text-decoration: none;
}
```

This is the code for the image grid:

```css
.card__images {
  --_card-images-space: 0.1em;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: var(--_card-images-space);
  padding: var(--_card-images-space);
  background-color: white;
}

img {
  display: block;
  max-width: 100%;
}
```

Here are the styles of the card content:

```css
.flow > * + * {
  margin-top: var(--space-s);
}

.card__heading {
  font-size: var(--step-2);
  font-weight: 700;
}
```

The end result should look like this:

![End Result](/screenshots/posts/mastering-astro-0006-a.png)

The following tutorial will split our `HTML` code into reusable components.
