// Random vs Noise
// Muhammad Ismail
// 2/27/2026
//
// Looking at unperdictability
// Spesificly the diffrence between
// Uniformal distributed numbers
// and Perlin Noise

// Chalange 
// Use noise() to make/use a
// ySpeed variable 

// Globle Variables
let d1, d2;
let minSize = 5;
let maxSize = 100;
let x1, x2, y1,y2;

// variables for using noise()
let noiseTime = 5, noiseSpeed = 0.01;
let ySpeed = 0, xSpeed = 0; // range: -5 aand +5
// "nosieSpeed" controls how connected
// the random noise() values are


function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width*0.3;
  y1 = height*0.5;
  x2 = width*0.7;
  y2 = height*0.5;
  //frameRate(3); Slows down evrything too
}

function draw() {
  background(0);
  //randomSeed(703); // actual value
  //stars();
  ySpeed = noise(noiseTime + 5);
  xSpeed = noise(noiseTime - 20);
  xSpeed = map(xSpeed, 0, 1, -5, 5);
  ySpeed = map(ySpeed, 0, 1, -5, 5);
  y2 += ySpeed;
  x2 += xSpeed;
  //randomCircle();
  noiseCircle();
}

function stars() {
  // Use random to genrate 100 stars
  // Alt + Shift + F → Auto formating
  fill(255);
  for (let i = 0; i < 100; i++) {
    let x = random(0, width);
    let y = random(0, height);
    circle(x, y, 6);
  }
}

function randomCircle(){
  // draw a fixed circle with randomly changing diameter
  fill(120,0,0);
  d1 = random(minSize,maxSize);
  circle(x1, y1, d1);
}

function noiseCircle(){
  // draw a fixed circle with randomly
  // changing (but smooth) diameters
  d2 = noise(noiseTime);   //yields value between 0-1
  d2 = map(d2, 0, 1, minSize, maxSize);

  fill(188, 19, 254);
  circle(x2,y2,d2);
  noiseTime += noiseSpeed;
}