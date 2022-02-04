const { Router } = require("express");

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Servidor está ligado");
});

module.exports = routes;
