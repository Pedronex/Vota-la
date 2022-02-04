/*
  Warnings:

  - You are about to drop the column `perfil` on the `Usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Usuario` DROP COLUMN `perfil`,
    ADD COLUMN `administrador` BOOLEAN NOT NULL DEFAULT false;
