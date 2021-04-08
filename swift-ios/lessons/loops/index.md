---
title: For-In Loops
---

[Back to all Lessons]({{ site.url }}/swift-ios/lessons)

## 🎯 Learning Goals

* Explain the concept of iteration
* Write a for-in loop to accomplish repetitive code
* Use for-in loops to iterate over arrays and dictionaries

## 📗 Technical Vocabulary

* Array
* Dictionary
* Element
* Index
* Iterate
* Loop

## 🌎 Warm Up

Iteration (or looping for a specified number of times) is a process of repeating a task for each object in a collection. For each of the scenarios below, we’ll walk through using examples we are familiar with to demonstrate the concept.

These are examples that would be programmatically challenging because they would require several steps, but are things that we do every day.

<table>
  <thead>
    <tr>
      <th>Scenario</th>
      <th>Collection</th>
      <th>For each...</th>
      <th>Do this:</th>
      <th>Then:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Grading papers</td>
      <td>papers</td>
      <td>paper</td>
      <td>
        <ol>
          <li>read through it</li>
          <li>mark the score on the top</li>
          <li>record score in gradebook</li>
        </ol>
      </td>
      <td>repeat with next paper</td>
    </tr>
    <tr>
      <td>Feeding animals</td>
      <td>animals</td>
      <td>animal</td>
      <td>
        <ol>
          <li>bring the animal to the food bucket</li>
          <li>allow the animal to eat</li>
          <li>bring animal back to barn</li>
        </ol>
      </td>
      <td>repeat with next animal</td>
    </tr>
  </tbody>
</table>

We can also iterate in programming. By “in programming," we mean things that could be done, with relative ease, by a computer like crunching numbers.

<table>
  <thead>
    <tr>
      <th>Scenario</th>
      <th>Collection</th>
      <th>For each...</th>
      <th>Do this:</th>
      <th>Then:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Calculating max heart rate</td>
      <td>birth years</td>
      <td>year</td>
      <td>
        <ol>
          <li>subtract birth year from 2021 to get age</li>
          <li>subtract age from 220</li>
        </ol>
      </td>
      <td>repeat with next year</td>
    </tr>
    <tr>
      <td>Formatting names</td>
      <td>names</td>
      <td>name</td>
      <td>
        <ol>
          <li>capitalize the first letter</li>
          <li>lowercase all remaining letters</li>
        </ol>
      </td>
      <td>repeat with next name</td>
    </tr>
  </tbody>
</table>
<br>

<div class="try-it">
  <h3>Think About It: Iteration in Real Life and Programming</h3>
  <p>Brainstorm a real life scenario that uses iteration. Fill out the table below and be ready to share.</p>
  <table>
    <thead>
      <tr>
        <th>Scenario</th>
        <th>Collection</th>
        <th>For each...</th>
        <th>Do this:</th>
        <th>Then:</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
      </tr>
    </tbody>
  </table>
  <p>Think of how arrays are used in apps that you use. Why might you a developer to iterate over that collection? Jot down your scenario below.</p>
  <table>
  <thead>
      <tr>
        <th>Scenario</th>
        <th>Collection</th>
        <th>For each...</th>
        <th>Do this:</th>
        <th>Then:</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
      </tr>
    </tbody>
  </table>
</div>

## What is a `for-in` loop?

A `for-in` loop is a block that will run code a specific number of times. It can iterate through a collection (array or dictionary) and _do_ something with each element. Loops are very common and necessary parts of a programming language; every programming language has its own version of getting this done.

The benefit of loops is they save us time. When we want to do to the same thing for a lot of items, we only have to write that command once. For example, if we wanted to do something with each string in the `trending` array, our code would look like this:

```swift
var trending = ["@thecardguy", "@cosette", "@avani", "@lorengray"]

print("Have you seen that TikTok from /(trending[0]) yet?!");
print("Have you seen that TikTok from /(trending[1]) yet?!");
print("Have you seen that TikTok from /(trending[2]) yet?!");
print("Have you seen that TikTok from /(trending[3]) yet?!");
```

Right now, this doesn’t seem so bad. What if we had 100 creators on our list? 1000? That’s a LOT of lines of code to write and potentially a lot of places we would need to update it every time we added or removed a creator.

## Syntax (Arrays)

