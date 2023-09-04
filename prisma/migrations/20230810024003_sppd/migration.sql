-- CreateTable
CREATE TABLE "Sppd" (
    "id" SERIAL NOT NULL,
    "no" VARCHAR NOT NULL,
    "tglsppd" DATE NOT NULL,
    "file" VARCHAR(200) NOT NULL,
    "pegawaiId" INTEGER NOT NULL,

    CONSTRAINT "Sppd_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sppd" ADD CONSTRAINT "Sppd_pegawaiId_fkey" FOREIGN KEY ("pegawaiId") REFERENCES "Pegawai"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
