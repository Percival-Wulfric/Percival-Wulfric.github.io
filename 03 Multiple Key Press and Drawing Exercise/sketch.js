// Multiple Keypress Detection
// and ---- Drawing Practice ----
// Muhammad Ismail

// Globle variable
let die = 20;
let x = 900/2;
let y = 800/2;
let speed = 3;

function setup() {
  createCanvas(900, 800);
}

function checkMulti(){
  // a function to demonstrate how we cand check
  // if multaple keyboard buttons are pressed
  // at once


  // check for multaple keypresses (3 simultanusly)
  let w = keyIsDown(87);  // w
  let a = keyIsDown(65);  // a
  let s = keyIsDown(83);  // s
  let d = keyIsDown(68);  // d

  if(w){
    y = y - speed
  }
  if(s){
    y = y + speed
  }
  if(a){
    x = x - speed
  }
  if(d){
    x = x + speed
  }

}

function drawAndroid(){
  // this function creats a android Charcter

  fill(168, 254, 176);
  noStroke();
  rectMode(CENTER);
  rect(x, y, 55, 50, 30, 30, 0, 0);

  fill(0);
  circle(x + (die/2) ,y , 6);
  circle(x - (die/2) , y, 6);
  rect(x , y + 15, 20 , 2);

  fill(168, 254, 176);
  rect(x - 50/2, y + 30, 4 , 25);
  rect(x+ 50/2, y + 30, 4 , 25);

}



function draw() {
  background(220);
  checkMulti();
  drawAndroid();
}
