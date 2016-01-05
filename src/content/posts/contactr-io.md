---
title: contactr.io
publishedDate: 2016-01-04
author: Eric Miller
template: post.hbs
keywords: EastOh.co, East Oh Co, East Oh, Metalsmith, web, development, static, site, generator, new, year
description: To start off the new year right, I soft launched a weekend project!
---

In order to keep my promise to myself, I softed launched something yesterday that I've been working on for the past week or so. Without further adieu I present to you, the internets [contactr.io](https://contactr.io).

It's a small project, but it's a project nonetheless, it has a domain, it's on digital ocean, I'm managing the VPS from [Laravel Forge](https://forge.laravel.com), and it's created using [Laravel](https://laravel.com/) for the backend, and jQuery on the front-end.

### The idea

The idea is simple enough, I need a way to hook up the contact form on this site without a backend. I thought okay, that's a bit challenging, but would definitely be a fun project. That's how [contactr.io](https://contactr.io) was born. 

### Get Started

I think my favorite thing about this project is it's so easy to get started. All you have to do is head over to [https://contactr.io](https://contactr.io) and register, after that verify your email address, login, and create a form. When you create a form you'll be issued a token for that form. From there all you need to do is point you form <strong>action</strong> to <strong>https://contactr.io/{YourToken}</strong>.

### Simple Example

Add in the _human text input that's hidden and you'll have built in spam control.

```html
<form action="https://contactr.io/{YourToken}" method="POST">
    <input type="text" name="_human" style="display: none;">
    <textarea name="body" id="body" placeholder="Message:"></textarea>
    <button type="submit">
        Send Message
    </button>
</form>
```

### Price

For now I'm leaving this project free, I hope to one day monetize it but for now it's free!

#### Free Account Limitations
* 1000 emails per month
* 3 total forms

### That's it!

That's it, if you want to check out a live example head over to the [contact page](/contact) on this site!

If you'd like to try it out yourself go <a href="https://contactr.io/register" target="_blank">register now</a>!