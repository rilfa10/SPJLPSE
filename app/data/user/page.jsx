import React from 'react';
import AddData from './addUser';
import EditData from './editUser';
import DeleteData from './deleteUser';
import DetailUser from './detailUser';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function getData() {
    return await prisma.user.findMany({include:{
        pegawai: true,
    }})


}

async function getDatapegawai() {
    return await prisma.pegawai.findMany()

}

export default async function dataPage() {
    const user = await getData()
    const datapegawai = await getDatapegawai()
    console.log(user);
    return (
        <div className='bg-white rounded-lg mx-4 p-4'>
            <div className='grid'>
                <div className="col-12">
                    <div className='rounded-lg bg-slate-100 w-85 ml-2 mb-2 mr-2 border border-slate-300'><AddData pegawai={datapegawai}/></div>
                </div>
                <div className='col-12'>
                    <div className='bg-slate-100 w-85 ml-2 mr-2 p-2 border border-slate-300'>
                        <div className='flex justify-between m-2'>
                            <div className='text-xl items-center'> Tabel User</div>
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
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>Username</th>
                                    {/* <th className='p-3 text-sm font-semibold tracking-wide text-center'>Password</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>Email</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>Nama Pegawai</th> */}
                                    <th className='w-24 p-3 text-sm font-semibold tracking-wide text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-grey-300'>
                                {user.map((User, index) => (
                                    <tr key={User.id}>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {index + 1}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {User.username}
                                        </td>
                                        {/* <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {User.password}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {User.email}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {User.pegawai.nama}
                                        </td> */}
                                        <td className='text-sm text-gray-700 whitespace-nowrape'>
                                            <div className='flex justify-center'>
                                                    <DetailUser user={User}/>
                                                    <EditData user={User} pegawai={datapegawai}/>
                                                    <DeleteData user={User}/>
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
