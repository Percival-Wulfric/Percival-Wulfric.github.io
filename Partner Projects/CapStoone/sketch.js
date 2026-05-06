// Tag Game
// Ayeman & Muhammad
// May 4/26

let player1;

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
    this.x = x;
    this.y = y;
    this.mood = mood;
    this.playerNumber = playerNumber;
    this.speed = 2;
    this.jumpHeight = 3;
  }

  movement(){
    // This function will handle all movement
    if(this.playerNumber === 1){
      if(keyIsDown(LEFT_ARROW)){
        this.x -= this.speed;
        if(this.x < 0 ) this.x = 0;
      }
      if(keyIsDown(RIGHT_ARROW)){
        this.x += this.speed;
        if(this.x > width) this.x = width;
      }
      if(keyIsDown(UP_ARROW)){
        // - is up becous 0 to height
        this.y -= this.jumpHeight;
        if(this.y > height) this.y = height;
      }
      if(keyIsDown(DOWN_ARROW)){
        // If the player has a anilitey to go down they can

      }
    }
  }

  gravity(){
    // This function gives the player gravitey
    
  }
    
  

  show(){
    // this function will display the charcter
    rect(this.x,this.y, 20,20);
  }

  action(){
    this.show();
    this.movement();
  }
} 