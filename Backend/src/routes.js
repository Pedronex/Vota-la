const UsuarioController = require("./controllers/UsuarioController");
const VotacaoController = require("./controllers/VotacaoController");
const { autenticarToken } = require("./middlewares/autenticarToken");
const { verificarAdmin } = require("./middlewares/verificarAdmin");

const { Router } = require("express");

const routes = Router();

// Rotas de Usuario
routes.get("/", (req, res) => {
  res.send("Servidor está ligado");
});

routes.post("/login", UsuarioController.show);
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
routes.post(
  "/criarVotacao",
  autenticarToken,
  verificarAdmin,
  VotacaoController.store
);

routes.get("/votacoes", VotacaoController.index);

routes.get("/votacao", VotacaoController.show);

routes.put(
  "/alterarVotacao",
  autenticarToken,
  verificarAdmin,
  VotacaoController.update
);

routes.delete(
  "/deletarVotacao",
  autenticarToken,
  verificarAdmin,
  VotacaoController.delete
);

module.exports = routes;
