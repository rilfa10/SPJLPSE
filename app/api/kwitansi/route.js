// url: http://localhost:3000/api/kwitansi
import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const {
      id,
      tgl,
      mataanggaran,
      dibukui,
      program,
      kegiatan,
      terimadari,
      terbilang,
      pembayaran,
      terbilangrp,
      dibayarpadatgl,
      sppd,
      sppdId,
      ketuaanggaran,
      ketuaanggaranId,
      pejabatpelaksana,
      pejabatpelaksanaId,
      pegawai,
      pegawaiId,
    } = body;

    const newKwitansi = await prisma.Kwitansi.create({
      data: {
        id,
        tgl,
        mataanggaran,
        dibukui,
        program,
        kegiatan,
        terimadari,
        terbilang,
        pembayaran,
        terbilangrp,
        dibayarpadatgl,
        sppd,
        sppdId,
        ketuaanggaran,
        ketuaanggaranId,
        pejabatpelaksana,
        pejabatpelaksanaId,
        pegawai,
        pegawaiId, 
      },
    });
    return NextResponse.json(newKwitansi);
  } catch (err) {
    return NextResponse, json({ message: "POST Error", err }), { status: 500 };
  }
};
export const GET = async () => {
  try {
    const posts = await prisma.Kwitansi.findMany();

    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }), { status: 500 };
  }
};
