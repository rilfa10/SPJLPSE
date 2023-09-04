import React from "react";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import prisma from '@/app/libs/prisma';


async function getData() {
  return await prisma.spj.findMany()
}

async function getDatapegawai() {
  return await prisma.pegawai.findMany()
}

const Dashboard = async () => {
  const dataspj = await getData()
  const datapegawai = await getDatapegawai()

  return (
    <div className="grid">
      < div className="col-12" >
        <div className="rounded-lg w-85 ml-5 mr-2 p-2 outline-purple-950">
          <div className="col-12">
            <h3 className="text-3xl">SISTEM INFORMASI SPJ (Surat Pertanggung Jawaban)</h3>
          </div>

        </div>
        <div className="grid gap-2 grid-cols-2">
          <div className="col-12 lg:col-6 xl:col-3">
            <div className="bg-blue-500 m-5 p-4 rounded-lg card mb-0">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-900 font-medium mb-3">SPJ</span>
                  <div className="text-900 font-medium text-xl">{dataspj.length}</div>
                </div>

                <div className="flex align-items-center justify-center bg-blue-100 ml-2 p-1.5 rounded-lg" style={{ width: '2rem', height: '2rem' }}>
                  <HiOutlineDocumentDuplicate className="w-5 h-5 text-cyan-700" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 lg:col-6 xl:col-3">
            <div className="bg-blue-500 m-5 p-4 rounded-lg card mb-0">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-900 font-medium mb-3">PEGAWAI</span>
                  <div className="text-900 font-medium text-xl">{datapegawai.length}</div>
                </div>
                <div className="flex align-items-center justify-center bg-blue-100 ml-2 p-1.5 rounded-lg" style={{ width: '2rem', height: '2rem' }}>
                  <HiOutlineUsers className="w-5 h-5 text-cyan-700" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div >


      <div className="bg-white rounded-lg w-85 ml-5 mr-4 p-5 outline-purple-950">
        <h3 className="text-3xl">SPJ LPSE KAB.BERAU</h3>
        <h4>Selamat Datang Di Sistem Informasi SPJ Perjalanan Dinas</h4>
      </div>
    </div >


  );
};

export default Dashboard;
