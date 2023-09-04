/*
  Warnings:

  - Added the required column `perhari` to the `RincianBiaya` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RincianBiaya" ADD COLUMN     "perhari" VARCHAR(225) NOT NULL;
