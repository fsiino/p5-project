// P5 will actually create the canvas, not the HTML.
// two functions:
  // 1) setup - called once the app starts. defines the local env properties such as screen size and background color
  // 2) draw called directly after setup(), continuously executes the code contained inside its block

function setup() {
  // create a canvas which is full width and height
  createCanvas(window.innerWidth, window.innerHeight);

  // add a white bg to t he canvas
  background(255);
}

// const path = [];
// Change approach to store all paths inside of paths array, instead of one path array of points. 
const paths = [];
let currentPath = [];

function draw() {
  // disables filling geometry (p5-specific function)
  noFill();

  if (mouseIsPressed) {
    // store the location of the mouse cursor
    const point = {
      x: mouseX,
      y: mouseY,
    };
    paths.push(point);
  }

  // loop over all paths and draw all points inside of them
  beginShape();
  paths.forEach(point => {
    // create a vertex at the specified location
    vertex(point.x, point.y);
  });

  endShape();
}

// When mouse is pressed, this fires (p5-specific function)
function mousePressed() { 
  // Clean up currentPath
  currentPath = [];
  // Push the path inside the `paths` array
  paths.push(currentPath);
}
