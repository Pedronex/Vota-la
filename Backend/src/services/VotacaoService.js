const { sign } = require("jsonwebtoken");
const prismaClient = require("../prisma");

module.exports = {
  async index(login, senha) {},

  async store(login, senha, administrador) {},

  async update(login, senha, administrador, ativo) {},

  async delete(id) {},
};
