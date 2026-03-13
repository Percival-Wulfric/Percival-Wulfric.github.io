// Snake
// Muhammad Ismail
// 3/12/2026

// Globle Variable
let x, y;
let posList = [];
const NUM_SEGMENTS = 220;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER); angleMode(DEGREES);
  x = width/2; y = height/2;
  for(let i = 0; i<NUM_SEGMENTS; i++){
    posList.push({x:x, y:y, r:frameCount});
  }
  stroke(195,60,84);
}

function renderSnake(){
  // Makes the objects at the positions at position in the list/array
  for(let p of posList){
    push();
    // temporary translations so that tehy dont stack on top of each other
    translate(p.x, p.y);
    rotate(p.r);
    fill(210, 110, 73);
    square(0,0,120);
    pop();
    p.r += 2;
    fill(0);
  }
}

function move(){
  // This is the movement 
  if(keyIsDown(LEFT_ARROW)) x -= 4;
  if(keyIsDown(RIGHT_ARROW)) x += 4;
  if(keyIsDown(UP_ARROW)) y -= 4;
  if(keyIsDown(DOWN_ARROW)) y += 4;
  // every movement step, add a new segment
  // and delete oldest segment
  posList.splice(0,1);
  posList.push({x:x, y:y, r:frameCount});
}

function draw() {
  background(255, 243, 176);
  renderSnake();
  move();
}
