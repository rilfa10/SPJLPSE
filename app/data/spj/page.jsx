import React from 'react'
import AddData from './addSpj';
import EditData from './editSpj';
import DeleteData from './deleteSpj';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function getData() {
    return await prisma.spj.findMany({include:{
        sppd: {
            include:{
                pegawai:{
                    include:{
                        jabatan: true,
                    }
                },
            },
        },
    }})


};
async function getDatasppd() {
    return await prisma.sppd.findMany()
}
// async function getDatarincianbiaya() {
//     return await prisma.rincianBiaya.findMany()
// }
// async function getDatapegawai() {
//     return await prisma.pegawai.findMany()
// }

export default async function dataPage() {
    const spj = await getData()
    const datasppd = await getDatasppd()
    // const dataspj = await getDataspj()
    // const datapegawai = await getDatapegawai()
    // console.log(sppd);
    return (
        <div className='bg-white rounded-lg mx-4 p-4'>
            <div className='grid'>
                <div className="col-12">
                    <div className='rounded-lg bg-slate-100 w-85 ml-2 mb-2 mr-2 border border-slate-300'><AddData sppd={datasppd}/></div>
                </div>
                <div className='col-12'>
                    <div className='bg-slate-100 w-85 ml-2 mr-2 p-2 border border-slate-300'>
                        <div className='flex justify-between m-2'>
                            <div className='text-xl items-center'> Tabel SPJ</div>
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
                                <th className='p-3 text-sm font-semibold tracking-wide text-center'>No SPPD</th>
                                <th className='p-3 text-sm font-semibold tracking-wide text-center'>Nama Pegawai</th>
                                <th className='p-3 text-sm font-semibold tracking-wide text-center'>File SPPD</th>
                                <th className='p-3 text-sm font-semibold tracking-wide text-center'>File Kwitansi</th>
                                <th className='p-3 text-sm font-semibold tracking-wide text-center'>File Rincian Biaya</th>
                                <th className='w-24 p-3 text-sm font-semibold tracking-wide text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-grey-300'>
                                {spj.map((Spj, index) => (
                                    <tr key={Spj.id}>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {index + 1}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {Spj.sppd.no}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {Spj.sppd.pegawai.nama}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {Spj.sppd.file}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {Spj.filekwitansi}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {Spj.filerincianbiaya}
                                        </td>
                                        <td className='text-sm text-gray-700 text-center whitespace-nowrape'>
                                            <div className='flex justify-center text-center'>
                                                    <EditData spj={Spj} sppd={datasppd}/>
                                                    <DeleteData spj={Spj}/>
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

