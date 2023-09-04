/*
  Warnings:

  - Added the required column `nospj` to the `Spj` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Spj" ADD COLUMN     "nospj" VARCHAR(255) NOT NULL;
