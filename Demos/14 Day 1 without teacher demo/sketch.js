// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  l = Array(100).fill(0).map(X => int(random(100)));
  // l will become a array with a 100 undifined values,
  // The arow function will give the map function a random value to put into each index of the array
  // int is there to remove the decimels
  createCanvas(windowWidth, windowHeight);
  console.log(l)
}

function draw() {
  background(220);
}
