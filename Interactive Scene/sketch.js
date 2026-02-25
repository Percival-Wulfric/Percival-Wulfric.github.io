// Interactive Scene
// Muhammad Ismail
// 2/11/2026
// This is my cool intractive scene it has mountains, a sun that looks like a egg,
// trees, mutaple colors and gravitey that looks funy for some reson 
// (To me it looks like those blender fawling objects that bounce)

// Globle variable
let x = 395;
let y = 700;
let ySpeed = 0;
let currentBack = 0;
let ground = 795;

// constant
let GRAVITY = 0.7;


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
  // x -> Tree x cordinate
  // y -> Tree y cordinate

  fill('#6b3e1d');
  rect(x - 6, y - 70, 12, 70);

  fill('#2a9d23');
  triangle(x, y - 140, x - 35, y - 70, x + 35, y - 70);

  fill('#1f7d1f');
  triangle(x, y - 110, x - 30, y - 50, x + 30, y - 50);
}

function character(x, y){
  // draws my charcter
  // x -> player x cordinate
  // y -> player y cordinate
  
  fill('#1d4ed8');
  rect(x, y, 35, 60);

  fill('#f2d5a9');
  ellipse(x + 17, y - 18, 35);

  fill('#1b263b');
  ellipse(x + 10, y - 20, 5);
  ellipse(x + 25, y - 20, 5);


}



function keyPressed() {
  // This is for jumps / upmovement
  if (keyIsDown(87)) {

    if (y >= ground - 60)
      // this is to make shour the player is on ground
      ySpeed = -15;

  }

}

function mousePressed() {
  // This is a existing function in teh p5.js library
  if (mouseButton == CENTER) {
    // Update bacground
    currentBack++;
    if ( currentBack > 3){
      currentBack = 0;
    }

  }

}

function draw() {

  // change current back state to change color

  if (currentBack == 0) {
    background('#7fb3c8');
  }

  if (currentBack == 1) {
    background('#f4a261');
  }

  if (currentBack == 2) {
    background('#4a6fa5');
  }

  if (currentBack == 3) {
    background('#1b263b');
  }

  
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

  // Gravitey
  ySpeed += GRAVITY;
  y += ySpeed;

  if (y > ground - 60) {

    y = ground - 60;
    ySpeed = 0;

  }

  // Update x and y to move the charcter
   if (keyIsDown(65)){ 
    x -= 5;
  }

  if (keyIsDown(68)) {
    x += 5;
  }

  // Charcter
  character(x, y);
  
  
}
