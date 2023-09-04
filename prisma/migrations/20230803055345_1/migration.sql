/*
  Warnings:

  - You are about to alter the column `nama` on the `Jabatan` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.

*/
-- AlterTable
ALTER TABLE "Jabatan" ALTER COLUMN "nama" SET DATA TYPE VARCHAR(200);

-- CreateTable
CREATE TABLE "Pegawai" (
    "id" SERIAL NOT NULL,
    "nip" INTEGER NOT NULL,
    "nama" VARCHAR(200) NOT NULL,
    "alamat" VARCHAR(200) NOT NULL,
    "telp" VARCHAR(20) NOT NULL,
    "jabatanId" INTEGER NOT NULL,

    CONSTRAINT "Pegawai_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pegawai" ADD CONSTRAINT "Pegawai_jabatanId_fkey" FOREIGN KEY ("jabatanId") REFERENCES "Jabatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
