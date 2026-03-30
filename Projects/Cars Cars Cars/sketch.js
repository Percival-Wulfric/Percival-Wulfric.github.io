// Cars Cars Cars
// Muhammad Ismail
// 2026-03-28


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
    this.xSpeed = Math.floor(random(1,MAXSPEED));

  }

  // Class Methods

  display(){
    // This will display the specific vehical

    fill(this.color[0], this.color[1], this.color[2]);
    noStroke();

    if(this.type === 0){
      // Car 

      rect(this.x, this.y, 35, 15);

      // Weels
      fill(255)
      rect(this.x, this.y -2, 8, 3);
      rect(this.x + 27, this.y -2, 8, 3);
      rect(this.x, this.y +15, 8, 3);
      rect(this.x + 27, this.y + 15, 8, 3);


    }

    else{
      // Truck / Van
      noStroke();
  
      rect(this.x,this.y, 30, 25);
      rect(this.x+ 32, this.y, 10, 25);
    }
  }

  move(){
    if(this.direction === 0){
      // Moving Right to Left
      this.x -= this.xSpeed;
      if(this.x < 0) this.x = width;
    }

    else{
      // Moving Left to Right
      this.x += this.xSpeed;
      if(this.x > width) this.x = 0;
    }
  }

  speedUp(){
    // This makes that car speed up buy 1 to a max of 15
    this.xSpeed += 1;
    if(this.xSpeed > 15) this.xSpeed = 15;
  }

  speedDown(){
    // This makes the car slow down to a max of 1
    this.xSpeed -= 1;
    if(this.xSpeed < 1) this.xSpeed = 1;
  }

  changeColor(){
    this.color = [random(255),random(255),random(255)];
  }

  action(){
    this.display();
    this.move();

    // Random Number
    r = int(random(101));
    if(r === 1 || r === 2 || r === 3) console.log(r);
    
    // Speed up or Speed down
    if(r === 1) this.speedUp();
    else if (r === 2) this.speedDown();
    else if (r === 3) this.changeColor();
  }


}

function draw() {
  background(255);
  drawRoad();
  x.action();
  
}
