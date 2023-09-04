"use client";

import { useState } from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { HiCheck, HiXMark } from 'react-icons/hi2';
// import Download from './cetak/downloadPDF';
import Generate from './cetak/generate';
import moment from 'moment';
import 'moment/locale/id'
moment.locale('id')

const EditData = ({rincianBiaya }) => {
    const [open, setOpen] = useState(false);
    // const Jumlah = parseInt(rincianBiaya.transportberangkat)+parseInt(rincianBiaya.transportpulang)+parseInt(rincianBiaya.taxilocal)+parseInt(rincianBiaya.taxiluar)+parseInt(rincianBiaya.fasilitas)+parseInt(rincianBiaya.totaldanaharian)
    // console.log(Jumlah);

    return (
        <div>
            <div
                onClick={() => setOpen(true)}
                className='card m-2 flex justify-end items-center text-white pr-4 rounded-md bg-green-500 cursor-pointer p-2'>
                <AiOutlineFileSearch className='h-5 w-4' />
                <span className=' ml-1 font-medium'>Detail</span>
            </div>
            <div>
                {open && (
                    <div className="bg-black/50 fixed inset-0">
                        <div className="overflow-auto flex justify-center items-center h-full">
                            <div className="mt-auto mb-auto rounded-lg flex flex-col items-end bg-slate-300 w-1/3 p-5">
                                <button
                                    onClick={() => setOpen(false)}
                                    className="text-2l mb-3">
                                    &times;
                                </button>
                                <form className='w-full text-black' >
                                    <h1 className='text-2xl pv-3 mb-6 text-center'>Detail Rincian Biaya</h1>
                                    <label className="my-2 label font-bold">Tanggal</label>
                                    <input
                                        className="rounded-lg w-full my-2 p-2"
                                        value={moment(rincianBiaya.tgl).format('LL')}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Lama Perjalanan</label>
                                    <input
                                        className="rounded-lg w-full my-2 p-2"
                                        value={rincianBiaya.lamaperjalanan}
                                        disabled
                                    />
                                     {/* <label className="my-2 label font-bold">jumlah</label>
                                    <input
                                        className="rounded-lg w-full my-2 p-2"
                                        value={Jumlah}
                                        disabled
                                    /> */}
                                    <label className="my-2 label font-bold">Biaya Transportasi Berangkat</label>
                                    <input
                                        className="rounded-lg w-full my-2 p-2"
                                        value={rincianBiaya.transportberangkat}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Biaya Transportasi Pulang</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={rincianBiaya.transportpulang}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Biaya Taxi Bandara Kalimarau</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={rincianBiaya.taxilocal}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Biaya Taxi Bandara Luar</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={rincianBiaya.taxiluar}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Biaya Penignapan/Hotel</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={rincianBiaya.fasilitas}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Uang Harian</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={rincianBiaya.sakuperhari}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Total Biaya Harian</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={rincianBiaya.totaldanaharian}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Pegawai Yang Melakukan Perjalanan Dinas</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={rincianBiaya.sppd.pegawai.nama}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Bendahara</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={rincianBiaya.pegawai.nama}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">No.SPPD</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={rincianBiaya.sppd.no}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Kuasa Pengguna Anggaran</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={rincianBiaya.ketuaanggaran.pegawai.nama}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Pejabat Pelaksana Teknis Kegiatan</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={rincianBiaya.pejabatpelaksana.pegawai.nama}
                                        disabled
                                    />
                                    
                                    <div className='flex justify-center'>
                                        <div
                                            onClick={() => setOpen(false)}
                                            className='card ml-2 mb-0 flex justify-end items-center text-white pl-4 pr-4 rounded-md bg-blue-500 cursor-pointer p-2'>
                                            <HiXMark />
                                            <span className=' ml-1 font-medium'>Tutup</span>
                                        </div>
                                        <div
                                            onClick={() => setOpen(true)}
                                            className='card ml-2 mb-0 flex justify-end items-center text-white pl-4 pr-4 rounded-md bg-blue-500 cursor-pointer p-2'>
                                        <Generate rincianbiaya={rincianBiaya}/>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                )}

            </div>
        </div>
    );
};

export default EditData;

