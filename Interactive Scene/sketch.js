// Interactive Scene
// Muhammad Ismail
// 2/11/2026
// 

// Globle variable
let bgc = "";



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function drawMountain(){
  // This function will make a mountain
  triangle(width/2, 0, width/4, height - 20, width * 3/4, height - 20);
}

function sun(){
  // this function makes a sun
  circle(mouseX, 55, 100);
}
function draw() {

  background(255);
  drawMountain();
  sun();
}
