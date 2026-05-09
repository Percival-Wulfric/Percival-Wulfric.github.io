let socket;

function setup() {
  createCanvas(600, 400);

  // Connect to the server
  socket = io(); // ← that's all!

  socket.on('connect', () => {
    // We're connected!
    console.log(socket.id);
  });

  socket.on('disconnect', () => {
    console.log('Lost connection');
  });
}

function draw() {
  // Move with arrow keys
  if (keyIsDown(LEFT_ARROW))  myX -= 3;
  if (keyIsDown(RIGHT_ARROW)) myX += 3;

  // Tell the server where we are
  socket.emit(
    'playerMoved',   // event name
    { x: myX, y: myY } // the data
  );
}