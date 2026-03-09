// Perlin Noise Project (Terrain Generation)
// Muhammad Ismail
// 3/3/2026
//
// This will make randomly genrated terrain
// Pan throught the terrain
// Have a line that indicates the avrage height of the triangles
// You can use the left and right arow keys to make the rectangles bigger or smaller
// You can also see the peak which is identifyed by the flag

// Globle Variable's
let rectangle_width = 1;
let ogStartTime, startTime;
let peakX, peak_y;
let offset = 0;
let avrageHeght = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  ogStartTime = random(100);
}

function keyPressed() {
  // This is a function that the p5.js library understands
  // It will increase and decrease the rectangle width

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
  triangle(x + 3, y, x+3, y+12, x+3+11, y +5);
}

function generateTerrain(){
  // w → is the width of the rectangles
  // This function will genrate terain

  noStroke();

  // All the heights used
  let heights = 0;
  let numRect = 1;

  // Find peak + record peak
  peakX = 0;
  peak_y = 0;

  startTime = ogStartTime + offset;
  let rectHeight = 0;
  let timeChange = 0.01;

  for (let x = 0; x < width; x += rectangle_width){
    // This loop makes each rectangle
    rectHeight = map(noise(startTime), 0, 1, 0, height*0.95);
    if (peak_y < rectHeight){
      peak_y = rectHeight;
      peakX = x;
    }
    rect(x, height, rectangle_width, rectHeight*-1);
    startTime += timeChange;

    heights += rectHeight;
    numRect++;
    
  }

  // Avrage Height
  avrageHeght = heights/numRect;
}

function draw() {
  background(220);
  generateTerrain();
  drawFlag(peakX, height - peak_y - 30);
  offset += 0.01;
  stroke(255, 0, 0); strokeWeight(2);
  line(0, height - avrageHeght, width, height - avrageHeght);;
}
