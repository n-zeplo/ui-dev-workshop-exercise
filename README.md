# Setup
```
  npm install
  gulp
```
(if gulp is not found then you need to install the gulp CLI tool globally with `npm install -g gulp`)

then open [http://localhost:8080/workshop/workshop.html](http://localhost:8080/workshop/workshop.html) in a browser.

# Rules of the game
- you **may not** edit the structure of the html, but you **may** add attributes to elements *if* you feel that is necessary.
- all your changes should be restricted to stylesheet.less (and workshop.html for adding attributes).

# Iteration One
## Requirements
- Content has headers with correct size as shown in the comp.
- Page uses two column layout, fixed width of 1000px.
- Active link in sidebar has a gray background. (you may add classes to the static html to simulate an active link)

## Bonus Points
- Sidebar has black background, content has white background.
  - Note: sometimes sidebar is taller than the content, sometimes vice versa.
- Sidebar links are laid out nicely.
- Page has variable width from 800px to 1100px.


#Iteration Two
## Requirements

- Body has no padding below 800px. Padding is also reduced for links.
- Page has variable width from 480px to 1100px.
- Menu moves to top of screen as shown in comp below 800px.

## Bonus
- Menu has two columns between 550px and 800px.

## Hints
- You'll need media queries for this. For a refresher on media queries, play around with the brower window size with [this example](http://codepen.io/anon/pen/QjomXY?editors=110). Also note that your `less` preprocessor can help to make your media query specifiers a bit more localized within your code.
