const UsuarioController = require("./controllers/UsuarioController");
const { autenticarToken } = require("./middlewares/autenticarToken");
const { verificarAdmin } = require("./middlewares/verificarAdmin");

const { Router } = require("express");

const routes = Router();

// Rotas de Usuario
routes.get("/", (req, res) => {
  res.send("Servidor está ligado");
});

routes.post("/login", UsuarioController.index);
routes.post(
  "/registrar",
  autenticarToken,
  verificarAdmin,
  UsuarioController.store
);
routes.put(
  "/alterarSenha",
  autenticarToken,
  verificarAdmin,
  UsuarioController.update
);

// Rotas de Votação

module.exports = routes;
