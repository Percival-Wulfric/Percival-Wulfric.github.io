// Working with imgames
// Muhammad Ismail
// 4/14/2026
// How to load images
// How to play animations

// Globale varables

// Chalange 
// Make a pinwheel class
// each pinwheel animates at random speed..
let lionL, lionR;
let dir = "left";
let pinImages = [];
let current = 0; // pinwheel curr index
let wheel = [];

async function loadAssets() {
  // load lions
  lionL = loadImage('assets/lion-left.png');
  lionR = loadImage('assets/lion-right.png');

  // load pin weel imgs
  for (let i = 0; i <= 8; i++){
    pinImages.push(loadImage('assets/pin-0'+ i+'.png'));
  }
  
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets();
  imageMode(CENTER); // Center refrenced image
  
  //noCursor(); // removes curser

  //frameRate(2); // Good for debuging but slows evrything down
}

function draw() {
  background(255);
  for(let w in wheel){
    w.animation();
  }

  //pinWheel();
  //lion();
} // screen updates hear

//function pinWheel(){
  image(pinImages[current], width/2, height*0.7);
  // Frame limiting logic
  if(frameCount %2 === 0) current = (current + 1 ) % 9;

  // current ++;
  //if(current > 8) current = 0;
  // You can't animate with for loop

//}

function lion(){
    // updating state varable based on mouse movement
    if(movedX < 0) dir = "left";
    else if (mouseX > 0) dir = "right";
  
    // enterpiting the state varable
    if(dir === "left"){
      image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
    }
    else{
      image(lionR, mouseX, mouseY, lionR.width/2, lionR.height/2);
    }
}

class pinWheelC{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.count = 0;
    this.speed = Math.floor(random(1, 11));
  }

  animation(){
    image(pinImages[this.count], this.x, this.y);
    // Frame limiting logic
    if(frameCount %this.speed === 0) this.count = (this.count + 1 ) % 9;
  }
}

function mouseClicked(){
  wheel.push(new pinWheelC(mouseX, mouseY));
}