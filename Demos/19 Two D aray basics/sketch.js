// 2D aray basics
// Muhammad Ismail
// 4/15/2026

// 0 (black)  255(white)
// grid is 6 x 5

// Global Varables
let grid = [];
let rows = 5; // chuse a random number of rows
let cols = 6; // chouse a random number of cols
let tileSize = 150;
let winStatus;
let slectType = 0; // 0 → crows, 1 → box


function makeGrid(grid){
  // this function will make a random custom grid
  let color;

  for(let y = 0; y < rows; y++){ // y: 0, 1, 2, 3, 4

    // add new aray to the manin aray
    grid.push([]);
    for(let x = 0; x < cols; x++){// x: 0, 1, 2, 3, 4, 5
      //adding numbers into the sub aray
      if(int(random(0,2)) === 1) color = 255;
      else color = 0;
      grid[y].push(color);
    }
  }

  

}

function setup() {
  createCanvas(cols*tileSize, rows*tileSize);
  makeGrid(grid);
  textSize(30);
  
}

function draw() {
  background(200);
  winStatus = winCondition()
  renderGrid(grid, rows, cols, tileSize);
  if(!winStatus){
    slection();
    textSize(30);
    fill(255, 0, 0);
    text(getCurrentX() + ", " +  getCurrentY(), mouseX, mouseY);
  }
  if(winStatus) win();
  
}

function flip(x, y){
  // flips a tile at x,y
  if(grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}

function mousePressed(){
  if(!winStatus){
      // only do a flip if mouse is on the canves
    if(mouseX < width && mouseY < height){
      let x = getCurrentX();
      let y = getCurrentY();

      if(keyIsDown(SHIFT)){
        // ALWAYS FLIP THE CURENT TILE
        flip(x, y);
      }
      
      else if(slectType){
        // For slection type box

        flip(x,y);

        // If they exist flip in square patren
        if(x+1 <= cols-1) flip(x+1, y);
        if(y+1 <= rows-1) flip(x, y+1);
        if(y+1 <= rows-1 && x+1 <= cols-1) flip(x+1, y+1);
      }

      else{
        // For crows patren

        flip(x, y);

        // If they exist:
        // flip the cordinal (NSEW) naigbours
        if(x-1 >= 0) flip(x-1, y);
        if(x+1 <= cols-1) flip(x+1, y);
        if(y-1 >= 0) flip(x, y-1);
        if(y+1 <= rows-1) flip(x, y+1);
        
      }
      
    }
  }
}

function slection(){
  // this function will tell me all boxes effected
  let x = getCurrentX(); // *tileSize is the location
  let y = getCurrentY();

  fill(0,255,0, 99);
  rect(x*tileSize, y *tileSize, tileSize);


  if(keyIsDown(SHIFT)){
    // only the curent postion will be displayed 
  }

  else if(slectType){
    // Box slection mood
    
    // If they exist show them
    if(x+1 <= cols-1) rect((x+1) *tileSize, y*tileSize, tileSize);
    if(y+1 <= rows-1) rect(x*tileSize, (y+1) *tileSize, tileSize);
    if(y+1 <= rows-1 && x+1 <= cols-1) rect((x+1) *tileSize, (y+1) *tileSize, tileSize);
     
  }
  


  else{
    // Crows slection mood
    if(x-1 >= 0) rect((x-1) *tileSize, y *tileSize, tileSize);
    if(x+1 <= cols-1) rect((x+1) *tileSize, y *tileSize, tileSize);
    if(y-1 >= 0) rect(x *tileSize, (y-1) *tileSize, tileSize);
    if(y+1 <= rows-1) rect(x *tileSize, (y+1) *tileSize, tileSize);
  }
}

function keyPressed(){
  if(key === ' '){
    //Changing slection type based on the space bar being pressed
    if(slectType) slectType = 0;
    else slectType = 1;
  }
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

function winCondition(){
  // This function checks if the cells are the same color


  // This has a bug where if the rows are the same it give a win
  // so if row 1 was all black and row 2 was all white it woud be win 
  // let previous;
  // let current;
  // let count = 0;
  // for(let y = 0; y < rows; y++){ // y: 0, 1, 2, 3, 4
  //   for(let x = 0; x < cols; x++){// x: 0, 1, 2, 3, 4, 5
  //     if(x > 0){
  //       previous = current;
  //       current = grid[y][x];

  //       if(current === previous) count ++;
  //     }
  //     else current = grid[y][x];

  //   }
  // }
  // if(count < rows * (cols-1)) return false;
  // return true;

  let first = grid[0][0];

  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){
      //compares each cell to the first one
      if(grid[y][x] !== first){
        return false;
      }
    }
  }
  return true;

  
}

function win(){
  strokeWeight(3);
  fill(0,255,0);
  text("You won", width/2, height/2);
  noStroke();
}