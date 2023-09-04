import React from 'react'
import AddData from './addsppd';
import EditData from './editsppd';
import DeleteData from './deletesppd';
import moment from 'moment';
import 'moment/locale/id'
moment.locale('id')
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function getData() {
    return await prisma.sppd.findMany({include:{
        pegawai: true,
    }})


}

async function getDatapegawai() {
    return await prisma.pegawai.findMany()

}

export default async function dataPage() {
    const sppd = await getData()
    const datapegawai = await getDatapegawai()
    // console.log(sppd);
    return (
        <div className='bg-white rounded-lg mx-4 p-4'>
            <div className='grid'>
                <div className="col-12">
                    <div className='rounded-lg bg-slate-100 w-85 ml-2 mb-2 mr-2 border border-slate-300'><AddData pegawai={datapegawai}/></div>
                </div>
                <div className='col-12'>
                    <div className='bg-slate-100 w-85 ml-2 mr-2 p-2 border border-slate-300'>
                        <div className='flex justify-between m-2'>
                            <div className='text-xl items-center'> Tabel SPPD</div>
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
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>No.SPPD</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>Tgl.Input</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>Nama Pegawai</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>Nip</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>File SPPD</th>
                                    <th className='w-24 p-3 text-sm font-semibold tracking-wide text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-grey-300'>
                                {sppd.map((Sppd, index) => (
                                    <tr key={Sppd.id}>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {index + 1}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {Sppd.no}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {/* {Sppd.tglsppd} */}
                                            {moment(Sppd.tglsppd).format('LL')}

                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {Sppd.pegawai.nama}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {Sppd.pegawai.nip}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {Sppd.file}
                                        </td>
                                        <td className='text-sm text-gray-700 text-center whitespace-nowrape'>
                                            <div className='flex justify-center'>
                                                    <EditData sppd={Sppd} pegawai={datapegawai}/>
                                                    <DeleteData sppd={Sppd}/>
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

