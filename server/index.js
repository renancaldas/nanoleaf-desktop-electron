const config = require("./config");
const app = require("express")();
const httpServer = require("http").createServer(app);

const io = require("./socketio")(httpServer);
const express = require("./express")(app);

httpServer.listen(config.PORT, () => {
  console.log(`::: Server ::: listening on port ${config.PORT}`);
});

module.exports = {
  config,
};
