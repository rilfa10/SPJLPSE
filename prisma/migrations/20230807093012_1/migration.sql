-- CreateTable
CREATE TABLE "Kwitansi" (
    "id" SERIAL NOT NULL,
    "tgl" TIMESTAMP(3) NOT NULL,
    "perihal" VARCHAR(200) NOT NULL,

    CONSTRAINT "Kwitansi_pkey" PRIMARY KEY ("id")
);
