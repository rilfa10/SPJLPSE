"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { HiCheck, HiXMark } from 'react-icons/hi2';

const EditData = ({ Pegawai }) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div
                onClick={() => setOpen(true)}
                className='card m-2 rounded-lg flex justify-end items-center text-white pr-4 rounded-md bg-green-500 cursor-pointer p-2'>
                <AiOutlineFileSearch className='h-5 w-4' />
                <span className=' ml-1 font-medium'>Detail</span>
            </div>
            <div>
                {open && (
                    <div className="bg-black/50 fixed inset-0">
                        <div className="flex justify-center items-center h-full">
                            <div className=" rounded-lg flex flex-col items-end bg-slate-300 w-1/3 p-5">
                                <button
                                    onClick={() => setOpen(false)}
                                    className="text-2l mb-3">
                                    &times;
                                </button>
                                <form className='w-full text-black' >
                                    <h1 className='text-2xl pv-3 text-center font-semibold'>Detail Pegawai</h1>
                                    <label className="my-2 label font-bold">Nip</label>
                                    <input
                                        className="rounded-lg w-full my-2 p-2"
                                        value={Pegawai.nip}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Nama</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={Pegawai.nama}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Pangkat GOL/RU</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={Pegawai.golongan}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Alamat</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={Pegawai.alamat}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Telepon</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={Pegawai.telp}
                                        disabled
                                    />
                                    <label className="my-2 label font-bold">Jabatan</label>
                                    <input
                                        className="rounded-lg w-full my-3 p-2"
                                        value={Pegawai.jabatan.nama}
                                        disabled
                                    />
                                    <div className='flex justify-center'>
                                        <div
                                            onClick={() => setOpen(false)}
                                            className='card ml-2 mb-0 rounded-lg flex justify-end items-center text-white pl-4 pr-4 rounded-md bg-blue-500 cursor-pointer p-2'>
                                            <HiXMark />
                                            <span className=' ml-1 font-medium'>Tutup</span>
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

