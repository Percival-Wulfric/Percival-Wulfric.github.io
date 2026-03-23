// The 60 Minute Price Scanner
// Muhammad Ismail
// 3/23/2026

// Globle
let items = [];
let provinces = new Map();
let currentProv = "SK";

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Phase 1
  // Creating the Iventory/Objects
  for (let i = 1; i<=20; i++){
    items.push(
      {
        x:int(random(0, width - 60)), y:int(random(0, 100)), speedY:int(random(1,3)), 
        basePrice:int(random(10, 100)), name: "Item "+ i
      }
    );
  }

  // Phase 2
  provinces.set("SK", {tax: 1.11});
  provinces.set("AB", {tax: 1.05});
  provinces.set("ON", {tax: 1.13});
}

// Phase 4
function keyPressed(){
  if(keyCode === 49) currentProv = "SK";
  if(keyCode === 50) currentProv = "AB";
  if(keyCode === 51) currentProv = "ON";
}

function draw() {
  background(255);

  // Phase 3
  let rules = provinces.get(currentProv);
  for (let i in items){
    items[i].y += items[i].speedY;
    if(items[i].y > height) items[i].y = 0;
    rect(items[i].x, items[i].y, 60, 40);
    text(items[i].name, items[i].x + 10, items[i].y + 15);
    let totalPrice = int(items[i].basePrice * rules.tax);
    text(totalPrice, items[i].x + 20, items[i].y + 30);
  }
}
