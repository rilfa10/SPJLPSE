import React from 'react';
import AddData from './addketua';
import EditData from './editketua';
import DeleteData from './deleteketua';
import { PrismaClient } from '@prisma/client';
const Prisma = new PrismaClient();

async function getData() {
    return await Prisma.ketuaAnggaran.findMany({
        include: {
            pegawai: {
                include: {
                    jabatan: true
                }
            }
        },
    })
}

async function getDatapegawai() {
    return await Prisma.pegawai.findMany()
    }

const DataPage = async () => {
    const dataketua = await getData()
    const datapegawai = await getDatapegawai()
    console.log(dataketua);
    return (
        <div className='bg-white rounded-lg mx-4 p-4'>
            <div className='grid'>
                <div className="col-12">
                    <div className='rounded-lg bg-slate-100 w-85 ml-2 mb-2 mr-2 border border-slate-300'><AddData pegawai={datapegawai} /></div>
                </div>
                <div className='col-12'>
                    <div className='bg-slate-100 w-85 ml-2 mr-2 p-2 border border-slate-300'>
                        <div className='flex justify-between m-2'>
                            <div className='text-xl items-center'> Kuasa pengguna Anggaran </div>
                        </div>
                    </div>
                    <div className='rounded-b bg-slate-100 ml-2 mr-2'>
                        <div className='mb-2'>
                            {/* <addData /> */}
                        </div>
                        <table className='w-full'>
                            <thead className='rounded-lg bg-grey-50 p-2 border border-slate-300 divide-slate-300 '>
                                <tr>
                                    <th className='w-20 p-3 text-sm font-semibold tracking-wide text-center'>No</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Nama Pegawai</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Nip</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>pangkat/Gol</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Jabatan</th>
                                    <th className='w-24 p-3 text-sm font-semibold tracking-wide text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-grey-300'>
                                {dataketua.map((KetuaAnggaran, index) => (
                                    <tr key={KetuaAnggaran.id}>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {index + 1}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 whitespace-nowrape'>
                                            {KetuaAnggaran.pegawai.nama}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 whitespace-nowrape'>
                                            {KetuaAnggaran.pegawai.nip}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 whitespace-nowrape'>
                                            {KetuaAnggaran.pegawai.golongan}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 whitespace-nowrape'>
                                            {KetuaAnggaran.pegawai.jabatan.nama}
                                        </td>
                                        <td className='text-sm text-gray-700 whitespace-nowrape'>
                                            <div className='flex justify-center'>
                                                <EditData KetuaAnggaran={KetuaAnggaran} pegawai={datapegawai}/>
                                                <DeleteData KetuaAnggaran={KetuaAnggaran} />
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
}

export default DataPage;