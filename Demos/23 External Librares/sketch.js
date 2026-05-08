// External Librares
// Muhammad Ismail
// 3/8/2026

// Globale Varables
let gui, b,s;

function setup() {
  createCanvas(300, 300);
  gui = createGui();
  b = createButton("Button", 50, 50);
  s = createSlider("Slider", 10, 150);
}

function draw() {
  background(220);
  drawGui();
  if(b.isPressed) {
    print(b.label + " is pressed.");
  }
  if (s.isChanged) {
    print(s.label + " = " + Math.floor(s.val * 100));
  }
}
