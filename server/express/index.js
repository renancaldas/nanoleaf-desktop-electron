const expressRoutes = (app) => {
  app.get("/", (req, res) => {
    res.send("<h1>Nanoleaf local server</h1>");
  });
};

module.exports = expressRoutes;
