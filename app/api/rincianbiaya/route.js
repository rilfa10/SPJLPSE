// url: http://localhost:3000/api/rincianbiaya
import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { id, 
      tgl, 
      lamaperjalanan, 
      transportberangkat, 
      transportpulang, 
      taxilocal, 
      taxiluar, 
      fasilitas, 
      sakuperhari, 
      totaldanaharian,  
      pegawai, 
      pegawaiId,
      sppd, 
      sppdId, 
      ketuaanggaran,
      ketuaanggaranId, 
      pejabatpelaksana, 
      pejabatpelaksanaId } = body;

    const newRincian =await prisma.rincianBiaya.create({
        data: {
          id, 
          tgl, 
          lamaperjalanan, 
          transportberangkat, 
          transportpulang, 
          taxilocal, 
          taxiluar, 
          fasilitas, 
          sakuperhari, 
          totaldanaharian, 
          pegawai, 
          pegawaiId,
          sppd, 
          sppdId, 
          ketuaanggaran,
          ketuaanggaranId, 
          pejabatpelaksana, 
          pejabatpelaksanaId,
        },
    });
    return NextResponse.json(newRincian);
  } catch (err) {
    return NextResponse.json({ message: "POST Error", err }), { status: 500 };
  }
};

export const GET = async () => {
  try {
    const posts = await prisma.RincianBiaya.findMany();

    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }), { status: 500 };
  }
};
