// Image Minapulation
// Muhammad Ismail
// 4/22/2026
// Working with images
// translation b/w 2D and 1D indices
// Part 2: using videos

// Globale Varables
let myImage;

function preload(){
  // called BEFOR SETUP. Won't conclude.
  // Until all loads are complete.
  myImage = loadImage("assets/aviator.png"); //chip.png
}

function setup() {
  createCanvas(myImage.width, myImage.height);
  pixelDensity(1); // keeps imgs unform look
}

function draw() {
  background(220);
  image(myImage, 0,0);

  // access and modify the pixels on the Canvas
  loadPixels(); //dumps data from canvas into array
  //boost();
  grayscale();
  updatePixels();
}

function boost(){
  // brigtning filter
  let boostAmount = map(mouseX, 0, width, -100, 100);
  for(let i = 0; i < pixels.length; i+=4){
    let r = pixels[i] + boostAmount;
    let g = pixels[i+1] + boostAmount;
    let b = pixels[i+2] + boostAmount;
    stePixelOneD(i,r,g,b);
  }
}

function getAvg(x,y){
  // returns the avridge intensitey of rgb
  // at (x,y).
  let index = ((y*width) +x) *4;
  let r = pixels[index];
  let g = pixels[index+1];
  let b = pixels[index+2];
  return (r+g+b) /3;
}

function grayscale(){
  // use the avradge intensitey of each pixel
  // to produse a grayscale img

  for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
      let avg = getAvg(x,y);
      stePixel(x,y,avg, avg,avg);
    }
  }
}

function stePixel(x,y,r,g,b){
  // x,y → pixel location
  // r,g,b → color values
  let index = ((y*width) +x) *4;
  stePixelOneD(index, r,g,b)
}

function stePixelOneD(pos, r, g, b){
  // pos → 1D location of the pixel's red component
  // r,g,b → new color values  (0-255) for the pixel

  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}