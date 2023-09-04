/*
  Warnings:

  - Added the required column `dibayarpadatgl` to the `Kwitansi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Kwitansi" ADD COLUMN     "dibayarpadatgl" DATE NOT NULL;
