/*
  Warnings:

  - You are about to drop the `Spj` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sppd` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `file` to the `Kwitansi` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Spj" DROP CONSTRAINT "Spj_kwitansiId_fkey";

-- DropForeignKey
ALTER TABLE "Spj" DROP CONSTRAINT "Spj_sppdId_fkey";

-- DropForeignKey
ALTER TABLE "Sppd" DROP CONSTRAINT "Sppd_pegawaiId_fkey";

-- AlterTable
ALTER TABLE "Kwitansi" ADD COLUMN     "file" VARCHAR(200) NOT NULL;

-- DropTable
DROP TABLE "Spj";

-- DropTable
DROP TABLE "Sppd";
