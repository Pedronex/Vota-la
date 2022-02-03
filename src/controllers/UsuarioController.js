const servico = require("../services/UsuarioService");
const crypto = require("crypto");

module.exports = {
  async index(req, res) {
    const { login = "", senha = "" } = req.body;

    const cryptoSenha = crypto.createHash("md5").update(senha).digest("hex");

    const resultado = await servico.index(login, cryptoSenha);

    return res.json(resultado);
  },

  async store(req, res) {
    const { login, senha, perfil = 1 } = req.body;

    const cryptoSenha = crypto.createHash("md5").update(senha).digest("hex");

    const resultado = await servico.store(login, cryptoSenha, perfil);

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
