import React from 'react'
import AddBukti from './addbukti'
import EditBukti from './editbukti'
import DeleteBukti from './deletebukti'

async function getData() {
    return await prisma.Bukti.findMany({
        include: {
            sppd: {
                include: {
                    pegawai: {
                        include: {
                            jabatan: true
                        }
                    },
                }
            }
        }
    })
    // const res = await fetch("http://localhost:3000/api/bukti", { cache: 'no-store' });

    // if (!res.ok) {
    //     throw new Error("failed to fetch data")
    // }

    // return res.json();

}
async function getSppd() {
    return await prisma.sppd.findMany()
} 

const DataPage = async () => {
    const bukti = await getData()
    const DataSppd = await getSppd()
    console.log(bukti);
    return (
        <div className='bg-white rounded-lg mx-4 p-4'>
            <div className='grid'>
                <div className="col-12">
                    <div className='rounded-lg bg-slate-100 w-85 ml-2 mb-2 mr-2 border border-slate-300'><AddBukti sppd={DataSppd} /></div>
                </div>
                <div className='col-12'>
                    <div className='bg-slate-100 w-85 ml-2 mr-2 p-2 border border-slate-300'>
                        <div className='flex justify-between m-2'>
                            <div className='text-xl items-center'> Tabel Bukti Pembayaran Perjalanan Dinas</div>
                        </div>
                    </div>
                    <div className='rounded-b bg-slate-100 ml-2 mr-2'>
                        <div className='mb-2'>

                        </div>
                        <table className='w-full'>
                            <thead className='rounded-lg bg-grey-50 p-2 border border-slate-300 divide-slate-300 '>
                                <tr>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>No</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>No.SPPD</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>Nama Pegawai</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>Nip</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>Jabatan</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>FIle SPPD</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>Bukti Pembayaran Tiket Berangkat</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>Bukti Pembayaran TIket Pulang</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>Bukti Transfer Uang Saku</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>Bukti Pembayaran Hotel</th>
                                    <th className='p-3 text-sm font-semibold tracking-wide text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-grey-300'>
                                {bukti.map((Bukti, index) => (
                                    <tr key={Bukti.id}>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {index + 1}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {moment(Bukti.sppd.pegawai.nama).format('LL')}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {Bukti.sppd.pegawai.nip}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {Bukti.sppd.pegawai.jabatan.nama}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {Bukti.sppd.file}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {Bukti.buktitransportasi}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {Bukti.tfsaku}
                                        </td>
                                        <td className='p-3 text-sm text-gray-700 text-center whitespace-nowrape'>
                                            {Bukti.buktipesanhotel}
                                        </td>
                                        <td className='text-sm text-gray-700 text-center whitespace-nowrape'>
                                            <div className='flex justify-center text-center'>
                                                <EditBukti bukti={Bukti} />
                                                <DeleteBukti bukti={Bukti} />
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

export default DataPage;
