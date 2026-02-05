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


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0); // wipes the screen

  //     x    y  die
  circle(0, 0, 50);
}

