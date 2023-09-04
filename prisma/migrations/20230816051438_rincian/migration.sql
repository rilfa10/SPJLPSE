/*
  Warnings:

  - You are about to drop the `Pengeluaran` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pengeluaran" DROP CONSTRAINT "Pengeluaran_kwitansiId_fkey";

-- AlterTable
ALTER TABLE "Kwitansi" ALTER COLUMN "tgl" SET DATA TYPE DATE;

-- DropTable
DROP TABLE "Pengeluaran";

-- CreateTable
CREATE TABLE "RincianBiaya" (
    "id" SERIAL NOT NULL,
    "transportasi" VARCHAR(255) NOT NULL,
    "harian" VARCHAR(255) NOT NULL,
    "fasilitas" VARCHAR(255) NOT NULL,
    "beban" VARCHAR(255) NOT NULL,
    "tujuan" VARCHAR(255) NOT NULL,
    "perjalanan" VARCHAR(255) NOT NULL,
    "tglberangkat" DATE NOT NULL,
    "tglkembali" DATE NOT NULL,
    "spjId" INTEGER NOT NULL,

    CONSTRAINT "RincianBiaya_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RincianBiaya" ADD CONSTRAINT "RincianBiaya_spjId_fkey" FOREIGN KEY ("spjId") REFERENCES "Spj"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
