---
title: Regex for all your needs
publishedDate: 2015-07-27
author: Eric Miller
template: post.hbs
keywords: EastOh.co, East Oh Co, East Oh, Contactr.io, Regex, AngularJS
description: I like you don't have regex memorized or really even learned. It's a hard concept to grasp, and if you're anything like me you always, always, always end up looking up stackoverflow posts for the correct one to use.
---
I like you don't have regex memorized or really even learned. It's a hard concept to grasp, and if you're anything like me you always, always, always end up looking up stackoverflow posts for the correct one to use. I just recently found [this post](http://www.geekgumbo.com/2013/03/16/regular-expression-quick-look-up/) listing a bunch of really useful expressions. 

To save myself the headache I'm going to also post some here that I use frequently with an AngularJS example.

Enjoy.

#### Email
This is probably the least accurate one on the list. To truly validate an email address you'd have to go through much more trouble. This expression basically just checks that they have a string, then @, then another string, then '.', then another string.
```js
var pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
```
<iframe height='268' scrolling='no' src='//codepen.io/_ericmiller/embed/WvYNyg/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;margin-top:20px;'>See the Pen <a href='http://codepen.io/_ericmiller/pen/WvYNyg/'>Email Address</a> by Eric (<a href='http://codepen.io/_ericmiller'>@_ericmiller</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

#### Secure Password ex: Thisismy1password!
```js
var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
```
<iframe height='268' scrolling='no' src='//codepen.io/_ericmiller/embed/aOQbYO/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;margin-top:20px;'>See the Pen <a href='http://codepen.io/_ericmiller/pen/aOQbYO/'>Secure Password</a> by Eric (<a href='http://codepen.io/_ericmiller'>@_ericmiller</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

#### US Zip Code
```js
var pattern = /^[0-9]{5}(?:-[0-9]{4})?$/;
```
<iframe height='268' scrolling='no' src='//codepen.io/_ericmiller/embed/GJwRZr/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;margin-top:20px;'>See the Pen <a href='http://codepen.io/_ericmiller/pen/GJwRZr/'>Regex US ZipCode</a> by Eric (<a href='http://codepen.io/_ericmiller'>@_ericmiller</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

#### US Phone Number ex: (123) 123-1234
```js
var pattern = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
```
<iframe height='268' scrolling='no' src='//codepen.io/_ericmiller/embed/PqxoJJ/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;margin-top:20px;'>See the Pen <a href='http://codepen.io/_ericmiller/pen/PqxoJJ/'>US Phone Number</a> by Eric (<a href='http://codepen.io/_ericmiller'>@_ericmiller</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>


If you see any that could be done better or be a bit more lenient please let me know!