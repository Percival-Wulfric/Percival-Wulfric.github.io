// Planets and Moons
// Muhammad Ismail
// 3/26/2026

// Globle Variables
let myPlanet;

// On your own challange
// Add some style to the planet/moons (color, trail effect)
// Stars in the background → create Star class, use array
// Multaple Planits.. which plait gets the moon
// or 
// somthing cool you devise of your own

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noStroke();
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(0, 10);
  myPlanet.display();
}

function mousePressed(){
  // Reguler click → add moon
  // SHIFT click → destoy and reset moon
  if(keyIsPressed && keyCode === SHIFT){
    myPlanet = new Planet(width/2, height/2);
  }

  else{
    myPlanet.createMoon();
  }
}

function keyPressed(){
  if(keyCode !== SHIFT){
    myPlanet.x = mouseX;
    myPlanet.y = mouseY;
  }
}

class Planet{
  // Consttuctor
  constructor(x,y){
    this.x = x; this.y = y; this.s = 100;
    this.moons = [];
  }

  // Class Methods
  createMoon(){
    this.moons.push(new Moon());
  }

  display(){
    // Draw the planit + all its moons
    circle(this.x, this.y, this.s);

    // For the moons
    for (let m of this.moons){
      m.update(this.x, this.y);

    }
  }
}

class Moon{
  //Consttuctor
  constructor(){
    this.speed = random(1,5); // angular speed or speed of rotation
    this.angle = 0;
    this.orbitRadius = random(150, 500);
    this.s = random(10,50);
    this.color = [random(0,255), random(0, 255), random(0,255)];
  }

  // Class Methods
  move(){
    this.angle += this.speed;
  }

  display(x, y){
    push();
    translate(x,y);
    rotate(this.angle);
    fill(this.color[0],this.color[1], this.color[2]);
    circle(this.orbitRadius, 0, this.s);
    pop();
  }

  update(x,y){
    // Helper method to handle all internal
    // method calls
    this.move();
    this.display(x,y);
  }
}