We can use `for-in` loops to do something with each individual element from an array. If we use our array of trending TikTok creators, we could write a `for-in` loop to do the same thing with each of the string elements.

```swift
var trendingCreators = ["@thecardguy", "@cosette", "@avani", "@lorengray"]

for creator in trendingCreators {
  print(creator)
}
```

<div class="try-it">
  <h2>Think About It</h2>
  <ul>
    <li>What do you think will happen when we run the code above?</li>
    <li>What if we add another creator to our array?</li>
    <li>Why do you think we used the words "creator" and "trendingCreators" in our <code class="try-it-code">for-in</code> loop?</li>
  </ul>
</div>

### Breaking it Down

Let's try to understand what's going on here.

```swift
var trendingCreators = ["@thecardguy", "@cosette", "@avani", "@lorengray"]

for creator in trendingCreators {
  print(creator)
}

// => @thecardguy
// => @cosette
// => @avani
// => @lorengray
```

The word `creator` right after the keyword `for` refers to each element of our array, and the `trendingCreators` after the `in` keyword is the name of the array we are telling the computer to iterate over. We've told our loop to run the same number of times as there are elements in the array. So, since we currently have 4 elements in the array, it will run 4 times. If we added another creator to our array, the loop would run 5 times.

By using the word `creator` after the `for` keyword, we're telling our code that we can use `creator` like a variable (only inside of the code block, or the curly braces), and its value for each iteration of the loop will be whatever element of the array it's currently iterating over.

