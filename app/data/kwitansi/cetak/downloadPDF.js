"use client";

import jsPDF from "jspdf";
import moment from "moment";
import "moment/locale/id";
moment.locale("id");

const DownloadPDF = ({ kwitansi }) => {
  console.log({ kwitansi });

  const generate = () => {
    // const doc = new jsPDF("1", "mm", [210,330]);
    const doc = new jsPDF("l", "mm", [355, 215]);

    // logo sekda
    doc.addImage("/images/sekda-min-bw-miring.png", "PNG", 15, 175, 25, 30);

    doc.setFontSize(18);
    doc.setFont("times", "bold");
    doc.text("PEMERINTAH KABUPATEN BERAU", 20, 150, null, 90);

    doc.setFontSize(18);
    doc.setFont("times", "bold");
    doc.text("SEKRETARIAT DAERAH", 26, 133, null, 90);

    doc.setFontSize(14);
    doc.setFont("arial", "bold");
    doc.text("BAGIAN LAYANAN PENGADAAN BARANG DAN JASA", 32, 158, null, 90);

    doc.setFontSize(12);
    doc.setFont("arial", "bold");
    doc.text("Jl. APT. Pranoto No. 01 Telp. (0554) 2024306", 38, 136, null, 90);
    doc.text("TANJUNG REDEB", 44, 113, null, 90);

    doc.setLineWidth(0.1);
    doc.line(46, 10, 46, 200);
    doc.setLineWidth(1.5);
    doc.line(48, 10, 48, 200);

    doc.setFontSize(16);
    doc.setFont("arial", "bold");
    doc.text("SURAT BUKTI", 165, 16,"center");
    doc.setLineWidth(0.1);
    doc.line(145, 17, 185, 17);

    doc.setFontSize(10);
    doc.setFont("arial", "normal");
    doc.text(255, 16, "Lembar ke");
    doc.text(271, 16, ":");
    doc.text(275, 16, "satu");
    doc.text(275, 21, "dua");
    doc.text(275, 26, "tiga");

    doc.setFontSize(12);
    doc.setFont("arial", "normal");
    doc.text(115, 23, "MATA ANGGARAN");
    doc.text(160, 23, ":");
    doc.text(115, 30, "DIBUKUI");
    doc.text(160, 30, ":");
    doc.text(115, 37, "PROGRAM");
    doc.text(160, 37, ":");
    doc.text(115, 50, "KEGIATAN");
    doc.text(160, 50, ":");

    //isi
    doc.text(`${kwitansi.mataanggaran} `,163, 23 );
    doc.text(`${kwitansi.dibukui}`,163, 30 );
    doc.text(`${kwitansi.program}`,163, 37);
    doc.text(`${kwitansi.kegiatan}`,163, 50);

    doc.text(52, 62, "SUDAH TERIMA DARI");
    doc.text(110, 62, ":");
    doc.text(52, 77, "TERBILANG");
    doc.text(110, 77, ":");
    doc.text(52, 93, "UNTUK PEMBAYARAN");
    doc.text(110, 93, ":");

    //isi
    const splitText = doc.splitTextToSize(`${kwitansi.pembayaran}`,
    180
    );
    doc.text(113, 93, splitText);

    doc.text(`${kwitansi.terimadari}`,113, 62,);
    doc.text(`${kwitansi.terbilang}`, 120, 77,);


    doc.setLineWidth(1);
    doc.line(52, 162, 150, 162);
    doc.text(52, 155, "TERBILANG");
    doc.text(78, 155, "Rp.");
    doc.setLineWidth(1);
    doc.line(52, 145, 150, 145);

    //isi
    doc.setFontSize(12);
    doc.setFont("arial", "bold");
    doc.text(`${kwitansi.terbilangrp}`,109, 155);

    //kotak terbilang rp
    doc.setLineWidth(0.1);
    doc.line(95, 147, 150, 147);
    doc.line(90, 160, 145, 160);
    doc.line(95, 147, 90, 160);
    doc.line(150, 147, 145, 160);

    //kotak terbilang
    doc.setLineWidth(0.1);
    doc.line(120, 70, 290, 70);
    doc.line(115, 85, 285, 85);
    doc.line(120, 70, 115, 85);
    doc.line(290, 70, 285, 85);

    doc.setFontSize(12);
    doc.setFont("arial", "bold");
    doc.text(`${kwitansi.sppd.pegawai.nama}`,230, 155);
    doc.setLineWidth(0.1);
    doc.line(230, 156, 290, 156);
    doc.text(230, 160, "NIP.");
    doc.text(`${kwitansi.sppd.pegawai.nip}`,242, 160 );

    doc.setFontSize(12);
    doc.setFont("arial", "normal");
    doc.text(230, 132, "Tanda Tangan Penerima,");
    doc.text(220, 127, "Tanjung Redeb,");
    doc.text(`${moment(kwitansi.tgl).format("LL")}`,249, 127);

    doc.text(230, 170, "Sudah di bayar pada");
    doc.text(`${moment(kwitansi.dibayarpadatgl).format("LL")}`,230, 175);

    doc.text(70, 175, "Mengetahui:");
    doc.text(60, 180, "Kuasa Pengguna Anggaran");
    doc.text(`${kwitansi.ketuaanggaran.pegawai.nama}`,60, 201);
    doc.text(60, 206, "Nip.");
    doc.text(`${kwitansi.ketuaanggaran.pegawai.nip}`,70, 206);

    doc.setLineWidth(0.1);
    doc.line(60, 202, 115, 202);
    doc.line(140, 202, 183, 202);
    doc.line(230, 202, 284, 202);

    doc.text(140, 180, "Pejabat Pelaksana Teknis Kegiatan");
    doc.text(`${kwitansi.pejabatpelaksana.pegawai.nama}`,140, 201);
    doc.text(140, 206, "Nip.");
    doc.text(`${kwitansi.pejabatpelaksana.pegawai.nip}`,150, 206);

    doc.text(230, 180, "Bendahara Pengeluaran");
    doc.text(`${kwitansi.pegawai.nama}`,230, 201);
    doc.text(230, 206, "Nip.");
    doc.text(`${kwitansi.pegawai.nip}`,240, 206);

    doc.setLineWidth(0.1);
    doc.line(52, 165, 292, 165);

    doc.save(`Kwitansi_${kwitansi.sppd.pegawai.nama}.pdf`);
  };

  return (
    <div>
      <button
        className="btn bg-sky-600 hover:bg-blue-500 text-white normal-case duration-300"
        onClick={generate}
      >
        Download PDF
      </button>
    </div>
  );
};

export default DownloadPDF;



