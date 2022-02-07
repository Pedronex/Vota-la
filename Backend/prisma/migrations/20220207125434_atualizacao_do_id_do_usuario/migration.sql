/*
  Warnings:

  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `Voto` DROP FOREIGN KEY `Voto_usuarioId_fkey`;

-- AlterTable
ALTER TABLE `Usuario` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Voto` MODIFY `usuarioId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Voto` ADD CONSTRAINT `Voto_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
