// Image Minapulation
// Muhammad Ismail
// 4/24/2026
// Working with images
// translation b/w 2D and 1D indices
// Part 2: using videos

// Globale Varables
let myImage;
let myVideo;

function preload(){
  // called BEFOR SETUP. Won't conclude.
  // Until all loads are complete.
  myImage = loadImage("assets/nuit.jpg"); //chip.png
}

function setup() {
  createCanvas(myImage.width, myImage.height);
  //createCanvas(640,480);
  pixelDensity(1); // keeps imgs unform look
  noLoop();
  
}

function draw() {
  background(255);
  image(myImage, 0,0);  //STILL IMAGE

  // access and modify the pixels on the Canvas
  loadPixels(); //dumps data from canvas into array
  //majorityColor();
  //gOutRight();
  fiveColorPosterize();
  updatePixels();
  
}

function majorityColor(){
  // This function changes all the colrs to the mijorty colors 
  for(let i = 0; i < pixels.length; i+=4){
    let r = pixels[i];
    let g = pixels[i+1];
    let b = pixels[i+2];
    let m = max(r,g,b);

    if(m === b){
      r = 0; g = 0; b = 255;
    }
    else if(m === g){
      r = 0; g = 255; b = 0;
    }
    else {
      r = 255; g = 0; b = 0;
    }

  

    stePixelOneD(i,r,g,b);
  }
} 

function gOutRight(){

  for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
      if(x >= width/2){
        let index = ((y*width) +x) *4;
        let r = pixels[index];
        let b = pixels[index+2];
        stePixel(x,y,r,0,b);
      }
    }
  }

}

function fiveColorPosterize(){
  for(let i = 0; i < pixels.length; i+=4){
    let r = pixels[i];
    let g = pixels[i+1];
    let b = pixels[i+2];
    let avg = (r+g+b)/3;

    if(avg <= 255 && avg >= 205){
      r = 170; g = 230; b = 220;
    }
    else if(avg <= 204 && avg >= 155){
      r = 105; g = 150; b = 210;
    }
    else if(avg <= 154 && avg >= 105){
      r = 120; g = 180; b = 60;
    }
    else if(avg <= 104 && avg >= 55){
      r = 130; g = 30; b = 130;
    }
    else{
      r = 90; g = 10; b = 50;
    }
    stePixelOneD(i, r,g,b);
  }
}

function horizontalMirror(){
  let rightSide = [];
  for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
      if(x > width/2){
        let i = ((y*width) +x) *4;
        let r = pixels[i];
        let g = pixels[i+1];
        let b = pixels[i+2];
        let a = pixels[i+3];
        rightSide.push(r,g,b,a);
      }
    }
  }
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