const crypto = require("crypto");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.usuario.upsert({
    where: { login: "admin" },
    update: {},
    create: {
      login: "admin",
      senha: crypto.createHash("md5").update("admin").digest("hex"),
      administrador: true,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
