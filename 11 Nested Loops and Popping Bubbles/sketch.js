// Nested Loops
// Muhammad Ismail
// 3/6/2026

// Globle Varables
let bubbleSize = 20;
let bubbles = [];

// ChALANGE:
// add a movebubbles() function to have them random wiggle around their starting spot
// Spacebar adds bubble at mouse position
// modify delete function to work only when cliked
// give each bouble color porperty


function setup() {
  createCanvas(windowWidth, windowHeight);
  populateArray();
  noStroke();
}

function draw() {
  background(50);
  fill(25,25,0);
  drawBubble();
}

function eDist(x1,y1,x2,y2){
  // calculate the straight-line distance
  let a = x1 - x2;  let b = y1 - y2;
  let c = sqrt(pow(a,2) + pow(b,2));
  return round(c);
  //return c.toFixed(1); // Keep 1 dec. place
}

function drawBubble(){
  // through our array and display
  // a bubble at each pos.
  // possible delete, if mouse is close
  // loop by index bc we want to be able to delete
  for(let i = 0; i<bubbles.length; i++){
    let b = bubbles[i];
    circle(b.x, b.y, bubbleSize);
    textAlign(CENTER, CENTER);
    let d = eDist(b.x, b.y, mouseX, mouseY)
    //text(d, b.x, b.y);

    // check if we are overtop of the current
    // boubble, and then delete if so:
    if (d < bubbleSize/2){
      // to delete from array, use.splice()
      bubbles.splice(i,1);
    }
  }

}

function populateArray(){
  // simple nested loop test to make
  // ordered pairs:
  // x: 0, 30, 60   y: 0, 30, 60
  for (let x = 0; x <= width; x+= bubbleSize){
    // x: 0, 30, 60 .... right edge
    for (let y = 0; y <= height; y += bubbleSize){
      // y: 0, 30, 60  .... bottom edge
      let b = {x: x, y:y};
      bubbles.push(b);
      
    }
  }
}
