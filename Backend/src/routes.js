const UsuarioController = require("./controllers/UsuarioController");
const VotacaoController = require("./controllers/VotacaoController");
const CandidatoController = require("./controllers/CandidatoController");
const VotoController = require("./controllers/VotoController");

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

routes.get("/votacoes", autenticarToken, VotacaoController.index);

routes.get("/votacao", autenticarToken, VotacaoController.show);

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

// Rotas de Candidato
routes.post(
  "/criarCandidato",
  autenticarToken,
  verificarAdmin,
  CandidatoController.store
);

routes.put(
  "/alterarCandidato",
  autenticarToken,
  verificarAdmin,
  CandidatoController.update
);

routes.delete(
  "/deletarCandidato",
  autenticarToken,
  verificarAdmin,
  CandidatoController.delete
);

// Rotas de Voto
routes.post("/criarVoto", autenticarToken, VotoController.store);

routes.delete("/deletarVoto", autenticarToken, VotoController.delete);

routes.get("/listaVotos", autenticarToken, VotoController.index);

module.exports = routes;
