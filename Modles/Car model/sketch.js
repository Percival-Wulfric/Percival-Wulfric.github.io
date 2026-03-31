// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let color = [20,122,0];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  drawCar(100, 200, [255, 0, 0]); // red car
  //drawTruck(100, 200, [255, 0, 0]);
}


function drawCar(x, y, col){
  noStroke();
  fill(col);

  rect(x, y, 35, 15);

  // Weels
  fill(255)
  rect(x, y -4, 8, 3);
  rect(x + 27, y -4, 8, 3);
  rect(x, y +16, 8, 3);
  rect(x + 27, y + 16, 8, 3);

}


function drawTruck(x, y, col) {
  fill(col);
  noStroke();
  
  rect(x,y, 30, 25);
  rect(x+ 32, y, 10, 25);
}

function drawTrafficLight(x, y) {
  // body
  fill(50);
  rect(x - 30, y - 100, 60, 200, 20);

  // lights
  fill(activeLight === 0 ? 'red' : 80);
  circle(x, y - 50, 40);

  fill(activeLight === 1 ? 'yellow' : 80);
  circle(x, y, 40);

  fill(activeLight === 2 ? 'green' : 80);
  circle(x, y + 50, 40);
}