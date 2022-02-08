const prismaClient = require("../prisma");

module.exports = {
  async index(idVotacao) {
    const votacao = await prismaClient.votacao.findFirst({
      include: {
        Voto: {
          include: {
            candidato: true,
          },
        },
        Candidato: true,
      },
      where: {
        id: idVotacao,
      },
    });

    if (!votacao) {
      return { erro: "votação não localizada" };
    }
    const listaCandidatos = votacao.Candidato;
    const votos = votacao.Voto;
    const contagem = [];
    listaCandidatos.map((candidato) => {
      let contador = 0;
      votos.map((voto) => {
        if (voto.candidato.id == candidato.id) {
          contador++;
        }
      });
      contagem.push({ candidato, votos: contador });
    });

    console.log(contagem);

    return contagem;
  },
  async store(idUsuario, idVotacao, idCandidato) {
    const votacao = await prismaClient.votacao.findFirst({
      include: {
        Candidato: true,
      },
      where: {
        id: idVotacao,
      },
    });
    if (!votacao) {
      return { erro: "Votação não localizada" };
    }

    if (votacao.ini_votacao.getTime() > Date.now()) {
      return { erro: "Votação não iniciada" };
    }

    if (votacao.fin_votacao.getTime() < Date.now()) {
      return { erro: "Votação encerrada" };
    }

    const usuario = await prismaClient.usuario.findFirst({
      where: {
        id: idUsuario,
      },
    });

    if (!usuario) {
      return { erro: "Usuário não localizado" };
    }

    const voto = await prismaClient.voto.findFirst({
      where: {
        usuarioId: usuario.id,
        votacaoId: votacao.id,
      },
    });

    console.log(voto);

    if (voto) {
      return { erro: "Voto já registrado" };
    }

    const candidato = votacao.Candidato.find(
      (candidato) => candidato.id === idCandidato
    );

    if (!candidato) {
      return { erro: "Candidato não localizado" };
    }

    try {
      await prismaClient.voto.create({
        data: {
          candidato: {
            connect: { id: candidato.id },
          },
          usuario: {
            connect: { id: usuario.id },
          },
          votacao: {
            connect: { id: votacao.id },
          },
        },
      });

      return { sucesso: "Voto registrado com sucesso" };
    } catch (erro) {
      console.log(erro);
      return { erro: "não foi possivel realizar a inclusão do voto" };
    }
  },
  async delete(idUsuario, idVotacao) {
    const votacao = await prismaClient.votacao.findFirst({
      include: {
        Candidato: true,
      },
      where: {
        id: idVotacao,
      },
    });
    if (!votacao) {
      return { erro: "Votação não localizada" };
    }
    if (votacao.ini_votacao.getTime() > Date.now()) {
      return { erro: "Votação não iniciada" };
    }

    if (votacao.fin_votacao.getTime() < Date.now()) {
      return { erro: "Votação encerrada" };
    }

    const usuario = await prismaClient.usuario.findFirst({
      where: {
        id: idUsuario,
      },
    });

    if (!usuario) {
      return { erro: "Usuário não localizado" };
    }

    const voto = await prismaClient.voto.findFirst({
      where: {
        usuarioId: usuario.id,
        votacaoId: votacao.id,
      },
    });

    if (!voto) {
      return { erro: "Voto não realizado" };
    }

    try {
      await prismaClient.voto.delete({
        where: {
          id: voto.id,
        },
      });
      return { sucesso: "Voto excluido!" };
    } catch (erro) {
      return { erro: "Não foi possivel excluir o voto" };
    }
  },
};
