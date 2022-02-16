const { sign } = require("jsonwebtoken");
const prismaClient = require("../prisma");

module.exports = {
  async index() {
    return prismaClient.usuario.findMany({
      select: {
        login: true,
        ativo: true,
        administrador: true,
      },
    });
  },
  async show(login, senha) {
    const usuario = await prismaClient.usuario.findFirst({
      select: {
        id: true,
        login: true,
        administrador: true,
        ativo: true,
      },
      where: {
        login,
        senha,
      },
    });

    if (!usuario) {
      return { erro: "Usuário ou senha inválido!" };
    }
    const token = sign(
      {
        usuario: {
          login: usuario.login,
          administrado: usuario.administrador,
          ativo: usuario.ativo,
        },
      },
      process.env.JWT_SECRET,
      {
        subject: usuario.id,
        expiresIn: "1d",
      }
    );
    return {
      token,
      identificador: usuario.id,
      login,
      administrador: usuario.administrador,
    };
  },

  async store(login, senha, administrador) {
    const usuario = await prismaClient.usuario.findFirst({
      select: {
        login: true,
      },
      where: {
        login,
      },
    });

    if (usuario) {
      return { erro: "Usuário já cadastrado!" };
    } else {
      try {
        const resultado = await prismaClient.usuario.create({
          data: {
            login,
            senha,
            administrador,
          },
        });
        return {
          login: resultado.login,
          administrador: resultado.administrador,
        };
      } catch (erro) {
        console.log(erro);
        return {
          erro: "Não foi possivel realizar a criação do usuário",
        };
      }
    }
  },

  async update(login, senha, administrador, ativo) {
    const usuario = await prismaClient.usuario.findFirst({
      where: {
        login,
      },
    });

    if (!usuario) {
      return { erro: "Usuário não localizado" };
    }

    try {
      await prismaClient.usuario.update({
        where: { login: usuario.login },
        data: {
          senha,
          administrador,
          ativo,
        },
      });
      return { sucesso: "Dados atualizados com sucesso" };
    } catch (erro) {
      console.log(erro);
      return { erro: "Não foi possivel realizar a atualização dos dados" };
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
