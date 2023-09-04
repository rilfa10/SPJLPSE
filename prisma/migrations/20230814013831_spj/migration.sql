/*
  Warnings:

  - Added the required column `pegawaiId` to the `Spj` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Spj" ADD COLUMN     "pegawaiId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Spj" ADD CONSTRAINT "Spj_pegawaiId_fkey" FOREIGN KEY ("pegawaiId") REFERENCES "Pegawai"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
