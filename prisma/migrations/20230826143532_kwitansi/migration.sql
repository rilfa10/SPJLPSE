/*
  Warnings:

  - You are about to drop the column `file` on the `Kwitansi` table. All the data in the column will be lost.
  - You are about to drop the column `perihal` on the `Kwitansi` table. All the data in the column will be lost.
  - You are about to drop the column `beban` on the `RincianBiaya` table. All the data in the column will be lost.
  - You are about to drop the column `harian` on the `RincianBiaya` table. All the data in the column will be lost.
  - You are about to drop the column `perhari` on the `RincianBiaya` table. All the data in the column will be lost.
  - You are about to drop the column `perjalanan` on the `RincianBiaya` table. All the data in the column will be lost.
  - You are about to drop the column `tglberangkat` on the `RincianBiaya` table. All the data in the column will be lost.
  - You are about to drop the column `tglkembali` on the `RincianBiaya` table. All the data in the column will be lost.
  - You are about to drop the column `transportasi` on the `RincianBiaya` table. All the data in the column will be lost.
  - You are about to drop the column `tujuan` on the `RincianBiaya` table. All the data in the column will be lost.
  - Added the required column `dibukui` to the `Kwitansi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kegiatan` to the `Kwitansi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mataanggaran` to the `Kwitansi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pembayaran` to the `Kwitansi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `program` to the `Kwitansi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `terbilang` to the `Kwitansi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `terbilangrp` to the `Kwitansi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `terimadari` to the `Kwitansi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ketuaanggaranId` to the `RincianBiaya` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lamaperjalanan` to the `RincianBiaya` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pegawaiId` to the `RincianBiaya` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pejabatpelaksanaId` to the `RincianBiaya` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sakuperhari` to the `RincianBiaya` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sppdId` to the `RincianBiaya` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taxilocal` to the `RincianBiaya` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taxiluar` to the `RincianBiaya` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tgl` to the `RincianBiaya` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totaldanaharian` to the `RincianBiaya` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transportberangkat` to the `RincianBiaya` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transportpulang` to the `RincianBiaya` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Kwitansi" DROP COLUMN "file",
DROP COLUMN "perihal",
ADD COLUMN     "dibukui" VARCHAR(255) NOT NULL,
ADD COLUMN     "kegiatan" VARCHAR(255) NOT NULL,
ADD COLUMN     "mataanggaran" VARCHAR(255) NOT NULL,
ADD COLUMN     "pembayaran" VARCHAR(255) NOT NULL,
ADD COLUMN     "program" VARCHAR(255) NOT NULL,
ADD COLUMN     "terbilang" VARCHAR(255) NOT NULL,
ADD COLUMN     "terbilangrp" VARCHAR(255) NOT NULL,
ADD COLUMN     "terimadari" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "RincianBiaya" DROP COLUMN "beban",
DROP COLUMN "harian",
DROP COLUMN "perhari",
DROP COLUMN "perjalanan",
DROP COLUMN "tglberangkat",
DROP COLUMN "tglkembali",
DROP COLUMN "transportasi",
DROP COLUMN "tujuan",
ADD COLUMN     "ketuaanggaranId" INTEGER NOT NULL,
ADD COLUMN     "lamaperjalanan" VARCHAR(255) NOT NULL,
ADD COLUMN     "pegawaiId" INTEGER NOT NULL,
ADD COLUMN     "pejabatpelaksanaId" INTEGER NOT NULL,
ADD COLUMN     "sakuperhari" VARCHAR(255) NOT NULL,
ADD COLUMN     "sppdId" INTEGER NOT NULL,
ADD COLUMN     "taxilocal" VARCHAR(255) NOT NULL,
ADD COLUMN     "taxiluar" VARCHAR(255) NOT NULL,
ADD COLUMN     "tgl" DATE NOT NULL,
ADD COLUMN     "totaldanaharian" VARCHAR(255) NOT NULL,
ADD COLUMN     "transportberangkat" VARCHAR(255) NOT NULL,
ADD COLUMN     "transportpulang" VARCHAR(255) NOT NULL;

-- AddForeignKey
ALTER TABLE "RincianBiaya" ADD CONSTRAINT "RincianBiaya_pegawaiId_fkey" FOREIGN KEY ("pegawaiId") REFERENCES "Pegawai"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RincianBiaya" ADD CONSTRAINT "RincianBiaya_sppdId_fkey" FOREIGN KEY ("sppdId") REFERENCES "Sppd"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RincianBiaya" ADD CONSTRAINT "RincianBiaya_ketuaanggaranId_fkey" FOREIGN KEY ("ketuaanggaranId") REFERENCES "KetuaAnggaran"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RincianBiaya" ADD CONSTRAINT "RincianBiaya_pejabatpelaksanaId_fkey" FOREIGN KEY ("pejabatpelaksanaId") REFERENCES "PejabatPelaksana"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
