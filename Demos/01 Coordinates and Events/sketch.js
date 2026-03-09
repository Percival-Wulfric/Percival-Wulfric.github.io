// Basics of Cordinate System
// Muhammad Ismail
// 2/5/2025
// In python we wrote "run-complition"
//  (start at top, end at the bottom)
// In p5.js , we write "interactive"
//  setup() → rund once , at the start
//  draw() → runs over and over (after setup)
//            targiting 60 times per second
//           schreen is updated at bottom of draw

//-------------------------Global Varable Section-------------------------
// we ca DECLARE variables here
// we can INITAILIZE variables with
//    simple data types
//    > don't have accesss to system variables
let circleX = 0;
let circley = 200;
let SPEED = 2;
let die = 30;

function setup() {
  createCanvas(500, 400);
}

function draw() {
  // repeats over and over (automaticaly) 60fps
  // aim to keep this TIDY
  background(0); // wipes the screen
  //drawTwoCircles();
  fiveCircles();
  movingCircle();
}

function movingCircle(){
  circle(circleX, circley, die);
  circleX = circleX + SPEED;
  if(circleX > width){
    circleX = 0;
  }
}

function fiveCircles(){
  let die = 25
  circle(width/2, height/2, die);
  circle(width, height, die);
  circle(width, 0, die);
  circle(0, height, die);
  circle(0, 0, die);
}

function drawTwoCircles(){
    //    R    G    B
    fill(200,  100, 20)  // Sets fill color untill updated
    stroke("#FFFFFF")
    //     x         y   die
    circle(circleX, 100, 50);

    // SECOND CIRCLE
    fill("red")
    noStroke(); // noFill();
    circle(width/2, height/2, 200)
}