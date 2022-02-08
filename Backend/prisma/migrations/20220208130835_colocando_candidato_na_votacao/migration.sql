/*
  Warnings:

  - Added the required column `votacaoId` to the `Candidato` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Candidato` ADD COLUMN `votacaoId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Candidato` ADD CONSTRAINT `Candidato_votacaoId_fkey` FOREIGN KEY (`votacaoId`) REFERENCES `Votacao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
