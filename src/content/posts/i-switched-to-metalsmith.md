---
title: I switched to Metalsmith
publishedDate: 2015-12-31
author: Eric Miller
template: post.hbs
---

To kick off the new year right I wanted to do one post in 2015. I figured why not do something that's fresh in my mind. I just switched this website to <a href="http://metalsmith.io" target="_blank">Metalsmith</a>, it's anything you want it to be, I chose to use it to build a static site generator. Let's walkthrough and see how I set it up, if you have any feedback on my build script please let me know in the comments!

First and foremost we'll walk through installing <a href="http://metalsmith.io" target="_blank">Metalsmith</a>.

```js
mkdir your-project
cd your-project
npm init

```

Walk through the npm initialization process. Once that's done we can begin.

```js
npm install --save-dev metalsmith
```
