const io = new Server(server);

io.on('connection', (socket) => {
  // A player just connected!
  // socket.id is their unique ID
  console.log(socket.id);
  // e.g. "xK2mP9vQ4rLw"

  socket.on('disconnect', () => {
    console.log('Player left');
  });
});

socket.on('playerMoved', (data) => {
  // data = { x: 142, y: 87 }
  console.log(
    socket.id,
    'moved to',
    data.x, data.y
  );

  // Save their position
  players[socket.id].x = data.x;
  players[socket.id].y = data.y;
});