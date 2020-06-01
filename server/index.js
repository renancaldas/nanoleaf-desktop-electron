const config = require('./config');
const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);
const api = require('./api');

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  console.log(`::: Server ::: new socket connected: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`::: Server ::: socket disconnected: ${socket.id}`);
  });

  socket.on('getAllLightControllerInfo', () => {
    console.log(`::: Server ::: getAllLightControllerInfo`);

    api
      .getAllLightControllerInfo()
      .then((response) => socket.emit("getAllLightControllerInfo", response));
  });
});

httpServer.listen(3001, () => {
  console.log('::: Server ::: listening on *:3001');
});

module.exports = {
  config,
};
