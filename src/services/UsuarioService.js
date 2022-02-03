const { sign } = require("jsonwebtoken");
const prismaClient = require("../prisma");

module.exports = {
  async index(login, senha) {
    const usuario = await prismaClient.usuario.findFirst({
      select: {
        perfil: true,
      },
      where: {
        login,
        senha,
      },
    });
    if (!usuario) {
      return { erro: "Usuário ou senha inválido!" };
    }
    return { login, perfil: usuario.perfil == 1 ? "Eleitor" : "Administrador" };
  },

  async store(login, senha, perfil) {
    const usuario = await prismaClient.usuario.findFirst({
      select: {
        login,
      },
      where: {
        login,
      },
    });

    if (usuario) {
      return { erro: "Usuário já cadastrado!" };
    } else {
      const resultado = await prismaClient.usuario.create({
        data: {
          login,
          senha,
          perfil,
        },
      });

      const token = sign(
        {
          usuario: {
            login: resultado.login,
            perfil: resultado.perfil,
          },
        },
        process.env.JWT_SECRET,
        {
          subject: resultado.id,
          expiresIn: "1d",
        }
      );

      return {
        token,
        usuario: {
          login: resultado.login,
          perfil: resultado.perfil,
        },
      };
    }
  },

  async delete(id) {
    return prismaClient.usuario.delete({
      where: {
        id,
      },
    });
  },
};
