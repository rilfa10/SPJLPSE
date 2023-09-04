-- CreateTable
CREATE TABLE "Spj" (
    "id" SERIAL NOT NULL,
    "sppdId" INTEGER NOT NULL,
    "kwitansiId" INTEGER NOT NULL,

    CONSTRAINT "Spj_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Spj" ADD CONSTRAINT "Spj_sppdId_fkey" FOREIGN KEY ("sppdId") REFERENCES "Sppd"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spj" ADD CONSTRAINT "Spj_kwitansiId_fkey" FOREIGN KEY ("kwitansiId") REFERENCES "Kwitansi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
