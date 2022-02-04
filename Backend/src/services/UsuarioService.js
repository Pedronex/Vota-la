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
    return { login, administrador: usuario.administrador };
  },

  async store(login, senha, administrador) {
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
          administrador,
        },
      });

      const token = sign(
        {
          usuario: {
            login: resultado.login,
            administrado: resultado.administrador,
            ativo: resultado.ativo,
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
          administrador: resultado.administrador,
        },
      };
    }
  },

  async update(id, senha, administrador, ativo) {
    const usuario = await prismaClient.usuario.findFirst({
      select: {
        login,
      },
      where: {
        id,
      },
    });

    if (!usuario) {
      return { erro: "Usuário não localizado" };
    }

    const resultado = await prismaClient.usuario.update({
      where: { id },
      data: {
        senha,
        administrador,
        ativo,
      },
    });

    return resultado;
  },

  async delete(id) {
    return prismaClient.usuario.delete({
      where: {
        id,
      },
    });
  },
};
