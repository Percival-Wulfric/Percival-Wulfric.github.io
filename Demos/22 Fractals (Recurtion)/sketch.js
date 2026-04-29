// Fractals 
// Muhammad Ismail
// 4/29/2026

// Recurtion being used for visuals

// Globals

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
}

function draw() {
  background(0);
  luckySquare(width/2, height/2, 600);
}

function centerCircle(x, y, d){
  // recursively draw concentric circles
  // Base Case...implicit
  if(d > 10){
    //recursive case
    circle(x,y,d);
    centerCircle(x,y,d * 0.95);
  }

  //if we skip the recursive case, we 
  //unravel one level (base case)
}

function circleFractal(x, y, d){
  // makes a circal fractal
  noFill();
  if(d > 1){
    circle(x,y,d);
    circleFractal(x - d/2, y, d/2);
    circleFractal(x + d/2, y, d/2);
    circleFractal(x, y+d/2, d/2);
    //circleFractal(x, y-d/2, d/2);
  }
  //base case is implicit
}

function luckySquare(x,y,s){
  rectMode(CENTER);
  noFill();

  if(s >20){
    let r = map(x, 0, width, 0, 255);
    let g = map(y, 0, height, 0, 255);
    let b = map(x, 0, width, 255, 0);
    stroke(r,g,b);

    if(dist(x,y,mouseX, mouseY) <= s/2){
      strokeWeight(10);
    }
    else strokeWeight(4);

    push();
    translate(x,y);
    rotate(radians(frameCount));
    square(0,0,s);
    pop();

    luckySquare(x-s/2, y-s/2, s*0.45);   
    luckySquare(x-s/2, y+s/2, s*0.45);  
    luckySquare(x+s/2, y-s/2, s*0.45);  
    luckySquare(x+s/2, y+s/2, s*0.45);   
  }
}

function setFill(x,y,s){
  //set an interactive fill value
  //based on proximity and scale
  if(dist(mouseX, mouseY, x,y) < s/2){
    // fill(255,0,0);
    strokeWeight(5);
  }
  else strokeWeight(1);//noFill();
}