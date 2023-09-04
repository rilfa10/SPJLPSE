/*
  Warnings:

  - You are about to drop the column `spjId` on the `Kwitansi` table. All the data in the column will be lost.
  - Added the required column `sppdId` to the `Kwitansi` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Kwitansi" DROP CONSTRAINT "Kwitansi_spjId_fkey";

-- AlterTable
ALTER TABLE "Kwitansi" DROP COLUMN "spjId",
ADD COLUMN     "sppdId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Kwitansi" ADD CONSTRAINT "Kwitansi_sppdId_fkey" FOREIGN KEY ("sppdId") REFERENCES "Sppd"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
