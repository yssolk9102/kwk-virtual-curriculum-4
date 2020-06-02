# Kode With Klossy 2020 Virtual Camp Curriculum

## Contributing

This site is built with Jekyll using Ruby version 2.4.1p111. Find the Jekyll docs [here](https://jekyllrb.com/docs/usage/).

### Setup

- Clone the repo `git clone git@github.com:turingschool/try-turing.git`
- Open the project in your text editor of choice
- Edit the project on the `gh-pages` branch
- Use this git workflow to push to production: 
  - `git add .`
  - `git commit -m "Your message here"`
  - `git push origin gh-pages`

The changes may take a minute or two to be recognized on production. Please make sure you review your changes on production. If you prefer to edit on a different branch, follow the branch workflow and make a PR on GitHub.

#### Running Locally - _Not Required_

While running locally is not required or really even recommended, in the event that you need to because you are adding scripts files that you need to verify work as expected, follow these steps while navigated to the project root in your terminal:
- Run `bundle install`
- To start the server run `jekyll serve --incremental`
- Navigate to `localhost:4000` in the browser to see the site
- Make changes and commits as usual

### Structure of Site

All content files in the site can be written as either Markdown or HTML. Each curriculum/resource is housed in its own directory at the root of the project.

```
root
|_ swift-ios
|_ web-app
|_ instructional-resources
```

Inside of each curriculum directory, there should be an `index.md` file and a series of directories - one directory for each section of the curriculum. Each section should have its own `index.md` and and `assets` directory if necessary. Here's an example:

```
root
|_ swift-ios
  |_ calendar
    |_ index.md
  |_ lessons
    |_ lesson-name
      |_assets
      |_index.md
    |_ index.md
  |_ practice
  |_ projects
  |_ solo
  |_ virtual-resources
  |_ index.md
```

Each page, or type of page, has its own `sass` file for styling. That file lives in the `_sass` directory at the root of the project, and must be imported into `stylesheets/styles-2017121801.scss`.

#### Headers in Markdown Files

For each file, include a header with the following syntax:

```
---
title: Name of lesson
---
```

The title will appear as the `h1` on that page and the value provided for layout will correspond to a template in the `_layouts` directory. If no layout value is provided, `page.html` is the default.

#### Available Styles

Try It Boxes:

```html
<div class="try-it">
  <h2>Title should always be in an H2</h2>
  <p>Text here</p>
</div>
```

Spicy Challenge Boxes:

```html
<div class="challenge-container spicy-heat">
  <p class="spicy-click">Click here for a Spicy Challenge 🌶🌶🌶</p>
  <div class="spicy-toggle">        
    <p>Any text here as well as <code class="spicy-code">code snippets!</code></p>
  </div>
</div>
```

In addition to `spicy-heat`, `medium-heat` and `mild-heat` can also be used for color-coding challenge call-outs. The same convention follows for `spicy-code`, `medium-code` and `mild-code`.

#### Embedded Glitch Projects

To embed a Glitch project, copy and paste the HTML provided in the "embed app" modal on Glitch. Remove the `allow` attribute so that microphone, camera, and geolocation are _not_ allowed.

```
<!-- Copy and Paste Me -->
<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe
    src="https://glitch.com/embed/#!/embed/example-event-listener?path=README.md&previewSize=0&attributionHidden=true"
    title="example-event-listener on Glitch"
    allow="geolocation; microphone; camera; midi; vr; encrypted-media" 💣 REMOVE THIS LINE
    style="height: 100%; width: 100%; border: 0;">
  </iframe>
</div>
```

### JavaScript

All JavaScript should live under `root/public/js`. Any new files created will need to be pulled in with script tags in (probably) the `_layouts/main.html` and `_layouts/page.html`. jQuery is a dependency, so is available for use in JavaScript files.

## Style Guide

- Only use HTML if you need classes for styles or JavaScript
- Pad each heading, paragraph, and code snippet with one line of white space in markdown files
- Use `<a target="blank">` for external link rather than the Markdown `[]()` so use is not navigated away from curriculum site
- Don't use periods at the end of each item on an unordered list

GitHub uses a slightly different system for translating from Markdown than the engine we use for try.turing.io. Keep in mind:

- Use a space after your ``#``'s in headers
- Use a blank line between your headers and any content below
- Replace any `|` with `\|` unless you're _really_ trying to do a table
