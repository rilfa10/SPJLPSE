/*
  Warnings:

  - You are about to alter the column `transportasi` on the `Pengeluaran` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(255)`.
  - You are about to alter the column `harian` on the `Pengeluaran` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(255)`.
  - You are about to alter the column `fasilitas` on the `Pengeluaran` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(255)`.
  - Added the required column `golongan` to the `Pegawai` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Jabatan" ALTER COLUMN "nama" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Kwitansi" ALTER COLUMN "perihal" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "file" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Pegawai" ADD COLUMN     "golongan" VARCHAR(255) NOT NULL,
ALTER COLUMN "nip" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "nama" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "alamat" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "telp" SET DATA TYPE VARCHAR(30);

-- AlterTable
ALTER TABLE "Pengeluaran" ALTER COLUMN "transportasi" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "harian" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "fasilitas" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Sppd" ALTER COLUMN "file" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255);
