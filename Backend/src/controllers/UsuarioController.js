const servico = require("../services/UsuarioService");
const crypto = require("crypto");

module.exports = {
  async index(req, res) {
    const resultado = await servico.index();

    return res.json(resultado);
  },
  async show(req, res) {
    const { login = "", senha = "" } = req.body;

    const cryptoSenha = crypto.createHash("md5").update(senha).digest("hex");

    const resultado = await servico.show(login, cryptoSenha);
    return res.json(resultado);
  },

  async store(req, res) {
    const { login, senha, admin = false } = req.body;

    const cryptoSenha = crypto.createHash("md5").update(senha).digest("hex");

    const resultado = await servico.store(login, cryptoSenha, admin);

    if (resultado?.erro) {
      return res.status(400).json(resultado);
    } else {
      return res.json(resultado);
    }
  },

  async update(req, res) {
    const { login, senha, admin, ativo } = req.body;
    let cryptoSenha;
    if (senha)
      cryptoSenha = crypto.createHash("md5").update(senha).digest("hex");

    const resultado = await servico.update(login, cryptoSenha, admin, ativo);

    if (resultado?.erro) {
      return res.status(400).json(resultado);
    } else {
      return res.json(resultado);
    }
  },

  async delete(req, res) {
    const { id } = req;

    const resultado = await servico.delete(id);

    return res.json(resultado);
  },
};
