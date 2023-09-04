"use client";

import { useState } from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { HiCheck, HiXMark } from 'react-icons/hi2';
// import Download from './cetak/downloadPDF';
import Generate from './cetak/generate';
import moment from 'moment';
import 'moment/locale/id'
moment.locale('id')

const EditData = ({kwitansi }) => {
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
                                        value={moment(kwitansi.tgl).format('LL')}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Mata Anggaran</label>
                                    <input
                                        className="rounded-lg w-full my-2 p-2"
                                        value={kwitansi.mataanggaran}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Di Bukui</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={kwitansi.dibukui}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Program</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={kwitansi.program}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Kegiatan</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={kwitansi.kegiatan}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Terima Dari</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={kwitansi.terimadari}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Terbilang</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={kwitansi.terbilang}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Pembayaran</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={kwitansi.pembayaran}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Terbilang </label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={kwitansi.terbilangrp}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Sudah di bayar pada Tanggal  </label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={moment(kwitansi.dibayarpadatgl).format('LL')}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Pegawai yang melakukan perjalanan</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={kwitansi.sppd.pegawai.nama}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Ketua Pengguna Anggaran </label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={kwitansi.ketuaanggaran.pegawai.nama}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Pejabat Pelaksana Teknis </label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={kwitansi.pejabatpelaksana.pegawai.nama}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Bendahara</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={kwitansi.pegawai.nama}
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
                                        <Generate kwitansi={kwitansi}/>
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

