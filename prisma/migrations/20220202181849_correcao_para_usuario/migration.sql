-- DropForeignKey
ALTER TABLE `Usuario` DROP FOREIGN KEY `Usuario_votacaoId_fkey`;

-- AlterTable
ALTER TABLE `Usuario` MODIFY `votacaoId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_votacaoId_fkey` FOREIGN KEY (`votacaoId`) REFERENCES `Votacao`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
