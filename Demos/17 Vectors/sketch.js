// Vectors Practice
// Muhammad Ismail
// 4/13/2026
// Useful for modeling forces


// Globle Varables
let objects = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0, 45);
  // create objects
  if(mouseIsPressed){
    objects.push(new Ball(mouseX, mouseY));
  }

  // Process objects
  for(let o of objects){
    if(keyIsDown(32)){
      o.calcMouse();
    }
    else{
      o.force = createVector(0,0);
    }
    o.move();
    o.display();
  }
}

class Ball{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(-5, 5), -5);
    this.force = createVector(0, 0.2); // Gravitey
    this.color = [160, 32, 240];
  }

  calcMouse(){
    //mouse vector "atraction" calculation
    this.force = createVector(mouseX, mouseY);
    this.force.sub(this.pos);
    this.force.normalize(); // set hyp to 1
    this.force.mult(4);
  }

  move(){
    // Update Valocitey and position vectors
    this.vel.add(this.force);
    this.vel.limit(20); // Can't go outside -20 and 20
    this.pos.add(this.vel);

    // Wall Bousce
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.x *= -1;
    }

    // Floor Bounce
    if(this.pos.y > height){
      this.vel.y *= -0.9;
    }
  }

  display(){
    // display the ball
    fill(this.color[0],this.color[1],this.color[2])
    circle(this.pos.x, this.pos.y, 20);

    // display vectors
    if(false){
      stroke(255, 0, 0);
      line(0,0, this.pos.x, this.pos.y); //POS VECTOR (RED)

      let endX = this.pos.x + this.vel.x;
      let endY = this.pos.y + this.vel.y;

      stroke(0, 0, 255);
      line(this.pos.x, this.pos.y, endX, endY); // VEL VECT(BLUE)

      stroke(0,255,0);
      line(endX, endY, endX + this.force.x, endY + this.force.y);
    }
  }
}