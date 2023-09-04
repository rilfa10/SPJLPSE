/*
  Warnings:

  - Made the column `tgl` on table `Kwitansi` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Kwitansi" ALTER COLUMN "tgl" SET NOT NULL;

-- CreateTable
CREATE TABLE "Sppd" (
    "id" SERIAL NOT NULL,
    "no" VARCHAR NOT NULL,
    "tgl" TIMESTAMP(3) NOT NULL,
    "pegawaiId" INTEGER NOT NULL,

    CONSTRAINT "Sppd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pengeluaran" (
    "id" SERIAL NOT NULL,
    "transportasi" VARCHAR NOT NULL,
    "harian" VARCHAR NOT NULL,
    "fasilitas" VARCHAR NOT NULL,
    "kwitansiId" INTEGER NOT NULL,

    CONSTRAINT "Pengeluaran_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sppd" ADD CONSTRAINT "Sppd_pegawaiId_fkey" FOREIGN KEY ("pegawaiId") REFERENCES "Pegawai"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pengeluaran" ADD CONSTRAINT "Pengeluaran_kwitansiId_fkey" FOREIGN KEY ("kwitansiId") REFERENCES "Kwitansi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
