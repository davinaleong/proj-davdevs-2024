---
layout: "./../../layouts/post.layout.astro"
title: "Mastering Astro #3: Details Page"
date: "2024-01-10 16:00:00"
description: "Excerpt: Dive into coding with this tutorial series! Learn to create an HTML template for a food blog using Astro. Follow steps in VS Code, adjust folder structure, and enhance your site with CSS in upcoming tutorials."
keywords: "Mastering Astro, Astro Tutorial, Astro, HTML, CSS, VS Code, Web Development, Food Blog, Images, Folder Structure, Pexels, Unsplash"
images:
  [{ url: "mastering-astro-0003.png", alt: "Mastering Astro #3: Details Page" }]
---

Let's get started on some coding! We'll build the `HTML` template in this part of the series. It will look ugly initially, and we will use `CSS` to make it look good.

Open your project in **VS Code**.

Open the **VS Code Terminal** by clicking on the menu item at the top.

> **Tip:** keyboard shortcut for this is `[Cntrl + (Tilde)]`. It's the key on the left of the "1" key.

Run the following command:

```bash
npm run dev
```

Note the **output** in the terminal. Hold [Cntrl] and click on http://localhost:4321/.<br>
This will open the Astro site in the web browser

> **Tip:** Open the `package.json` file.<br>
> The `scripts` section lists the scripts you can run.<br>
> Command format: npm run `<script_name>`

We're going to build a food blog. So, gather some photos of your favourite food. 3 posts with 4 pictures each.

> **Tip:** You take free images from [Pexels](https://www.pexels.com/) or [Unsplash](https://unsplash.com/).

> **Tip:** I recommend naming your images like so: `dashed-post-name-1.jpg`<br>
> So if your post is "Hokkien Mee", then name your images like this: hokkien-mee-1.jpg, hokkien-mee-2.jpg, etc.

Open up `index.astro`. This requires some basic knowledge of `HTML`.

Change the `title` to whatever you want. I'm going to use "My Favourite Food".

Replace the `body` with the following code. Change `apple-pie-xxxx.jpg` to your image names. Go to your browser to see if everything's working fine. Don't worry if it looks terrible. We'll fix it in the following tutorial.

```html
<header>
  <h1>My Favourite Food</h1>

  <a href="/">Home</a>
</header>

<main>
  <a>
    <div>
      <img src="/src/assets/images/apple-pie-0001.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0002.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0003.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0004.jpg" alt="" srcset="" />
    </div>

    <div>
      <h2 class="card__heading">Post Title</h2>

      <p>Rating: 5</p>
      <p>Location: Bedok, Singapore</p>
    </div>
  </a>

  <a>
    <div>
      <img src="/src/assets/images/apple-pie-0001.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0002.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0003.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0004.jpg" alt="" srcset="" />
    </div>

    <div>
      <h2 class="card__heading">Post Title</h2>

      <p>Rating: 5</p>
      <p>Location: Bedok, Singapore</p>
    </div>
  </a>

  <a>
    <div>
      <img src="/src/assets/images/apple-pie-0001.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0002.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0003.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0004.jpg" alt="" srcset="" />
    </div>

    <div>
      <h2 class="card__heading">Post Title</h2>

      <p>Rating: 5</p>
      <p>Location: Bedok, Singapore</p>
    </div>
  </a>

  <a>
    <div>
      <img src="/src/assets/images/apple-pie-0001.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0002.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0003.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0004.jpg" alt="" srcset="" />
    </div>

    <div>
      <h2 class="card__heading">Post Title</h2>

      <p>Rating: 5</p>
      <p>Location: Bedok, Singapore</p>
    </div>
  </a>

  <a>
    <div>
      <img src="/src/assets/images/apple-pie-0001.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0002.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0003.jpg" alt="" srcset="" />
      <img src="/src/assets/images/apple-pie-0004.jpg" alt="" srcset="" />
    </div>

    <div>
      <h2 class="card__heading">Post Title</h2>

      <p>Rating: 5</p>
      <p>Location: Bedok, Singapore</p>
    </div>
  </a>
</main>

<footer>
  <p>My Favourite Food &copy; Davina Leong, 2024</p>
</footer>
```
