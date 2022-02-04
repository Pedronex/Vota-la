-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `login` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `perfil` INTEGER NOT NULL DEFAULT 1,
    `votacaoId` INTEGER NOT NULL,

    UNIQUE INDEX `Usuario_login_key`(`login`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Votacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `ini_votacao` DATETIME(3) NOT NULL,
    `fin_votacao` DATETIME(3) NOT NULL,
    `candidatoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Candidato` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `localizacao` VARCHAR(191) NOT NULL,
    `cargo` VARCHAR(191) NOT NULL,
    `quantidadeVotos` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_votacaoId_fkey` FOREIGN KEY (`votacaoId`) REFERENCES `Votacao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Votacao` ADD CONSTRAINT `Votacao_candidatoId_fkey` FOREIGN KEY (`candidatoId`) REFERENCES `Candidato`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
