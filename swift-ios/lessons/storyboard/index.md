---
title: StoryBoard
---

[Back to all Lessons]({{ site.url }}/swift-ios/lessons)

## 🎯 Learning Goals

* Add UI elements to the StoryBoard using the Object Library
* Make UI look clean on all device sizes using constraints
* Add a home screen icon into the project

## 📗 Technical Vocabulary

* StoryBoard
* UI
* Constraints
* Object Library

## 🌎 StoryBoard & Object Library

Before we write all the Swift code we've been learning to make our app DO something, we want to completely set up the **UI (user interface)**. We will drag and drop components of the UI from the Object Library onto the **StoryBoard**.

Either watch the video below, or watch you instructor walk through how to add objects from the Object Library to the StoryBoard.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/afe71ea39a9140b8a2377dc3651027de" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div><br>

<div class="try-it">
  <h2>Try It: StoryBoard & Object Library</h2>
  <p>Open a new Xcode, iOS, Single View App, StoryBoard project.</p>
  <p>In your new project, drag and drop at least 3 UI Objects (View, Image View, Label) in from the Object Library. Run your project in the simulator.</p>
  <p>Add a button. Change the text on the button, the size of the text, the color and background color. Try to use at least one other option in the Attributes Inspector to learn something new!</p>
  <p>Now, look at your project on a different device. Does it look right? In the next section, we will learn how to lay out our objects so they look great on all devices.</p>
</div>

## Constraints

Everything looks great on my iPhone 8 screen, but in the simulator... not so much. Also, on the iPad Pro, everything is on the far left. **Constraints** are settings on UI Objects that make them appear the way we expect on every device. The video below walks you through a couple of the ways that constraints can be used.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/33b051b245214787b9e9b35f419baed3" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

Because there are many ways to apply constraints and combinations of them for working solutions, there are links to several other resources you may find helpful. Watch them, try to implement on your own, and you'll begin to develop your preferred approach!
- [This video from CodeWithChris](https://www.youtube.com/watch?v=emojd8GFB0o) goes into a lot of detail and walks you through how to build a professional looking UI.
- [This video](https://www.youtube.com/watch?v=OtHd0vCbiKQ) walks through using constraints to set a background color and launch screen.
- If you prefer to read documentations, [the official Apple documentation](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AutolayoutPG/index.html#//apple_ref/doc/uid/TP40010853-CH7-SW1) provides an in-depth explanation of how constraints work, auto layout cookbook, and tips on debugging layout!

<div class="try-it">
  <h2>Try It: Constraints</h2>
  <p>Building on your project, add constraints to each UI Object. Make sure to get <em>one</em> object looking as expected before moving on to the next.</p>
</div>

## Nice-To-Know: Nav Bar and Tool Bar

The `Nav Bar` and `Tool Bar` are components of most apps we use on our phones. Follow the directions below to add them to your app!

* Drag and drop a `Navigation Bar` onto the StoryBoard
* Drag and drop a `Bar Button Item` - notice where you can place them
* Drag and drop a `ToolBar` onto the StoryBoard
* Drag and drop a `Bar Button Item` - notice where you can place them, you can also use `Flexible Space Bar Button Item` to control spacing.

## Nice-To-Know: Home Screen Icon

On the simulator, click the 'Home' button, and notice our app icon is pretty boring. Follow the directions below to add one to your app:

* To add an icon for iPad, it must be exactly 76x76 OR 152x152. There are other specific dimensions the image or icon must be in for other devices. Click on the `Assets.xcassets` folder within your Xcode project to find those details. In Google Images search, you can add `imagesize:152x152` after yout search term to filter for images, in this example, that are the 152x152 size.
* Drag and drop the image from your Finder, into the appropriate boxes in the `Assets.xcassets`.
* To see it appear, make sure you are running your simulator with the device type/size that has an icon.

## iOS: StoryBoard

You are now building **real** iOS applications! To get some more practice, complete the exercise below. Feel free to reference any of the videos or your Try It project if you need help.

<div class="practice">
  <h2>Practice: StoryBoard</h2>
  <p>Plan out an app (it could be one screen on your favorite app, the app you're dreaming about making, or just a few simple elements!) by drawing it out on a sketch paper. Label the different parts of your app with the names of the Objects from Object Library you will need to use.</p>
  <p>In your new project, drag and drop at least 3 UI Objects (View, Image, Label) in from the Object Library. Each time you add one, do the following:</p>
  <ul>
    <li>Check the appearance on the simulator</li>
    <li>Set constraints on each UI Object</li>
    <li>Check the simulator again</li>
  </ul>
  <p>Now, add an icon image. Run the project in simulator to make sure it was loaded in correctly!</p>

  <div class="challenge-container extension-heat">
    <p class="spicy-click">Extension 🕵🏾‍♀️</p>
    <div class="spicy-toggle">        
      <p>Start over! Drag a Navigation Bar onto the View Controller. Edit the title. Drag 1 or more Navigation Item onto the Navigation Bar - play around with the different icons that are built in that you can use! Finish the UI for the rest of your app now that you have a Navigation Bar! Add an icon image - this time, make sure this will appear on any iPad by also including a 76x76 image in the 1x box.</p>
    </div>
  </div>

</div>

<br>
[Back to all Lessons]({{ site.url }}/swift-ios/lessons)
