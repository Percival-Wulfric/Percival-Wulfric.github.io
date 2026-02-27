// MouseWheel, Map, Lerp
// Muhammad Ismail
// 2/26/2026

// Learp means linear interpitaion


let x, y;

let x_1, y_1;

let x_2, y_2;

let diamiter = 50;

let w = 10;
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  x_1 = width/2;
  y_1 = height/2;
  x_2 = width/2;
  y_2 = height/2;
  strokeWeight(w);
  noFill();
}

function mouseWheel(event){
  // negative: scrolll up -100, -200, -300
  // positive: scroll down 100, 200, 300
  if(event.delta < 0){
    // UP
    diamiter += 5;
  }
  else{
    // DOWN
    diamiter = max(5, diamiter-5);
  }
  if(w === 10){
    w = 1;
    strokeWeight(w);
  }
  else{
    w= 10;
    strokeWeight(w);
  }
}

function draw() {
  background(220, 90);
  x = lerp(x, mouseX, 0.15);
  y = lerp(y, mouseY, 0.15);

  x_1 = lerp(x_1, mouseX, 0.05);
  y_1 = lerp(y_1, mouseY, 0.05);

  x_2 = lerp(x_2, mouseX, 0.03);
  y_2 = lerp(y_2, mouseY, 0.03);

  let r = map(x, 0, width, 0 ,255);
  let g = map(y, 0, height, 0, 255);
  let b = 90;

  //line(x,y,mouseX, mouseY);

  stroke(r,g,b);
  circle(x,y,diamiter);

  stroke(r,g - 40,b -10);
  rect(x_1, y_1, diamiter, diamiter+10);

  stroke(r - 40,g,b -2);
  square(x_2, y_2, diamiter + 20)
}
