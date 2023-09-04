// url: http://localhost:3000/api/rincianbiaya/12345
import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    const post = await prisma.rincianBiaya.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!post) {
      return (
        NextResponse,
        json({ message: "Rincian biaya not found", err }, { status: 404 })
      );
    }

    return NextResponse.json(post);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const {
      tgl,
      lamaperjalanan,
      transportberangkat,
      transportpulang,
      taxilocal,
      taxiluar,
      fasilitas,
      sakuperhari,
      totaldanaharian,
      spjId,
      pegawaiId, 
      sppdId,
      pejabatpelaksanaId,
      ketuaanggaranId
    } = body;

    const { id } = params;

    const updatePost = await prisma.rincianBiaya.update({
      where: {
        id: Number(id),
      },
      data: {
        tgl,
        lamaperjalanan,
        transportberangkat,
        transportpulang,
        taxilocal,
        taxiluar,
        fasilitas,
        sakuperhari,
        totaldanaharian,
        spjId,
        pegawaiId,
        sppdId,
        ketuaanggaranId,
        pejabatpelaksanaId,
      },
    });
    if (!updatePost) {
      return (
        NextResponse,
        json({ message: "Rincian Biaya not found", err }, { status: 404 })
      );
    }
    return NextResponse.json(updatePost);
  } catch (err) {
    return NextResponse.json({ message: "update Error", err }), { status: 500 };
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;
    await prisma.RincianBiaya.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json("Rincian biaya has been deleted");
  } catch (err) {
    return NextResponse.json({ message: "DELETE Error", err }, { status: 500 });
  }
};
