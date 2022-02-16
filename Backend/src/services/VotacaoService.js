const prismaClient = require("../prisma");

module.exports = {
  async index(idUsuario) {
    try {
      const listaVotacoes = await prismaClient.votacao.findMany({
        select: {
          id: true,
          titulo: true,
          ini_votacao: true,
          fin_votacao: true,
          Voto: {
            select: {
              usuarioId: true
            }
          }
        },
      });

      const listaResultado = [];

      listaVotacoes.forEach(({ id, titulo, ini_votacao, fin_votacao, Voto }) => {
        let participou = false;
        Voto.forEach(({ usuarioId }) => {
          if (!participou) {
            console.log(idUsuario == usuarioId);
            participou = idUsuario == usuarioId;
          }
        })

        listaResultado.push({ id, titulo, ini_votacao, fin_votacao, participou })
      })

      return listaResultado;
    } catch (erro) {
      console.log(erro);
      return { erro: "Não foi possivel realizar a listagem das votações" };
    }
  },

  async show(id) {
    try {
      return prismaClient.votacao.findFirst({
        include: {
          Candidato: true,
        },
        where: {
          id,
        },
      });
    } catch (erro) {
      console.log(erro);
      return { erro: `Não foi possivel apresentar a votação ${id}` };
    }
  },

  async store(titulo, descricao, inicio, fim) {
    try {
      return prismaClient.votacao.create({
        data: {
          titulo,
          descricao,
          ini_votacao: inicio,
          fin_votacao: fim,
        },
      });
    } catch (erro) {
      console.log(erro);
      return { erro: "Não foi possivel criar a votação" };
    }
  },

  async update(id, titulo, descricao, inicio, fim) {
    const votacao = await prismaClient.votacao.findFirst({
      where: {
        id,
      },
    });

    if (!votacao) {
      return { erro: "votação não localizada" };
    }

    try {
      await prismaClient.votacao.update({
        where: { id },
        data: {
          titulo: titulo || votacao.titulo,
          descricao: descricao || votacao.descricao,
          ini_votacao: inicio || votacao.ini_votacao,
          fin_votacao: fim || votacao.fin_votacao,
        },
      });

      return { sucesso: "Foi realizada a alteração na votação" };
    } catch (erro) {
      console.log(erro);
      return { erro: "Não foi possivel realizar a alteração na votação" };
    }
  },

  async delete(id) {
    const votacao = await prismaClient.votacao.findFirst({
      where: {
        id,
      },
    });

    if (!votacao) {
      return { erro: "Votação não localizada" };
    }

    try {
      await prismaClient.votacao.delete({
        where: {
          id,
        },
      });
      return { sucesso: "A votação foi deletada!" };
    } catch (erro) {
      console.log(erro);
      return { erro: "Não foi possivel deletar a votação" };
    }
  },
};
