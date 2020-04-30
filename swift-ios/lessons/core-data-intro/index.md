---
title: Core Data Overview
---

[Back to all Lessons]({{ site.url }}/swift-ios/lessons)

## 🎯 Learning Goals

* Explain, at a high level, what the purpose of Core Data is
* Understand the CRUD actions and how they will be used with Core Data

## 📗 Technical Vocabulary

- Attribute
- Core Data
- CRUD
- Data Model
- Device Storage
- Entity
- Offlining
- Persist

## 🌎 CRUD Functionality

CRUD is an acronym commonly used in development. It stands for: Create, Read,  Update, Delete.

As users of apps, almost everything we do triggers off one of those actions. Let's consider what a user does on Instagram.

- Post a photo (a piece of data is _created_ and stored)
- Comment on another users post (a piece of data is _created_ and stored)
- Watch stories (all pieces of data for stories are located and displayed so the user can see/_read_ them)
- Look at your profile page and scroll through all your past posts (all pieces of data for that account are located and displayed so the user can see/_read_ them)
- Edit the caption on a post (a piece of data is located then _updated_)
- Delete a post (a piece of data is located and _deleted_)

As we get into working with Core Data, it will be important to stay focused on which action needs to happen based on the way a user interacts.

## Core Data

Core Data is a framework provided by Apple that allows us to save data about our apps on the device; both from one view to the next as well as in between closing the app completely and reopening it. This idea of saving data is called **persisting**, or cacheing data. It is also referred to as **device storage**.

### Why Would We Use Core Data?

Many applications we use on iOS devices likely use Core Data! Even if they are using a back-end with a database, Core Data is helpful because it allows for **offlining**. If you've ever tried to use certain apps with no wifi connection, you may notice that some features work - maybe you don't get the most up-to-date stories from people you follow on instagram, but you can see posts from the last time you have wifi, you can see your profile page, etc. The fact that you can see _something_ means that the app is able to **offline**. This is possible because the developers of that app used Core Data (or something similar).

Let's break down how this might work:

<img class="medium" alt="App talking to CD, CD talking to back-end diagram" src="{{ site.url }}/swift-ios/lessons/core-data-intro/assets/cd-flow.png">

For this example, let's say we are making a ToDo List app where the user can add and delete a ToDo, as well as view all ToDos.

If the device is connected to wifi:
- When a user adds a ToDo, the program will send a message to Core Data that it needs to be added to the list of all ToDos. Then, the program will send a message to the back-end that everything currently in Core Data needs to be saved.
- When a user deletes a ToDo, the program will send a message to Core Data that it needs to be removed from the list. Then, the program will send a message to the back-end that everything currently in Core Data needs to be saved.
- When a user wants to see the list of all of their ToDos, it will ask Core Data for that. Core Data will check with the back-end that what it has, matches what the back-end has. If it is, great, If not, Core Data will be updated, then send that updated list to the app.

If the device isn't connected to wifi:
- When a user adds a ToDo, the program will send a message to Core Data that it needs to be added to the list of all ToDos.
- When a user deletes a ToDo, the program will send a message to Core Data that it needs to be removed from the list.
- When a user wants to see the list of all of their ToDos, it will ask Core Data for that. Core Data will give it the list it currently has.
- When the device is back on wifi, Core Data will send a message to the back-end with any changes the user made on the device.

### Core Data at Camp

We aren't connecting our apps to back-ends at camp, so we don't have as many steps to follow. So, we will be utilizing Core Data as if we are building a completely offined app.

### Data Model

A **data model** refers to the structure, organization, or almost blueprint or our data. When you had to consider if an array or a dictionary would be a better data type for certain types of data, you were deciding on a data model!

For Core Data, the data will be a little different. We won't store data in Swift data types. Instead, we will configure the data model in the GUI (graphical user interface) of Xcode. There are two things we need to know about the structure of Core Data data models.

- **Entity:** Each entity should hold one type of data. Instagram has stories, posts, and direct messages. So they would likely have one entity for each. A ToDo List App that only has ToDos only needs one entity.
- **Attributes:** Attributes are like properties of a class. An Instagram post entity would have attributes for photo, caption, timestamp, user, etc. When we declare the attributes an entity should have, we also declare the data type (string, boolean, etc).

## What to Expect

As you start on your first project using Core Data, you'll be using some new parts of Xcode and writing some new code.

_Note: this section will not walk you through how to fully implement Core Data; it just gives you a preview of some of the things to expect when you build ToDo List!_

### Configure the Data Model

To user Core Data in a project, make sure to check the Core Data box when you create the project:

<img class="small" alt="Screenshot of checking box for CD" src="{{ site.url }}/swift-ios/lessons/core-data-intro/assets/check.png">

In the `ProjectName.xcdatamodeld` file, you can add entities and attributes.

<img class="medium" alt="Screenshot of GUI for xcdatamodel file" src="{{ site.url }}/swift-ios/lessons/core-data-intro/assets/gui.png">

### Accessing Core Data

From your View Controllers, you'll need to access Core Data. You'll write some code similar to what's below.

```swift
guard let appDelegate = UIApplication.shared.delegate as? AppDelegate else {
  return
}

let context = appDelegate.persistentContainer.viewContext

let newItemInCD = EntityName(context: context)

newItemInCD.name = titleField.text
newItemInCD.important = importantSwitch.isOn

appDelegate.saveContext()
```

Notice that we reference `AppDelegate`. Does that look familiar? We have an `AppDelegate.swift` file in our project! When we created the project and checked the Core Data box, some additional code was written in that file for us. We referencing App Delegate to access that code, which allows us to communicate with Core Data in order to carry out our CRUD actions.

### Implementing Core Data

It's hard to implement Core Data without having an existing app to work with. The best way to practice is to just build a project! Iteration 2 of the ToDo List project will walk you through how to implement Core Data.

<br>
[Back to all Lessons]({{ site.url }}/swift-ios/lessons)
