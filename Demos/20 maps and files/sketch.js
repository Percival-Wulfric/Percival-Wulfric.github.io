// Working with maps and files
// Muhammad Ismail
// 4/21/2026

// Globale varables
let textFile;
let imgFile, rows, cols, colorMap; 


function preload() {
  textFile = loadStrings("assets/info.txt");
  imgFile = loadStrings("assets/colorImage.txt");
}
  
function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noStroke();

  // Construct the Map of Colors
  colorMap = new Map([
    ["b", "black"],
    ["w", color(255)],
    ["r", "red"],
    ["l", "brown"],
    ["p", "purple"]
  ]);
  
  // Determin the # of rows and cols
  rows = imgFile.length;
  cols = imgFile[0].length;
}

function draw() {
  processText();
  background(220);
  drawImg();
  
}

function drawImg(){
  // reaad thru are text info and consturuct an image
  let pixelSize = 56;
  for(let y = 0; y < rows; y++){
    let currentRow = imgFile[y];
    for(let x = 0; x < cols; x++){
      let currentKey = currentRow[x];
      fill(colorMap.get(currentKey));
      square(x*pixelSize, y*pixelSize, pixelSize);
    }
  }

}
function processText(){
  // look at 3 diffrent ways to split up
  // larger strings into words, or charcters
  // splite() and ... spread syntax
  print("SPLIT INTO WORDS");
  let splitWords = textFile[0].split(" ");
  print(splitWords);

  print("SPLIT INTO CHARCTERS");
  let splitChar = textFile[0].split("");
  print(splitChar);

  print("SPREAD INTO CHARACTERS");
  let spreadChars = [...textFile[2]];
  print(spreadChars);
}