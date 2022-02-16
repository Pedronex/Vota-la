const servico = require("../services/VotacaoService");

module.exports = {
  async index(req, res) {
    const { id } = req;
    console.log(id);
    const resultado = await servico.index(id);

    if (resultado?.erro) {
      return res.status(400).json(resultado);
    } else {
      return res.json(resultado);
    }
  },
  async show(req, res) {
    const { id } = req.query;

    if (Number.isNaN(id)) {
      return { erro: "Tipo de indentificador inválido" };
    }

    const resultado = await servico.show(Number(id));

    if (resultado?.erro) {
      return res.status(400).json(resultado);
    }

    return res.json(resultado);
  },
  async store(req, res) {
    const {
      titulo = "",
      descricao = "",
      inicio = Date.now(),
      fim = Date.now(),
    } = req.body;

    if (!isValidDate(new Date(inicio))) {
      return res
        .status(400)
        .json({ erro: "Formato da data de inicio inválido" });
    }

    if (!isValidDate(new Date(fim))) {
      return res.status(400).json({ erro: "Formato da data de fim inválido" });
    }
    const dataInicio = new Date(inicio);
    const dataFim = new Date(fim);

    const resultado = await servico.store(
      titulo,
      descricao,
      dataInicio,
      dataFim
    );

    if (resultado?.erro) {
      return res.status(400).json(resultado);
    } else {
      return res.json(resultado);
    }
  },
  async update(req, res) {
    const { id, titulo, descricao, inicio, fim } = req.body;
    if (isNaN(id)) {
      return res.status(400).json({ erro: "Tipo de id Inválido!" });
    }

    const resultado = await servico.update(id, titulo, descricao, isValidDate(new Date(inicio)) ? new Date(inicio) : null, isValidDate(new Date(fim)) ? new Date(fim) : null);

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

function isValidDate(text) {
  return text instanceof Date && !isNaN(text);
}
