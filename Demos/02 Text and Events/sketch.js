// Text and Events
// Muhammad Ismail
// Feb 9, 2026

// Global Variable Section
let textShade = 255;
let textScale = 40;
let bgcolor = "grey";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function displayMouse(){
  // This function reports some
  // system variables related to mouse
  // onto the screen via text()

  // mouseX, mouseY ➡ Store Current mouse pos
  // mouseIsPressed ➡ boolean: boutton pressed?
  //   Good for mouseHELD events....

  // Try using mouseIsPressed to change size
  // Becouse draw() runs 60 times/s, usually
  // mouseIsPressed will be checked 4-10 times
  // per click event

  // if(mouseIsPressed){
  //   textScale = int(random(10,100));
  // }

  textSize(textScale); 
  fill(textShade);
  text(mouseX + ", " + mouseY + ", " + mouseIsPressed + ", " +
    mouseButton, mouseX, mouseY);
}

function dispalyKeyboard(){
  // we'll use this function to inspect
  // some of p5's keyboard capabilities
  //
  // keyIsPressed  ➡ is a keyboard button press?
  // key           ➡ Last pressed key (non-coded)
  // keyCode       ➡ last pressed key AS A NUMBER

  if(keyIsPressed){
    // good for keyHELD events.....
    // somting was pressed. Next , check which key/keyCode
    if(key = " "){
      bgcolor = color(random(255), random(255), random(255));
    }
  }
  textSize(30);
  textAlign(CENTER, CENTER);
  let t = keyIsPressed + ", " + key + ", " + keyCode;
  text(t, width/2 , height/2);
}

function keyPressed(){
  // called automaticly ONCE per keydown event
  if(keyCode === 65){
    bgcolor = color(random(255), random(255), random(255));
  }
}

function draw() {
  // goal: Keep draw() tidy!
  background(bgcolor);
  //displayMouse();
  dispalyKeyboard();

}


function mousePressed(){
  // this is a p5 function
  // automaticaly called exactly ONCE
  // per mousePress (on down action)
  textShade = int(random(0,255));
}
