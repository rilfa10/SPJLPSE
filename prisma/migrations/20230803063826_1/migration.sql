-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(200) NOT NULL,
    "password" VARCHAR(200) NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "pegawaiId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_pegawaiId_fkey" FOREIGN KEY ("pegawaiId") REFERENCES "Pegawai"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
