// Drawing with single loops 
// Muhammad Ismail
// 2/24/2026

// Globale Varaibles
let cX = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function movingBall(){
  // This function makes a moving ball that wraps around
  // Using the draw() loop, we can animate
  cX += 5;
  if(cX > width) cX = 0; // wraps around
  circle(cX, 50, 25);
}

function circleLine(y, size){
  // Use this function to draw a line of circales
  // y → number height at which to the line
  // size → number diameter of the circles
  // Can't make animate in for loop
  let xStart = width * 0.1; // 10% position from left
  let xEnd = width * 0.9; // 90% position from left
  for(let x = xStart; x < xEnd; x+= size){
    circle(x,y,size);
  }
}

function gradientBackground(){
  // Create a gradent to use as a bacground
  let h = 1; // hight of each rectangle

  // use a loop (doesn't have to be WHILE)
  // to draw vertical stack of rectangles
  let y = 0;
  noStroke();
  while (y < height){
    let value = map(y, 0, height, 0, 255);
    fill(value, 0, 255);
    rect(0, y, width, h);
    y += h;
  }
}

function Chalange(){
  // Use this function to draw a line of circales
  // y → number height at which to the line
  // size → number diameter of the circles
  // Can't make animate in for loop
  let Cx = mouseX;
  let Cy = mouseY;
  let size = 25;
  for(let x = 0; x < width; x+= size + 30){
    fill(255);
    circle(x,0,size);
    noFill();
    triangle(x,0, x +size + 30, 0, Cx, Cy);
  }
  for(let y = 0; y < width; y+= size + 30){
    fill(255);
    circle(width -15,y,size);
    noFill();
    triangle(width -15, y, width -15, y+size+30, Cx, Cy);
  }
  for(let x = 0; x < width; x+= size + 30){
    fill(255);
    circle(x,height - 11,size);
    noFill();
    triangle(x,height, x +size + 30, height, Cx, Cy);
  }
  for(let y = 0; y < width; y+= size + 30){
    fill(255);
    circle(0,y,size);
    noFill();
    triangle(0, y, 0, y+ size + 30, Cx, Cy);
  }
  fill(255);
  circle(Cx, Cy, 30);
  

}

function draw() {
  background(220);
  Chalange();
  //gradientBackground();
  //movingBall();
  //circleLine(height*0.35, 30);
  //circleLine(height/2, 50);
  //circleLine(height*0.65, 80);
}
