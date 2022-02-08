const prismaClient = require("../prisma");

module.exports = {
  async store(nome, cargo, localizacao, votacaoId) {
    try {
      return prismaClient.candidato.create({
        data: {
          nome,
          cargo,
          localizacao,
          Votacao: {
            connect: {
              id: votacaoId,
            },
          },
        },
      });
    } catch (erro) {
      console.log(erro);
      return { erro: "Não foi possivel criar o candidato" };
    }
  },

  async update(id, nome, cargo, localizacao) {
    const candidato = await prismaClient.candidato.findFirst({
      where: {
        id,
      },
    });

    if (!candidato) {
      return { erro: "candidato não localizado" };
    }

    try {
      await prismaClient.candidato.update({
        where: { id },
        data: {
          cargo: cargo || candidato.cargo,
          localizacao: localizacao || candidato.localizacao,
          nome: nome || candidato.nome,
        },
      });

      return { sucesso: "Foi realizada a alteração do candidato" };
    } catch (erro) {
      console.log(erro);
      return { erro: "Não foi possivel realizar a alteração do candidato" };
    }
  },

  async delete(id) {
    const candidato = await prismaClient.candidato.findFirst({
      where: {
        id,
      },
    });

    if (!candidato) {
      return { erro: "Candidato não localizada" };
    }

    try {
      await prismaClient.candidato.delete({
        where: {
          id,
        },
      });
      return { sucesso: "O candidato foi deletado!" };
    } catch (erro) {
      console.log(erro);
      return { erro: "Não foi possivel deletar o candidato" };
    }
  },
};
