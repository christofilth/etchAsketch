# Project: Etch-A-Sketch
for The Odin Project's foundations course.

## Introduction
For this project, I am creating a browser based version of "something between a sketchpad and an Etch-A-Sketch".

The full assignment can be found [here](https://www.theodinproject.com/lessons/foundations-etch-a-sketch).

### Create a webpage with a 16x16 grid of square divs. 
Hand wrote code for createGrid function first. After setting up the files and creating links from the .html to .js and .css, added a container div to the html, this is where the grid will be created with JavaScript. In the .js file, wrote the function for createGrid, which uses a loop to create cells to fill the grid. Changed container display to flex box, and cell size is calculated using whatever number is entered into column. 

### Set up a “hover” effect so that the grid divs change color when your mouse passes over them
Added an event listener so that when the cursor moves over the cell, it changes from white to grey.

### Add user input to change grid size
Created an input box and button to change the grid size. When the user presses the button, the grid is cleared and a new one is created based on the number entered. An alert pops up if the user enters a number that isn't between 1 and 100. 

### Extra credit tasks
Added an option for random colour squares and for opacity +10% squares.