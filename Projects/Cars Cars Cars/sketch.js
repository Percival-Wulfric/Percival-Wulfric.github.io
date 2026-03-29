// Cars Cars Cars
// Muhammad Ismail
// 2026-03-28

// Vehical class to do
// loop the vehical in move
// the van and car modles
// directional driving



// Globles
const LINEDASHVAL = 30;
const MAXSPEED = 15;
let x;
let r;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = new Vehicle(width/2, height/2);
  
}

function drawRoad(){

  // This function will draw a double sided road
  noStroke();
  fill(0)
  rect(0,height/4, width, height/4 * 2);
  setLineDash([LINEDASHVAL, LINEDASHVAL]);
  strokeWeight(2);
  stroke(255,255,0);
  line(0 , height/2, width , height/2);
}

function setLineDash(list) {
  // This function makes dashed lines found it on the p5js vebsite
  drawingContext.setLineDash(list);
}

class Vehicle{
  // Consttuctor

  constructor(x, y){
    this.type = Math.floor(random(2));
    this.color = [random(255),random(255),random(255)];
    this.x = x; this.y = y;
    this.direction = Math.floor(random(2));
    this.xSpeed = Math.floor(random(MAXSPEED));
    if (this.direction === 0) this.xSpeed * -1;

  }

  // Class Methods

  display(){
    // This will display the specific vehical

    fill(this.color[0], this.color[1], this.color[2]);
    noStroke();

    if(this.type === 0){
      // Car 
      rect(this.x, this.y, 20, 25);
    }

    else{
      // Truck / Van
      circle(this.x, this.y, 25);
    }
  }

  move(){
    if(this.direction === 0){
      // Moving Right to Left
      this.x -= this.xSpeed;
    }

    else{
      // Moving Left to Right
      this.x += this.xSpeed;
    }
  }

  speedUp(){
    if(this.direction === 0){
      // Moving Right to Left
      this.xSpeed -= 1;
      if(this.xSpeed < -15) this.xSpeed = -15;

    }

    else{
      // Moving Left to Right
      this.xSpeed += 1;
      if(this.xSpeed > 15) this.xSpeed = 15;
    }
  }

  speedDown(){
    if(this.direction === 0){
      // Moving Right to Left
      this.xSpeed += 1;
      if(this.xSpeed > -1) this.xSpeed = -1;

    }

    else{
      // Moving Left to Right
      this.xSpeed -= 1;
      if(this.xSpeed < 1) this.xSpeed = 1;
    }   
  }

  changeColor(){
    this.color = [random(255),random(255),random(255)];
  }

  action(){
    this.display();
    this.move();
    
    // Speed up or Speed down
    if(r === 1) this.speedUp();
    else if (r === 2) this.speedDown();

  }


}

function draw() {
  background(255);
  r = int(random(101));
  if(r === 1) console.log(r);
  
  drawRoad();
  x.action();
  
}
