---
title: Flexbox
---

[Back to Lesson Index]({{ site.url }}/web-app/lessons)

## 🎯 Learning Goals

* Explain the difference between a parent and child, and a direct child
* Apply Flexbox to containers to achieve a desired layout

## 📗 Technical Vocabulary

- Child
- Container
- Direct child
- Item
- Parent

## 🌎 What is Flexbox?

Flexbox is a part of CSS that provides a more efficient way to layout, align, and distribute space among items in a container. It helps us when we have those silly block elements that can be hard to do just what we want them to do.

## Flexbox IRL

Flexbox is used _all over_ the internet. It's a little tough to learn, but once you know it, it makes your life a lot easier! That's why it is so popular among front-end developers.

Here are just a few popular pages that use Flexbox:
- <a target="blank" href="https://www.disneyplus.com/">Disney Plus</a> uses Flexbox on the top Navbar of the landing page.
- <a target="blank" href="https://lomotif.com/">Lomotif</a> uses Flexbox to control the content on the right side of the landing page (title, subtitle, and two buttons)
- <a target="blank" href="https://www.theringer.com/">The Ringer</a> uses Flexbox to organize the links in the nav bar at the top of the page. It also uses Flexbox for each "section" of content - usually an image, title, subtitle, author, date, and tag

## Parents and Children

Before we start working with Flexbox, we need to make sure we are referring to elements and their relationship to other elements correctly. We need to be careful about the CSS rules we apply to a _parent_ element vs. those to a _child_ element. A **parent** element wraps other elements, and a **child** is nested inside the parent. We will also refer to parents as **containers**, and children as **items**.

Let's look an some HTML to make sure we are all on the same page:

```html
<section class="container">
  <article class="item-in-container"></article>
  <article class="item-in-container"></article>
  <article class="item-in-container"></article>
</section>
```

In the code above, the `section` is the parent/container, and the 3 `article`s are all children/items because they are directly nested inside of that `section`. Let's look at one more example:

```html
<section class="container">
  <article class="item-in-container">
    <h2>Title of Article 1</h2>
  </article>
  <article class="item-in-container">
    <h2>Title of Article 2</h2>
  </article>
  <article class="item-in-container">
    <h2>Title of Article 3</h2>
  </article>
</section>
```

In the code above, we now have these `h2` elements nested inside of the `article`s. It's important to know that `h2` is **not** a child of the `section`. It is technically a grandchild of the `section`, and a child of `article`. The idea of **direct child** is really important to understand as we work with Flexbox.

