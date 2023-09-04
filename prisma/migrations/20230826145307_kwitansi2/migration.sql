/*
  Warnings:

  - Added the required column `perihal` to the `Kwitansi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Kwitansi" ADD COLUMN     "perihal" VARCHAR(255) NOT NULL;
