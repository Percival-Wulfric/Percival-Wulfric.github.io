// Cars Cars Cars
// Muhammad Ismail
// 2026-03-28


// Globles
const LINEDASHVAL = 30;
const MAXSPEED = 15;
const NUMVEHICALS = 20;
const LIGHT_DURATION = 180;
const YELLOW_DURATION = 90;
const YELLOW_SPEED_CAP = 5; // The max speed of cars when the light is yelow
let eastbound = []; let westbound = []; let traficLight;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Creats equle number of vehicals in each side and makes shure they start in the right lane
  for(let i = 0; i < NUMVEHICALS; i++){
    eastbound.push(new Vehicle(250, random(height/4 *2 + 20,  height/4 *3 - 25), 1)); 
  }
  for(let n = 0; n < NUMVEHICALS; n++){
    westbound.push(new Vehicle(250, random(height/2 - 25, height/4 + 5), 0)); 
  }

  // This is my trafic light
  traficLight = new TraffickLight(100,100);

}

function mouseClicked(){
  // Class Function Call
  
  // To creat more cars by cliking or shift cliking
  if(keyIsDown(SHIFT)) westbound.push(new Vehicle(250, random(height/2 - 25, height/4 + 5), 0));
  else eastbound.push(new Vehicle(250, random(height/4 *2 + 20,  height/4 *3 - 25), 1));

}

function keyPressed(){
  // Changeing light coolor based on if space bar cliked
  if (keyCode === 32){
    traficLight.checkClike();
  }
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
    this.random = int(random(101));
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
      // Truck
      noStroke();
  
      rect(this.x,this.y, 30, 25);
      rect(this.x+ 32, this.y, 10, 25);
    }
  }

  move(){
    // This moves my vehical in its direction depending on lane

    // If the light is yelow and the speed is grater than the yelow light speed it wil set it to it.
    // meaning it will be caped to that speed
    if (traficLight.phase === "yellow" && this.xSpeed > YELLOW_SPEED_CAP) this.xSpeed = YELLOW_SPEED_CAP; // Reson for the and is to try and make less repetion. So it doesent run the if when not nesosary


    // Moving the cars
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
    // This changes the color of the vehical
    this.color = [random(255),random(255),random(255)];
  }

  action(){
    // This adds all the othere class methods so I can arange them

    this.display();

    if(traficLight.state){ // Bulian value of 0 is false and 1 is true this is specific to the name of my varable
          this.move();

      // New Random Number
      this.random = int(random(101));
      
      // Speed up or Speed down
      if(this.random === 1) this.speedUp();
      else if (this.random === 2) this.speedDown();
      else if (this.random === 3) this.changeColor();
    }

  }


}

class TraffickLight{
  // Consttuctor

  constructor(x, y){
    this.state = 1; // 1 = green light, 0 = red light
    this.x = x; this.y = y;
    this.distance = 0;
    this.phase = "green"; // green light, red light, yellow light
    this.timer = 0;
    
  }

  display(){
    // This will display my trafic light

    // Pole
    fill(60);
    noStroke();
    rect(this.x - 4, this.y + 55, 8, 50);

    // Housing box
    fill(40);
    rect(this.x - 22, this.y - 55, 44, 110, 8);

    // Dark slots
    fill(60);
    circle(this.x, this.y - 35, 32);
    circle(this.x, this.y, 32);
    circle(this.x, this.y + 35, 32);

   // Red bulb
    if (this.phase === "red") fill(255, 0, 0);
    else fill(80, 0, 0);
    circle(this.x, this.y - 35, 26);

    // Yellow bulb
    if (this.phase === "yellow") fill(255, 200, 0);
    else fill(80, 60, 0);
    circle(this.x, this.y, 26);

    // Green bulb
    if (this.phase === "green") fill(0, 255, 0);
    else fill(0, 80, 0);
    circle(this.x, this.y + 35, 26);

  }

  checkClike(){
    // When the space bar is preesed to change light to red
    if (this.phase === "green"){
        this.phase = "yellow";
        this.state = 1;
        this.timer = 0;
      }
  }

  colorChange(){
    // This is the logic for the color change
    this.timer ++;

    if (this.phase === "yellow" && this.timer >= YELLOW_DURATION && this.state === 1) {
      this.timer = 0;
      this.phase = "red";
      this.state = 0;
    }
    else if (this.phase === "yellow" && this.timer >= YELLOW_DURATION && this.state === 0) {
        this.timer = 0;
        this.phase = "green";
        this.state = 1;
    }
    else if (this.phase === "red" && this.timer >= LIGHT_DURATION) {
        this.timer = 0;
        this.phase = "yellow";
    }
  }

  action(){
    // This class methoud is to arange the other class methouds so i dont have to call so many

    this.display();
    this.colorChange();
  }

}

function draw() {
  // Main draw loop

  background(255);
  drawRoad();
  for(let i in eastbound){
    eastbound[i].action();
  }
  for(let n in westbound){
    westbound[n].action();
  }
  traficLight.action();
}
