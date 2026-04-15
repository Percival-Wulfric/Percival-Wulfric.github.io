// 2D aray basics
// Muhammad Ismail
// 4/15/2026

// 0 (black)  255(white)
// grid is 6 x 5

// Global Varables
let grid = [
  [0  ,   0,   0, 255,  0 , 255], 
  [255,   0, 255,   0, 255,   0],
  [0  ,   0,   0,   0,   0, 255],
  [255, 255, 255, 255, 255,   0],
  [0  , 255,   0,   0,   0, 255]
]
let rows = grid.length;
let cols = grid[0].length;
let tileSize = 150;

function setup() {
  createCanvas(cols*tileSize, rows*tileSize);
  //noStroke();
  textSize(30);
}

function draw() {
  background(200);
  renderGrid(grid, rows, cols, tileSize);
  textSize(30);
  fill(255, 0, 0);
  text(getCurrentX() + ", " +  getCurrentY(), mouseX, mouseY);
  
}

function flip(x, y){
  // flips a tile at x,y
  if(grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}

function mousePressed(){
  flip(getCurrentX(), getCurrentY())
}

function renderGrid(grid, rows, cols, tileSize){
  // Needs the 2D aray grid, the number of rows, and cols
  // Tile size is needed to arange the squers

  // interpret the data stored in 2D array (grid) and
  // draw a matrix of squares to reflect ir
  

  for(let y = 0; y < rows; y++){ // y: 0, 1, 2, 3, 4
    for(let x = 0; x < cols; x++){// x: 0, 1, 2, 3, 4, 5
      fill(grid[y][x]);
      rect(tileSize*x, tileSize*y, tileSize);
    }
  }
}

function getCurrentX(){
  // Determent the current culome position of mouse
  let constranedX = constrain(mouseX, 0, width-1); // returns the mouseX or if it is out of bounds 
  // then it returns the min or max
  return floor(constranedX / tileSize); 
}

function getCurrentY(){
  // Determent the current culome position of mouse
  let constranedY = constrain(mouseY, 0, height-1);
  return floor(constranedY / tileSize);
}