import React from 'react'
import AddData from './addJabatan'
import EditData from './editJabatan'
import DeleteData from './deleteJabatan'

async function getData() {
    const res = await fetch("http://localhost:3000/api/jabatan", { cache: 'no-store' });

    if (!res.ok) {
        throw new Error("failed to fetch data")
    }

    return res.json();

}
const DataPage = async () => {
    const datajabatan = await getData()
    console.log(datajabatan);
    return (
        <div className='bg-white rounded-lg mx-4 p-4'>
            <div className='grid'>
                <div className="col-12">
                    <div className='rounded-lg bg-slate-100 w-85 ml-2 mb-2 mr-2 border border-slate-300'><AddData /></div>
                </div>
                <div className='col-12'>
                    <div className='bg-slate-100 w-85 ml-2 mr-2 p-2 border border-slate-300'>
                        <div className='flex justify-between m-2'>
                            <div className='text-xl items-center'> Tabel Jabatan</div>
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
                                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>jabatan</th>
                                    <th className='w-24 p-3 text-sm font-semibold tracking-wide text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-grey-300'>
                                {datajabatan.map((Jabatan, index) => (
                                    <tr key={Jabatan.id}>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {index + 1}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 whitespace-nowrape'>
                                            {Jabatan.nama}
                                        </td>{' '}
                                        <td className='text-sm text-gray-700 whitespace-nowrape'>
                                            <div className='flex justify-center'>
                                                <EditData Jabatan={Jabatan} />
                                                <DeleteData Jabatan={Jabatan} />
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