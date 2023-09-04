import React from 'react'
import AddData from './addrincianbiaya';
import EditData from './editrincianbiaya';
import DeleteData from './deleterincianbiaya';
import Detail from './detail';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function getData() {
    return await prisma.RincianBiaya.findMany({
        include: {
            sppd: {
                include: {
                    pegawai: {
                        include: {
                            jabatan: true
                        }
                    },
                },
            },
            pegawai: {
                include: {
                    jabatan: true,
                }
            },
            ketuaanggaran: {
                include: {
                    pegawai: {
                        include: {
                            jabatan: true,
                        },
                    }
                }
            },
            pejabatpelaksana: {
                include: {
                    pegawai: {
                        include: {
                            jabatan: true,
                        }
                    }

                }
            },
        },
    })
};



async function getDatapegawai() {
    return await prisma.pegawai.findMany()
}
async function getDatasppd() {
    return await prisma.sppd.findMany({
            include: {
                pegawai: true
            }
        }
    )
}
async function getDataketua() {
    return await prisma.ketuaAnggaran.findMany({
        include: {
            pegawai: true
        }


    })
}
async function getDatapejabat() {
    return await prisma.pejabatPelaksana.findMany({
        include: {
            pegawai: true
        }
    })
}

export default async function dataPage() {
    const rincianbiaya = await getData()
    const dataPegawai = await getDatapegawai()
    const datasppd = await getDatasppd()
    const dataketua = await getDataketua()
    const datapejabat = await getDatapejabat()


    // console.log(sppd);
    return (
        <div className='bg-white rounded-lg mx-4 p-4'>
            <div className='grid'>
                <div className="col-12">
                    <div className='rounded-lg bg-slate-100 w-85 ml-2 mb-2 mr-2 border border-slate-300'><AddData  pegawai={dataPegawai} sppd={datasppd} ketuaAnggaran={dataketua} pejabatPelaksana={datapejabat} /></div>
                </div>
                <div className='col-12'>
                    <div className='bg-slate-100 w-85 ml-2 mr-2 p-2 border border-slate-300'>
                        <div className='flex justify-between m-2'>
                            <div className='text-xl items-center'> Tabel Rincian Biaya</div>
                        </div>
                    </div>
                    <div className='rounded-b bg-slate-100 ml-2 mr-2'>
                        <div className='mb-2'>
                            {/* <addData /> */}
                        </div>
                        <table className='w-full'>
                            <thead className='rounded-lg bg-grey-50 p-2 border border-slate-300 divide-slate-300 '>
                                <tr>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>No</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>Nama</th>
                                    <th className='w-24 p-3 text-sm font-semibold tracking-wide text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-grey-300'>
                                {rincianbiaya.map((RincianBiaya, index) => (
                                    <tr key={RincianBiaya.id}>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {index + 1}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {RincianBiaya.sppd.pegawai.nama}
                                        </td>
                                    
                                        <td className='text-sm text-gray-700 whitespace-nowrape'>
                                            <div className='flex justify-center'>
                                                <Detail rincianBiaya={RincianBiaya} />
                                                <EditData rincianBiaya={RincianBiaya}  pegawai={dataPegawai} sppd={datasppd} ketuaAnggaran={dataketua} pejabatPelaksana={datapejabat} />
                                                <DeleteData rincianBiaya={RincianBiaya} />

                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div >
    )
};

