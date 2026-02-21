// Interactive Scene
// Muhammad Ismail
// 2/11/2026
// 

// Globle variable
let x = 395;
let y = 700;
let ySpeed = 0;
let GRAVITY = 0.7;
let currentBack = 0;
let ground = 795;


function setup() {
  noStroke();
  createCanvas(ground, 950);
}

function drawMountain(x, peak, size){
  // This function will make a mountain

  fill('#5c5c5c');
  triangle(x, peak, x - size/2, ground, x + size/2, ground);

}

function sun(){
  // this function makes a sun
  fill('#ffd16622');
  circle(mouseX, mouseY, 100);

  fill('#ffd60a');
  circle(mouseX, mouseY, 50);
}

function drawTree(x,y){
  // This function will draw a tree

  fill('#6b3e1d');
  rect(x - 6, y - 70, 12, 70);

  fill('#2a9d23');
  triangle(x, y - 140, x - 35, y - 70, x + 35, y - 70);

  fill('#1f7d1f');
  triangle(x, y - 110, x - 30, y - 50, x + 30, y - 50);
}

function character(x, y){
  // draws my charcter

}

function mousePressed() {
  // This is a existing function in teh p5.js library
  if (mouseButton == CENTER) {
    // Update bacground

  }

}

function draw() {

  // change current back state to change color

  background(255);
  sun();

  // Mountains 
  drawMountain(200, 350, 350);
  drawMountain(580, 280, 380);

  // Ground
  fill('#3a9d23');
  rect(0, ground, 795, 200);

  // Trees
  drawTree(120, ground);
  drawTree(690, ground);
  
  // Name
  fill(0);
  text("Muhammad Ismail", 15, 915);

  // Update x and y to move the charcter

  // Charcter
  character(x, y);
  
  
}