<img class="small" src="./assets/parent-container.svg" alt="">
<img class="small" src="./assets/child-item.svg" alt="">
(Graphics from <a target="blank" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" >CSS Tricks</a>)

## Creating a Flex Container

Without Flexbox, 10 colorful `article`s might look like this:

<iframe
  src="https://turn-talk-flexbox-normal.kodewithklossy.repl.co/"
  title="turn-talk-flexbox-normal on Glitch"
  style="height: 420px; width: 100%; border: 0;">
</iframe>

But with Flexbox, we can start having some control over them:

<!-- <div class="glitch-embed-wrap" style="height: 420px; width: 100%; margin-bottom: 24px;"> -->
  <iframe
    src="https://turn-talk-flexbox-applied.kodewithklossy.repl.co"
    title="turn-talk-flexbox-normal on Glitch" style="height: 100%; width: 100%; border: 0;">
  </iframe>
<!-- </div> -->

Open up the Repl.it projects for the two examples above: <a target="blank" href="https://replit.com/@kodewithklossy/turn-talk-flexbox-normal#index.html">Without Flexbox</a> and <a target="blank" href="https://replit.com/@kodewithklossy/turn-talk-flexbox-applied#index.html">With Flexbox</a>.  Explore the CSS for both.

<div class="try-it">
  <h2>🐣 Discuss</h2>
  <p>Looking at the CSS in both examples above, what is the difference between the two CSS files?</p>
  <p>In the CSS file of the turn-talk-flexbox-applied Repl.it project, what element(s) is the declaration <code class="try-it-code">display: flex;</code> applied to? Is that a parent or child?</p>
</div>

Takeaways:
- To use Flexbox, we need a container element with one or more children inside of it
- The declaration `display: flex;` should be on the parent's rule
- The parent won't be affected, but the way the children elements sit inside the parent may change

### Flex helps even things out

Adding `display: flex` to the CSS rule on the parent makes the parent element a flex container and opens up a world of possibilities.

We can apply a width to each item. If all items can fit in the container at that width, that's the width they will be. If the width wouldn't leave enough room for all the items, they will become as wide as they can and remain evenly spaced.

>Fork the <a target="blank" href="https://replit.com/@kodewithklossy/7-flexbox-flex-helps-even-things-out#index.html">Repl.it project</a> exampled below. Change the width of the `article` with the `box` class to several different values and see what happens. Try re-sizing the window - see the difference!

<iframe
  src="https://7-flexbox-flex-helps-even-things-out.kodewithklossy.repl.co"
  title="try-it-flex-even-things-ut on Repl.it"
  style="height: 100%; width: 100%; border: 0;">
</iframe>
<br>

## Justify Content

In professional apps, we typically see white space (margin or padding) used, and the content is centered on the screen. We can use Flexbox to center content. By adding `justify-content: center;`, the items in the container are now centered instead of being crunched up on the left side of the container.

>Fork this <a target="blank" href="https://replit.com/@kodewithklossy/flexbox-justifycontent#index.html">Repl.it project</a> exampled below. On the container's CSS rule, change the code to: `justify-content: space-between;`. What happens? Then, change it to: `justify-content: space-around;`. What is the difference between space-around and space-between?

<iframe
  src="https://flexbox-justifycontent.kodewithklossy.repl.co"
  title="flexbox-justify-content on Repl.it"
  style="height: 100%; width: 100%; border: 0;">
</iframe>
<br>

The `justify-content` property allows us to control how our content sits _in relation to the main axis_ (for now, this means horizontally).

Learn about even more values that we can provide to `justify-content` with <a target="blank" href="https://css-tricks.com/almanac/properties/j/justify-content/">CSS Tricks</a>.

<div class="try-it">
  <h2>Try It: Flexbox Froggy</h2>
  <p>Work your way through Levels 1 - 4 of <a target="blank" href="https://flexboxfroggy.com/">Flexbox Froggy</a>.</p>
</div>

## Align Items

Just like we can control how our content sits _in relation to the main axis_ with `justify-content`, we have a tool to control how our content sits _in relation to the secondary axis_.

>Fork this <a target="blank" href="https://replit.com/@kodewithklossy/7-flexbox-align-items#index.html">Repl.it project</a> exampled below. Try changing the value for `align-items` to `flex-end`, then `flex-start`, and see what happens!

<iframe
  src="https://7-flexbox-align-items.kodewithklossy.repl.co"
  title="flexbox-align-items on Repl.it"
  style="height: 100%; width: 100%; border: 0;">
</iframe>
<br>

<div class="try-it">
  <h2>Try It: Flexbox Froggy</h2>
  <p>Work your way through levels 5 - 7<a target="blank" href="https://flexboxfroggy.com/"> of Flexbox Froggy</a>.</p>
  <p>Make sure to check in with your partner every few levels to see if they need any help!</p>
</div>

## Direction

Another CSS property with Flexbox is `flex-direction`. This property takes one of four values:

- `row` (default): left-to-right
- `row-reverse`: opposite of row; right-to-left
- `column`: same as `row` but top to bottom
- `column-reverse`: same as `column` but bottom to top

The direction of your flex container defines the _main axis_.
<br>
<br>

Here is a visual, created by the amazing <a target="blank" href="https://www.samanthaming.com/">Samantha Ming</a>.

<img class="small" src="./assets/flex-direction.png">

<div class="try-it">
  <h2>Try It: Flex Direction</h2>
  <p>Fork <a target="blank" href="https://replit.com/@kodewithklossy/7-flexbox-try-it-flex-direction#index.html">this Repl.it project</a>.</p>
  <p>On line 12 of the CSS file there is a "____" as the value for the <code class="try-it-code">flex-direction</code> property. One by one, change that out for each of the four properties listed in the visual above. What happens to the 10 items?</p>
  <br>
  <p>Back in <a target="blank" href="https://flexboxfroggy.com/">Flexbox Froggy</a>, work through levels 8 - 13.</p>
</div>

## Wrap

Now, sometimes we don't want _all_ our items on the same row or column. We can use the property `flex-wrap`. It allows items to wrap onto the next line. The three values it takes are:

- `no-wrap` (default): one line, direction is defined by `flex-direction`
- `wrap`: multi-lines, the direction is defined by `flex-direction`
- `wrap-reverse`: multi-lines, opposite to the direction defined by `flex-direction`

<div class="try-it">
  <h2>Try It: Flex Wrap</h2>
  <p>Fork <a target="blank" href="https://replit.com/@kodewithklossy/7-flexbox-try-it-wrap#index.html">this Repl.it project</a>.</p>
  <p>Try changing the values for <code class="try-it-code">flex-wrap</code> to <code class="try-it-code">no-wrap</code>, then <code class="try-it-code">wrap-reverse</code> to observe the affect that property has!</p>
</div>

## Flexbox

There is more to learn about Flexbox, but we can do a lot with what we know. It will take a while to get used to; remember to use your Dev Tools and use that `border` property to help you understand what space each element is taking up.

<div class="practice">
  <h2>Practice: Flexbox</h2>
  <p>Fork <a target="blank" href="https://replit.com/@kodewithklossy/7-flexbox-practice#index.html">this Repl.it project</a>.</p>
  <p>Your job will be to update the CSS (you'll probably need to add some classes on some HTML elements, too!) so the outcome looks like the screen shot below, but <strong>first</strong>, take some time to jot down some notes and talk with a partner about <em>how</em> you will approach this.</p>
  <img src="./assets/direction.png" alt="Final product">
</div>

## More Practice

- <a target="blank" href="https://scrimba.com/g/gflexbox">Scrimba</a> offers a free course that is under an hour long. This might be a great watch if you're struggling to understand Flexbox!
- Finish levels 14 - 24 of <a target="blank" href="https://flexboxfroggy.com/">Flexbox Froggy</a>
- Can't get enough of Flexbox Froggy? Try out <a target="blank" href="http://www.flexboxdefense.com/">Flexbox Defense</a>

[Back to Lesson Index]({{ site.url }}/web-app/lessons)
