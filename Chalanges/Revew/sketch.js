// Practice for final
// Muhamamd Ismail
// 6/10/2026

// GLobale Varables
let spirals = [];
let gorillaIdle = [];
let gorillaSwipe = [];
let spiralImages = [];

// Goraila
let gorillaState = 0; // 0-idle
let idleIndex = 0; let swipeIndex = 0;
let gorillaX = 200;

async function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 16; i++){
    if(i < 10){
      spiralImages.push(await loadImage("assets/Circle/circle0"+i+".png"));
    }
    else{
      spiralImages.push(await loadImage("assets/Circle/circle"+i+".png"));
    }
  }
  for (let g = 1; g <= 6; g++){
    gorillaIdle.push(await loadImage("assets/Gorilla/idle"+g+".png"));
    gorillaSwipe.push(await loadImage("assets/Gorilla/swipe"+g+".png"));
  }
}

function keyPressed(){
  if(key === 's'){
    if(gorillaState === 1){
      gorillaState = 0;
    }
    else {
      gorillaState = 1;
    }
  }

  if(keyCode === 37){ //left
    print("left");
    gorillaX -= 5;
  }

  
}

function draw() {
  background(0);

  if(gorillaState === 0){
    image(gorillaIdle[idleIndex], gorillaX, 200);

    if(frameCount%10 === 0){
      idleIndex += 1;
      if(idleIndex > 5){
        idleIndex = 0;
      }
    }
    
  }
  else if (gorillaState === 1){
    image(gorillaSwipe[swipeIndex], gorillaX, 200);
    if(frameCount%10 === 0){
      swipeIndex += 1;
      if(swipeIndex > 5){
        swipeIndex = 0;
      }
    }
  }

  //smoth movement
  if(keyIsPressed && keyCode === 39){
    gorillaX += 5; // right
  }


  // Spiral Code
  for(let i = 0; i < spirals.length; i++){
    s = spirals[i];
    s.display();

    if(s.active === false){ // this object marked for deltion
      spirals.splice(i, 1);
      i--; //rewind i one step. to follow shifting 
    }
  }
}

function mousePressed(){
  spirals.push(new Spiral(mouseX, mouseY));
}


class Spiral{ //frames 0, 1, 2 .... , 15
  constructor(x, y){
    this.pos = createVector(x,y);
    this.frame = 0;
    this.active = true;  //for deleation purposes
  }

  display(){
    if(this.frame > 15){
      this.active = false;
    }

    else{
      image(spiralImages[this.frame], this.pos.x, this.pos.y);
      if(frameCount % 3 === 0){
        this.frame++;
      }
    }
  }
}