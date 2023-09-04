/*
  Warnings:

  - Added the required column `buktitransportpulang` to the `Bukti` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bukti" ADD COLUMN     "buktitransportpulang" VARCHAR(255) NOT NULL;
