const UsuarioController = require("./controllers/UsuarioController");
const { Router } = require("express");

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Servidor está ligado");
});

routes.post("/login", UsuarioController.index);
routes.put("/register", UsuarioController.store);

module.exports = routes;
