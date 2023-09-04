-- CreateTable
CREATE TABLE "Bukti" (
    "id" SERIAL NOT NULL,
    "buktitransportasi" VARCHAR(255) NOT NULL,
    "tfsaku" VARCHAR(255) NOT NULL,
    "buktipesanhotel" VARCHAR(255) NOT NULL,
    "sppdId" INTEGER NOT NULL,

    CONSTRAINT "Bukti_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bukti" ADD CONSTRAINT "Bukti_sppdId_fkey" FOREIGN KEY ("sppdId") REFERENCES "Sppd"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
