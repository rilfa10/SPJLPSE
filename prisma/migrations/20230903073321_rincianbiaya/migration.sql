/*
  Warnings:

  - You are about to drop the column `spjId` on the `RincianBiaya` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "RincianBiaya" DROP CONSTRAINT "RincianBiaya_spjId_fkey";

-- AlterTable
ALTER TABLE "RincianBiaya" DROP COLUMN "spjId";
