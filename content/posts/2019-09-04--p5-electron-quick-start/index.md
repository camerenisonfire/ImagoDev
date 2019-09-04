---
title: Introducing A Quick Start Template for Using p5.js in Electron
tags: ["electron", "p5", "coding", "template"]
cover: brandi-redd-paper.jpg
author: cameren dolecheck
---

<re-img
    src="brandi-redd-paper.jpg"
    title="Photo by Brandi Redd on Unsplash"
    href="https://unsplash.com/photos/aJTiW00qqtI"
    >
</re-img>

There is something uniquely enjoyable seeing the code you write come to life. That’s why many of my favorite projects to work on have been creative coding projects. Most of these have revolved around [p5.js](https://p5js.org), the Javascript library based on the [Processing](https://processing.org) language. 

The goal of the Processing Foundation is to make coding accessible for artists and designers. This library does so by providing an easy to understand API to draw and animate in a web browser. From learning programming by moving primitive shapes, to creating complex generative art, p5.js has got your back. 

###Bumps in the road
As neat as p5.js is, the web browser itself can throw up some limitations. You have to spin up a local server to retrieve assets, you don’t have access to the file system, you’re limited to one tab and window, and if you’re anything like me you’re likely to get distracted by that open Youtube tab. 

That’s where [Electron](https://electronjs.org) comes in. By combining Chromium and Node.js, you fix all those problems (maybe not the Youtube distraction) with one tool. 

Electron and p5.js pair up great. Electron takes care of all your file system, window, and menu bar needs, leaving p5.js to do what it does best -- create super cool art and designs. Sketches move from a little dinky webpage to a full blown local app. 

To help you get up and running creating p5.js sketches in Electron, I've built a quick start template -- [P5-Electron-Quick-Start Project Template](https://github.com/camerenisonfire/p5-electron-quick-start). 

###Features
This template comes pre-configured with:
* `p5.js` npm module, rather than statically downloaded files. 
* `Electron` with pre-configured main and render process files.
* `Electron-reload` to keep the sketch up-to-date as you make changes.
* `Mocha` as the Node.js test suite.
* Example sketch that reacts to mouse movement and click.
* Examples of creating pure functions to drive your sketch.
* Examples tests for your sketch.
 
For those of you familiar with p5.js sketches, you’ll notice that the `sketch.js` file is setup a bit different. In order to keep P5 out of the global scope, it is instantiated inside `sketch.js` rather than declared as a `<script>` in the `index.html` file. This means that whenever you would call a p5 method, you must call it from the injected p5 instance. For example, in the `sketch()` function, you must use `p.ellipse()` rather than just `ellipse`.

###Only a button press away
Github makes creating new repos from template projects simple with the `Use this template` button. After that and a couple `npm` commands, you'll have skipped the annoying setup and can get straight to building awesome creative coding pieces with p5.js in Electron!

Hopefully, this template serves you well in your next project. Please provide any feedback on ways this quick starter can be improved to help you.