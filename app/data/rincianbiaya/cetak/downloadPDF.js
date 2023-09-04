"use client";

import jsPDF from "jspdf";
import moment from "moment";
import "moment/locale/id";
moment.locale("id");

const DownloadPDF = ({ rincianbiaya }) => {
  console.log({ rincianbiaya });
  // const Jumlah = parseInt(rincianbiaya.transportberangkat)+parseInt(rincianbiaya.transportpulang)+parseInt(rincianbiaya.taxilocal)+parseInt(rincianbiaya.taxiluar)+parseInt(rincianbiaya.fasilitas)+parseInt(rincianbiaya.totaldanaharian)
  //   console.log(Jumlah);

  const generate = () => {
    // const doc = new jsPDF("1", "mm", [210,330]);
    const doc = new jsPDF("p", "mm", [210, 330]);

    // logo sekda
    doc.addImage("/images/sekda-min-bw.png", "PNG", 15, 28, 30, 25);

    // kop surat
    doc.setFontSize(15);
    doc.setFont("arial", "bold");
    doc.text(70, 30, "PEMERINTAH KABUPATEN BERAU");

    doc.setFontSize(18);
    doc.setFont("times", "bold");
    doc.text(50, 39, "BAGIAN PENGADAAN BARANG DAN JASA");

    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text(74, 46, "Jl. APT. Pranoto No. 01 Telp. (0554) 2024306");
    doc.text(97, 52, "TANJUNG REDEB");
    doc.setLineWidth(0.1);
    doc.line(10, 58, 200, 58);
    doc.setLineWidth(1.5);
    doc.line(10, 60, 200, 60);

    doc.setFontSize(16);
    doc.setFont("times", "bold");
    doc.text("RINCIAN BIAYA PERJALANAN DINAS ", 105, 76, null, null, "center");
    doc.setLineWidth(0.2);

    // no sppd
    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(20, 90, "Lampiran SPD Nomor");
    doc.text(65, 90, ":");

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(`${rincianbiaya.sppd.no}`, 70, 90);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(20, 99, "Tanggal");
    doc.text(65, 99, ":");

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(`${moment(rincianbiaya.tgl).format("LL")}`, 70, 99);

    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text(20, 110, "NO.");
    doc.text(38, 110, "PERINCIAN BIAYA");
    doc.text(101, 110, "JUMLAH");
    doc.text(148, 110, "KETERANGAN");

    doc.text(40, 173, "Jumlah Semua");
    // const Jumlah = parseInt(rincianbiaya.transportberangkat)+parseInt(rincianbiaya.transportpulang)+parseInt(rincianbiaya.taxilocal)+parseInt(rincianbiaya.taxiluar)+parseInt(rincianbiaya.fasilitas)+parseInt(rincianbiaya.totaldanaharian)
    
    // doc.text(`${toString(Jumlah)}`);
    doc.text(88, 173, "Rp.");

    // line
    doc.setLineWidth(0.5);
    doc.line(18, 105, 190, 105);
    doc.line(18, 105, 18, 200);
    doc.line(29, 105, 29, 200);
    doc.line(87, 105, 87, 200);
    doc.line(18, 115, 190, 115);
    doc.line(135, 105, 135, 200);
    doc.line(190, 105, 190, 200);
    doc.line(18, 166, 190, 166);
    doc.line(18, 177, 190, 177);
    doc.line(18, 188, 190, 188);
    doc.line(18, 200, 190, 200);

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text(20, 120, "1.");
    doc.text(30, 120, "Biaya Angkutan Pegawai");
    doc.text(30, 125, "- Tiket Berangkat");
    doc.text(88, 125, "Rp.");
    doc.text(`${rincianbiaya.transportberangkat}`, 98, 125);
    doc.text(30, 130, "- TIket Pulang");
    doc.text(88, 130, "Rp.");
    doc.text(`${rincianbiaya.transportpulang}`, 98, 130);

    doc.text(20, 135, "2.");
    doc.text(30, 135, "Biaya Taxi Bandara");
    doc.text(30, 140, "- Taxi Bandara Kalimarau Berau");
    doc.text(88, 140, "Rp.");
    doc.text(`${rincianbiaya.taxilocal}`, 98, 140);
    doc.text(30, 145, "- Taxi Bandara Luar");
    doc.text(88, 145, "Rp.");
    doc.text(`${rincianbiaya.taxiluar}`, 98, 145);

    doc.text(20, 150, "3.");
    doc.text(30, 150, "Biaya Penginapan");
    doc.text(88, 150, "Rp.");
    doc.text(`${rincianbiaya.fasilitas}`, 98, 150);
    doc.text(145, 150, "Malam");

    doc.text(20, 155, "4.");
    doc.text(30, 155, "Biaya Lupsum");
    doc.text(30, 160, "- Uang Harian");
    doc.text(88, 160, "Rp.");
    doc.text(`${rincianbiaya.sakuperhari}`, 98, 160);
    doc.text(30, 165, "- Total Uang Harian");
    doc.text(`${rincianbiaya.totaldanaharian}`, 98, 165);
    doc.text(88, 165, "Rp.");
    doc.text(145, 165, "Hari");
    doc.text(`${rincianbiaya.lamaperjalanan}`, 140, 165);

    doc.text(34, 183, "Panjar yang Sudah Dibayar");
    doc.text(88, 183, "Rp.");
    doc.text(34, 194, "Sisa yang Belum Dibayar");
    doc.text(88, 194, "Rp.");

    doc.text(30, 207, "Mengetahui/Menyetujui");
    doc.text(128, 207, "Tanjung Redeb,");

    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text(25, 212, "Kuasa Pengguna Anggaran");
    doc.text(`${rincianbiaya.ketuaanggaran.pegawai.nama}`, 25, 245);
    doc.text(`${rincianbiaya.ketuaanggaran.pegawai.nip}`, 35, 251);

    doc.text(120, 212, "Pejabat Pelaksana Teknis Kegiatan");
    doc.text(`${rincianbiaya.pejabatpelaksana.pegawai.nama}`, 120, 245);
    doc.text(`${rincianbiaya.pejabatpelaksana.pegawai.nip}`, 130, 251);

    doc.text(25, 282, "Yang Bepergian");
    doc.text(`${rincianbiaya.sppd.pegawai.nama}`, 25, 315);
    doc.text(`${rincianbiaya.sppd.pegawai.nip}`, 35, 320);
    

    doc.text(120, 282, "Bendahara Pengeluaran Pembantu");
    doc.text(`${rincianbiaya.pegawai.nama}`, 120, 315);
    doc.text(`${rincianbiaya.pegawai.nip}`, 130, 320);

     //line
     doc.line(25, 246, 82, 246);
     doc.line(120, 246, 167, 246);
     doc.line(25, 316, 96, 316);
     doc.line(120, 316, 182, 316);

    //nip
    doc.text(25, 251, "Nip");
    doc.text(32, 251, ".");
    doc.text(25, 320, "Nip");
    doc.text(32, 320, ".");
    doc.text(120, 251, "Nip");
    doc.text(127, 251, ".");
    doc.text(120, 320, "Nip");
    doc.text(127, 320, ".");

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    const splitText1 = doc.splitTextToSize("Telah Menerima Uang Sebesar", 80);
    doc.text(50, 260, splitText1, "center");
    doc.text(30, 265, "Rp.");
    doc.setFontSize(12);
    doc.setFont("times", "normal");
    const splitText2 = doc.splitTextToSize(
      "Dengan catatan bahwa untuk tarif biaya tersebut diatas, Saya tidak mengajukan klaim.",
      80
    );
    doc.text(50, 270, splitText2, "center");

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    const splitText3 = doc.splitTextToSize(
      "Sudah terima uang sejumlah tersebut di atas pada tanggal",
      80
    );
    doc.text(152, 260, splitText3, "center");

    doc.save(`Rincian Biaya_${rincianbiaya.sppd.pegawai.nama}.pdf`);
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








