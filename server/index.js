const config = require("./config");
const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);
const api = require("./api");

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

io.on("connection", (socket) => {
  console.log(`::: Server ::: new socket connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`::: Server ::: socket disconnected: ${socket.id}`);
  });

  // Redux Actions
  socket.on("CONTROLLER_INFO_REQUEST", () => {
    console.log(`::: Server ::: CONTROLLER_INFO_REQUEST`);

    api.getAllLightControllerInfo().then((response) =>
      io.sockets.emit("dispatch", {
        action: "CONTROLLER_INFO_RESPONSE",
        payload: response,
      })
    );
  });

  socket.on("TOGGLE_LIGHT_REQUEST", (value) => {
    console.log(`::: Server ::: TOGGLE_LIGHT_REQUEST ${value}`);

    api.toggleLight(value).then((response) =>
      io.sockets.emit("dispatch", {
        action: "TOGGLE_LIGHT_RESPONSE",
        payload: response,
      })
    );
  });

  socket.on("SET_BRIGHTNESS_REQUEST", (value) => {
    console.log(`::: Server ::: SET_BRIGHTNESS_REQUEST ${value}`);

    api.setBrightness(value).then((response) =>
      io.sockets.emit("dispatch", {
        action: "SET_BRIGHTNESS_RESPONSE",
        payload: response,
      })
    );
  });

  socket.on("SET_HUE_REQUEST", (value) => {
    console.log(`::: Server ::: SET_HUE_REQUEST ${value}`);

    api.setHue(value).then((response) =>
      io.sockets.emit("dispatch", {
        action: "SET_HUE_RESPONSE",
        payload: response,
      })
    );
  });

  socket.on("SET_SATURATION_REQUEST", (value) => {
    console.log(`::: Server ::: SET_SATURATION_REQUEST ${value}`);

    api.setSaturation(value).then((response) =>
      io.sockets.emit("dispatch", {
        action: "SET_SATURATION_RESPONSE",
        payload: response,
      })
    );
  });

  socket.on("SET_EFFECT_REQUEST", (value) => {
    console.log(`::: Server ::: SET_EFFECT_REQUEST ${value}`);

    api.setEffect(value).then((response) =>
      io.sockets.emit("dispatch", {
        action: "SET_EFFECT_RESPONSE",
        payload: response,
      })
    );
  });
});

httpServer.listen(3001, () => {
  console.log("::: Server ::: listening on *:3001");
});

module.exports = {
  config,
};
