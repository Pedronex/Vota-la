/*
  Warnings:

  - You are about to drop the column `votacaoId` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `candidatoId` on the `Votacao` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Usuario` DROP FOREIGN KEY `Usuario_votacaoId_fkey`;

-- DropForeignKey
ALTER TABLE `Votacao` DROP FOREIGN KEY `Votacao_candidatoId_fkey`;

-- AlterTable
ALTER TABLE `Usuario` DROP COLUMN `votacaoId`;

-- AlterTable
ALTER TABLE `Votacao` DROP COLUMN `candidatoId`;

-- CreateTable
CREATE TABLE `Voto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `votacaoId` INTEGER NOT NULL,
    `candidatoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Voto` ADD CONSTRAINT `Voto_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Voto` ADD CONSTRAINT `Voto_votacaoId_fkey` FOREIGN KEY (`votacaoId`) REFERENCES `Votacao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Voto` ADD CONSTRAINT `Voto_candidatoId_fkey` FOREIGN KEY (`candidatoId`) REFERENCES `Candidato`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
