const prismaClient = require("../prisma");

async function verificarAdmin(req, res, next) {
  const { id } = req;
  const adminUsuario = await prismaClient.usuario.findFirst({
    where: {
      id,
    },
  });

  if (!adminUsuario) return { erro: "Usuário da operação não identificado" };
  if (!adminUsuario.administrador)
    return { erro: "Usuário sem permissão para a atividade" };

  next();
}

module.exports = { verificarAdmin };
