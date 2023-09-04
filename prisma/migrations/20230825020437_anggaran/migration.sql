-- CreateTable
CREATE TABLE "KetuaAnggaran" (
    "id" SERIAL NOT NULL,
    "pegawaiId" INTEGER NOT NULL,

    CONSTRAINT "KetuaAnggaran_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PejabatPelaksana" (
    "id" SERIAL NOT NULL,
    "pegawaiId" INTEGER NOT NULL,

    CONSTRAINT "PejabatPelaksana_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "KetuaAnggaran" ADD CONSTRAINT "KetuaAnggaran_pegawaiId_fkey" FOREIGN KEY ("pegawaiId") REFERENCES "Pegawai"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PejabatPelaksana" ADD CONSTRAINT "PejabatPelaksana_pegawaiId_fkey" FOREIGN KEY ("pegawaiId") REFERENCES "Pegawai"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
