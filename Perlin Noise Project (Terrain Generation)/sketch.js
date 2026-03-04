// Perlin Noise Project (Terrain Generation)
// Muhammad Ismail
// 3/3/2026
//
// This will make randomly genrated terrain

// Globle Variable's
let rectangle_width = 2;
let ogStartTime, startTime;
let peak_x, peak_y;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0);
  ogStartTime = random(100);
}

function keyPressed() {
  if (keyCode === 39) {
    rectangle_width++;
  }

  if (keyCode === 37) {
    rectangle_width -= 1;
    if (rectangle_width < 1){
      rectangle_width = 1;
    }
  }
}

function drawFlag(x, y){
  // This function makes a flag at cordinates x,y
  rect(x,y, 3, 30);
  triangle(x + 3, y, x+3, y+12, x+3+11, y +5 );
}

function generateTerrain(){
  // w → is the width of the rectangles
  // This function will genrate terain
  peak_x = 0;
  peak_y = 0;

  startTime = ogStartTime;
  let rectHeight = 0;
  let timeChange = 0.01;

  for (let x = 0; x + rectangle_width < width; x += rectangle_width){
    // This loop makes each rectangle
    rectHeight = map(noise(startTime), 0, 1, 0, height*0.95);
    if (peak_y < rectHeight){
      peak_y = rectHeight;
      peak_x = x;
    }
    rect(x, height, rectangle_width, rectHeight*-1);
    startTime += timeChange;
  }

  
}

function draw() {
  background(220);
  generateTerrain();
  fill(255,0,0);
  drawFlag(peak_x, height - peak_y - 30);
  fill(0);
}
