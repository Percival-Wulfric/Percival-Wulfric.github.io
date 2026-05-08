// Tag Game
// Ayeman & Muhammad
// May 4/26

// Globale
let player1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  player1 = new player(width/2, height/2, 0, 1);
}

function draw() {
  background(220);
  player1.action();
}

function startMenu(){
  // For the start menue
}

function pauseMenu(){
  // For the pause menu
}

function endScreen(){
  // The end screen for who won
}

function timer(){
  // This function is to make the timer
}

function powerUps(){
  // This function handles overups
}

function tag(){
  // The player tag logic
}

function playerColistions(){
  // To handle any player colistions
}

function platforms(){
  // This function handless all platfor related things
  // Player intractions with platform
  // platform hit boxes


}

class player{
  constructor(x,y,mood, playerNumber){
    this.pos = createVector(x,y); //player position on screen
    this.vel = createVector(0,0); // current speed and direction
    this.grav = createVector(0,0.2); // downwords force
    this.mood = mood;
    this.playerNumber = playerNumber;
    this.jumpHeight = 3;
    this.playerSize = 50;
    this.isJumping = 0; // 0 = not jumping, 1 = is jumping
  }

  movement(){
    // This function will handle all movement
    this.vel.add(this.grav);
    this.pos.add(this.vel);


    if(this.playerNumber === 1){
      if(keyIsDown(LEFT_ARROW)){
        this.vel.x = -3;
      }
      else if(keyIsDown(RIGHT_ARROW)){
        this.vel.x = 3;
      }
      
      else if(keyIsDown(DOWN_ARROW)){
        // If the player has a anilitey to go down they can

      }

      else if(keyIsDown(UP_ARROW)){
        if(!this.isJumping){
          // If not jumping then jump
          this.isJumping = 1;
          this.vel.y = -1;
        }
        this.isJumping = 0;
      }

      else{
        // Stop movemnet if the player is not hiting any keys
        this.vel.x = 0;
      }
    }
    if(this.pos.y > height -this.playerSize){
      this.pos.y = height -this.playerSize;
      this.vel.y = 0;
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