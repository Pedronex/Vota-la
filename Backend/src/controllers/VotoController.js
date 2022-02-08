const servico = require("../services/VotoService");

module.exports = {
  async index(req, res) {
    const { idVotacao } = req.query;

    if (isNaN(idVotacao)) {
      return res.status(400).json({ erro: "Tipo de id Inválido!" });
    }

    const resultado = await servico.index(Number(idVotacao));

    if (resultado?.erro) {
      return res.status(400).json(resultado);
    } else {
      return res.json(resultado);
    }
  },
  async store(req, res) {
    const { id } = req;
    const { idCandidato, idVotacao } = req.body;

    if (isNaN(idCandidato) || isNaN(idVotacao)) {
      return res.status(400).json({ erro: "Tipo de id Inválido!" });
    }

    const resultado = await servico.store(
      id,
      Number(idVotacao),
      Number(idCandidato)
    );

    if (resultado?.erro) {
      return res.status(400).json(resultado);
    } else {
      return res.json(resultado);
    }
  },
  async delete(req, res) {
    const { id } = req;
    const { idVotacao } = req.query;

    if (isNaN(idVotacao)) {
      return res.status(400).json({ erro: "Tipo de id Inválido!" });
    }

    const resultado = await servico.delete(id, Number(idVotacao));

    if (resultado?.erro) {
      return res.status(400).json(resultado);
    } else {
      return res.json(resultado);
    }
  },
};
