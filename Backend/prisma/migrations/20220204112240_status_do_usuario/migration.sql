/*
  Warnings:

  - You are about to drop the column `quantidadeVotos` on the `Candidato` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Candidato` DROP COLUMN `quantidadeVotos`;

-- AlterTable
ALTER TABLE `Usuario` ADD COLUMN `ativo` BOOLEAN NOT NULL DEFAULT true;
