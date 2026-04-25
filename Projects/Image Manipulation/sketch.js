// Image Minapulation
// Muhammad Ismail
// 4/24/2026
// Working with images
// translation b/w 2D and 1D indices
// Part 2: using videos

// Globale Varables
let myImage;
let myVideo;
let videoOn = 1; // 0 = off, 1 = on
let filter = 0; // 0 to 5 for each efect
let numFilter = 5;

function preload(){
  // called BEFOR SETUP. Won't conclude.
  // Until all loads are complete.
  myImage = loadImage("assets/hand.jpg"); //chip.png
}

function setup() {
  //createCanvas(myImage.width, myImage.height);
  if(videoOn){
    createCanvas(640,480);
    myVideo = createCapture(VIDEO);
    //myVideo.hide();
  }
  
  pixelDensity(1); // keeps imgs unform look

  
}

function draw() {
  background(0);

  if(videoOn) image(myVideo, 0,0);  //Video
  else image(myImage, 0,0);  //STILL IMAGE

  // access and modify the pixels on the Canvas
  loadPixels(); //dumps data from canvas into array

  if(filter === 0) grayscale();
  else if(filter === 1)textImage();
  else if(filter === 2) majorityColor();
  else if(filter === 3) gOutRight();
  else if(filter === 4) fiveColorPosterize();
  else if(filter === 5) horizontalMirror();

  updatePixels();
  
}

function keyPressed(){
  // If the key is pressed (p5 og)

  if(key === " "){
    filter++;
    if(filter > numFilter) filter = 0;
  }

  if(key === "v"){
    videoOn++;
    if(videoOn > 1) videoOn = 0;
  }
}

function textImage(){
  let scaleAmount = 3; 
  textSize(scaleAmount);
  fill(255);

  for(let x = 0; x<width; x+= scaleAmount){
    for(let y = 0; y < height; y += scaleAmount){
      let index = ((y*width) +x) *4;
      //fill(pixels[index], pixels[index+1], pixels[index+2], 50);
      let avg = getAvg(x,y); //0-255
      if(avg> 210) text("%",x,y);
      else if(avg>170) text("T",x,y);
      else if(avg>130) text("x",x,y);
      else if(avg>90) text(":",x,y);
      else if(avg>45) text(".",x,y);
    }
  }

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

function getAvg(x,y){
  // returns the avridge intensitey of rgb
  // at (x,y).
  let index = ((y*width) +x) *4;
  let r = pixels[index];
  let g = pixels[index+1];
  let b = pixels[index+2];
  return (r+g+b) /3;
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
  // This function will miror the img on the right to the left
  for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
      if(x > width/2){
        let i = ((y*width) +x) *4;
        let r = pixels[i];
        let g = pixels[i+1];
        let b = pixels[i+2];

        stePixel(width - x,y,r, g,b);
        
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