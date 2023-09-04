/*
  Warnings:

  - You are about to drop the column `perihal` on the `Kwitansi` table. All the data in the column will be lost.
  - You are about to drop the column `kwitansiId` on the `Spj` table. All the data in the column will be lost.
  - You are about to drop the column `pegawaiId` on the `Spj` table. All the data in the column will be lost.
  - Added the required column `ketuaanggaranId` to the `Kwitansi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pegawaiId` to the `Kwitansi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pejabatpelaksanaId` to the `Kwitansi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spjId` to the `Kwitansi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filekwitansi` to the `Spj` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filerincianbiaya` to the `Spj` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Spj" DROP CONSTRAINT "Spj_kwitansiId_fkey";

-- DropForeignKey
ALTER TABLE "Spj" DROP CONSTRAINT "Spj_pegawaiId_fkey";

-- AlterTable
ALTER TABLE "Kwitansi" DROP COLUMN "perihal",
ADD COLUMN     "ketuaanggaranId" INTEGER NOT NULL,
ADD COLUMN     "pegawaiId" INTEGER NOT NULL,
ADD COLUMN     "pejabatpelaksanaId" INTEGER NOT NULL,
ADD COLUMN     "spjId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Spj" DROP COLUMN "kwitansiId",
DROP COLUMN "pegawaiId",
ADD COLUMN     "filekwitansi" TEXT NOT NULL,
ADD COLUMN     "filerincianbiaya" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Kwitansi" ADD CONSTRAINT "Kwitansi_spjId_fkey" FOREIGN KEY ("spjId") REFERENCES "Spj"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kwitansi" ADD CONSTRAINT "Kwitansi_ketuaanggaranId_fkey" FOREIGN KEY ("ketuaanggaranId") REFERENCES "KetuaAnggaran"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kwitansi" ADD CONSTRAINT "Kwitansi_pejabatpelaksanaId_fkey" FOREIGN KEY ("pejabatpelaksanaId") REFERENCES "PejabatPelaksana"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kwitansi" ADD CONSTRAINT "Kwitansi_pegawaiId_fkey" FOREIGN KEY ("pegawaiId") REFERENCES "Pegawai"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