<div class="try-it">
  <h2>🐣Try It: Looping over Arrays</h2>
  <ul>
    <li>Declare an array of the names of five of your friends</li>
    <li>Write a <code class="try-it-code">for-in</code> loop that uses each name and prints <code class="try-it-code">Hello, [friend's name]</code> to the console</li>
    <li>Declare an array of the names of four things you want to learn</li>
    <li>Write a <code class="try-it-code">for-in</code> loop that uses each thing you want to learn and prints <code class="try-it-code">I want to learn [thing I want to learn]</code> to the console</li>
  </ul>
  <p>Share with your breakout groups: What did you name your arrays? What word did you use to describe the individual elements (what did you type between <em>for</em> and <em>in</em> in your loops)?</p>
</div>

## Placeholders & Counters

Sometimes, when iterating over an array, our end goal won't be to do the exact same thing to each element. Sometimes we'll want to combine elements. Sometimes we'll want to filter through them and only use some of them.

Here's a real-life example: [Tumblr](https://www.tumblr.com/search/kode+with+klossy) has an array of posts related to each term. When we first search a term, we'll see all the posts. If we select "Link" from the filter drop-down, we'll only see the two posts that are links.

How did Tumblr do that? They iterated over the array of **all** posts, checked each one for a piece of criteria, and put those that did meet the criteria in a placeholder. After it finished iterating, it returned the placeholder and displayed them in the browser.

<img src="./assets/tumblr-filter.png" alt="Screen shot of filter drop down and results">

Let's solve a slightly less involved challenge, but one that gets at the same idea. Our goal will be to take an array of numbers and return an array of only the numbers from the original array that are greater than 10.

```swift
// start with an array of numbers
var numbers = [1, 4, 23, 14, 5, 7, 11, 6, 92]

// start a placeholder array that will eventually store numbers over 10
var largeNumbers = [Int]()

// iterate over the array
for number in numbers {

}
```

In the code above, we set up our placeholder and our `for in` loop. Now, we need to do some work inside the curly braces of the loop.

```swift
var numbers = [1, 4, 23, 14, 5, 7, 11, 6, 92]
var largeNumbers = [Int]()

for number in numbers {
  // check if the current number being iterated over is greater than 10
  if number > 10 {

  }
}
```

In the code above, we wrote a conditional to check the value of the current number against 10. Now, we need to write code inside that conditional.

```swift
var numbers = [1, 4, 23, 14, 5, 7, 11, 6, 92]
var largeNumbers = [Int]()

for number in numbers {
  if number > 10 {
    largeNumbers.append(number)
  }
}
```

At this point, our `largeNumbers` array is holding all four numbers greater than 10, but we aren't ever printing it out, so it's hard to see that.

```swift
var numbers = [1, 4, 23, 14, 5, 7, 11, 6, 92]
var largeNumbers = [Int]()

for number in numbers {
  if number > 10 {
    largeNumbers.append(number)
  }
}

print(largeNumbers)
```

<div class="try-it">
  <h2>Try It: Placeholders</h2>
  <p>Declare an array that contains at least five strings and store it in a variable. You choose what the words are!</p>
  <p>Use a <code class="try-it-code">for in</code> loop to create a new array of the words from your original array than have less than 6 characters. Use <code class="try-it-code">print()</code> to verify your new array holds what you think it does.</p>

  <div class="challenge-container spicy-heat">
    <p class="spicy-click">Click here for a Spicy Challenge 🌶🌶🌶</p>
    <div class="spicy-toggle">        
      <p>Declare a function called <code class="spicy-code">findLongestWord</code>. It should iterate over an array of strings. Your function should return one string, the string from the original array that had the greatest number of characters. If there is a tie for the greatest number of characters, return the last one that is in the array.</p>
    </div>
  </div>

</div>

## `for-in` Loops _without_ Collections

We can also use `for-in` loops without a collection, like an array or dictionary. In this case, we would do this because we want to perform a specific action, a certain number of times. There are a couple of differences in the syntax you might see when we aren't iterating over an array. See the code below:

```swift
for _ in 1...4 {
  print("Hello!")
}
```

Why didn't we use a variable here? We didn't _need_ one. We weren't iterating over an array and trying to do something with each element, so we use the underscore.

```swift
for number in 1...4 {
  print(number)
}
```

In the example above, we did declare a variable, `number` - it will behave as if we were iterating over [1, 2, 3, 4]. (This doesn't mean `1...4` really is an array, though.) If you're interested in learning more about this, read up on [the Range documentation](https://developer.apple.com/documentation/swift/closedrange).

<div class="try-it">
  <h2>Try It: Looping without Collections</h2>
  <p>Write a <code class="try-it-code">for-in</code> loop that prints <code class="try-it-code">Are we there yet?</code> to the console 100 times.</p>
  <p>Write a <code class="try-it-code">for-in</code> loop that prints <code class="try-it-code">I've had ___ frappuccinos today ...</code> to the console 10 times, with the numbers 1 - 10 filled in for the blank.</p>

  <div class="challenge-container medium-heat">
    <p class="spicy-click">Click here for a Medium Challenge 🌶🌶</p>
    <div class="spicy-toggle">  
      <p>Write a <code class="medium-code">for-in</code> loop that prints <code class="medium-code">I've had ___ frappuccinos today ...</code> to the console 5 times, <em>starting at 7</em>.</p>      
    </div>
  </div>

  <div class="challenge-container spicy-heat">
    <p class="spicy-click">Click here for a Spicy Challenge 🌶🌶🌶</p>
    <div class="spicy-toggle">        
      <p>Write a <code class="spicy-code">for-in</code> loop that prints <code class="spicy-code">I've had ___ frappuccinos today ...</code> to the console 10 times, with the numbers 0 - 9 filled in for the blank. <em>However</em>, the second statement printed out technically has incorrect grammar. That sentence should say <code class="spicy-code">I've had 1 frappuccino today ...</code>, with frappuccino being singular. How can you utilize other concepts you've learned this week to accomplish that?</p>
    </div>
  </div>

</div>

## Loops

We're really getting into some complicated code! Work through the practice below to make sure you have this down.

<div class="practice">
  <h2>Practice: Loops</h2>
  <h3>Check Your Understanding</h3>
  <p>Let's take some time to answer the following questions in our journals, and then discuss our answers together.</p>
  <ul>
    <li>What is a for-in loop (in Swift)? What does it do?</li>
    <li>What are the different ways you can use a for-in loop?</li>
    <li>How can for-in loops be useful? What do you think is the point of them?</li>
    <li>Can you brainstorm some ways that one of your favorite apps might make use of a for-in loop?</li>
  </ul>
  <h3>More Practice</h3>
  <p>At this point, you have the tools to do just about anything with loops! If you’d like more practice before moving on, check out the Leveled <a href="../../practice/loops">Array Practice Exercises</a>.</p>
</div>

<br>
[Back to all Lessons]({{ site.url }}/swift-ios/lessons)
