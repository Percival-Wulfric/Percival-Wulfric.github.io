// Tag Game
// Ayeman & Muhammad
// May 4/26

// Globale
let player1;
const GRAVITY = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  player1 = new player(width/2, height/2, 0, 1);
}

function draw() {
  background(220);
  player1.action();
}

class player{
  constructor(x,y,mood, playerNumber){
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
    this.grav = createVector(0,0.2);
    this.mood = mood;
    this.playerNumber = playerNumber;
    this.speed = 2;
    this.jumpHeight = 3;
    this.ySpeed = 0;
    this.playerSize = 50;
  }

  movement(){
    // This function will handle all movement
    this.vel.add(this.grav);
    this.pos.add(this.vel);


    if(this.playerNumber === 1){
      if(keyIsDown(LEFT_ARROW)){
        this.vel.x = -3;
      }
      if(keyIsDown(RIGHT_ARROW)){

      }
      
      if(keyIsDown(DOWN_ARROW)){
        // If the player has a anilitey to go down they can

      }
    }
  }

  jump(){
    if(keyIsDown(UP_ARROW)){
      // - is up becous 0 to height
      this.y -= this.jumpHeight;
      if(this.y > height) this.y = height;
    }
  }

  gravity(){
    // This function gives the player gravitey
    //acceleration down
    this.ySpeed += GRAVITY;
    this.y = this.y + this.ySpeed;

    if(this.y > height -this.playerSize) this.y = height -this.playerSize;
    
    //reduse slowly
    this.ySpeed = this.ySpeed * 0.997;
    
  }
    
  

  show(){
    // this function will display the charcter
    rect(this.pos.x,this.pos.y, this.playerSize,this.playerSize);
  }

  action(){
    this.show();
    this.movement();
    //this.gravity();
  }
} 