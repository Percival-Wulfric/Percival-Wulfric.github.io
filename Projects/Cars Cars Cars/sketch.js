// Cars Cars Cars
// Muhammad Ismail
// 2026-03-28


// Globles
const LINEDASHVAL = 30;
const MAXSPEED = 15;
let eastbound = []; let westbound = [];
let r; let lightColor = 1; // 1 = green light, 0 = red light
let c = [0, 255, 0]; let d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 20; i++){
    eastbound.push(new Vehicle(250, random(height/4 *2 + 20,  height/4 *3 - 25), 1)); 
  }
  for(let n = 0; n < 20; n++){
    westbound.push(new Vehicle(250, random(height/2 - 25, height/4 + 5), 0)); 
  }

}

function mouseClicked(){
  // This is a built in function which i am utalising make the traficl light turn 
  // red and back to green when i click the circle
  
  if(d < 30) {
    // 30 = diameter of circle
    if(!(lightColor)) lightColor = 1;
    else lightColor = 0;
  }
  
  // For more cars
  
  if(keyIsDown(SHIFT)) westbound.push(new Vehicle(250, random(height/2 - 25, height/4 + 5), 0));
  else eastbound.push(new Vehicle(250, random(height/4 *2 + 20,  height/4 *3 - 25), 1));

  //console.log(westbound.length, eastbound.length);
}

function traficLight(x, y){
  // This function will make a working trafic light that if you clic on 
  // will turn the lights red and then back to green
  fill(c[0],c[1], c[2]);
  circle(x, y, 60);

  d = dist(mouseX, mouseY, x, y); // this finds the distance betwen the first 2 and last 2 numbers
  //console.log(d);
  

  if(lightColor) c = [0, 255, 0];
  else c = [255, 0, 0];
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

  constructor(x, y, d){
    this.type = Math.floor(random(2));
    this.color = [random(254),random(254),random(254)];
    this.x = x; this.y = y;
    this.direction = d // - 0 is right to left ←,  1 is left to right →
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

    if(lightColor){ // Bulian value of 0 is false and 1 is true
          this.move();

      // Random Number
      r = int(random(101));
      
      // Speed up or Speed down
      if(r === 1) this.speedUp();
      else if (r === 2) this.speedDown();
      else if (r === 3) this.changeColor();
    }

  }


}

function draw() {
  background(255);
  drawRoad();
  for(let i in eastbound){
    eastbound[i].action();
  }
  for(let n in westbound){
    westbound[n].action();
  }
  traficLight(100, 100);
}
