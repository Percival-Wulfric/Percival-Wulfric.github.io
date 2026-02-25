
let side = 0; // 0 → Top 1 → 
let x = 0;
let y = 0;
let speed = 5;

function setup() {
  createCanvas(400, 400);
}

function movement(){
  if( side === 0){
    x += speed; 
    if( width <= x + 50){
      side += 1;
    }
  }
  if( side === 1){
    y += speed; 
    if( height <= y + 50){
      side += 1;
    }
  }
  if( side === 2){
    x -=speed; 
    if(0 <= x - 50){
      side += 1;
    }
  }
  if( side === 3){
    y -= speed; 
    if( height >= y + 50){
      side = 0;
    }
  }

}

function draw() {
  background(220);
  movement();
  rect(x, y, 50, 50);
  text(x, 50, 50);
  
}
