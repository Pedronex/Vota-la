const servico = require("../services/CandidatoService");

module.exports = {
  async store(req, res) {
    const { nome, cargo, localizacao } = req.body;
    const { id } = req.query;

    if (isNaN(id)) {
      return res.status(400).json({ erro: "Tipo de id Inválido!" });
    }

    const resultado = await servico.store(nome, cargo, localizacao, Number(id));

    if (resultado?.erro) {
      return res.status(400).json(resultado);
    } else {
      return res.json(resultado);
    }
  },
  async update(req, res) {
    const { id, nome, cargo, localizacao } = req.body;
    if (isNaN(id)) {
      return res.status(400).json({ erro: "Tipo de id Inválido!" });
    }

    const resultado = await servico.update(id, nome, cargo, localizacao);

    if (resultado?.erro) {
      return res.status(400).json(resultado);
    } else {
      return res.json(resultado);
    }
  },
  async delete(req, res) {
    const { id } = req.query;
    if (isNaN(id)) {
      return res.status(400).json({ erro: "Tipo de id Inválido!" });
    }

    const resultado = await servico.delete(Number(id));
    if (resultado?.erro) {
      return res.status(400).json(resultado);
    } else {
      return res.json(resultado);
    }
  },
};
