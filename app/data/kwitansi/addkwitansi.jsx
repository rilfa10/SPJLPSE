"use client";

import { useState } from "react";
import { FaPlus } from 'react-icons/fa';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { HiCheck, HiXMark } from 'react-icons/hi2';
// import DropdownForm from '@/components/form/dropdown';
// import Dropdown from '@/components/form/dropdownno';

export default function AddData({ sppd, ketuaAnggaran, pejabatPelaksana, pegawai }) {
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [inputs, setInputs] = useState({});

    const handleSubmit = (e) => {
        inputs.sppdId = parseInt (inputs.sppdId)
        inputs.ketuaanggaranId = parseInt (inputs.ketuaanggaranId)
        inputs.pejabatpelaksanaId = parseInt (inputs.pejabatpelaksanaId)
        inputs.pegawaiId = parseInt (inputs.pegawaiId)
        inputs.tgl = new Date(inputs.tgl).toISOString()
        inputs.dibayarpadatgl = new Date(inputs.dibayarpadatgl).toISOString()

        console.log(inputs);
        e.preventDefault();
        axios.post('/api/kwitansi', inputs).then(res => {
            // console.log(inputs)
            console.log(res)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setInputs({})
            setOpen(false);
            router.refresh();
        })
    }
    const handleModal = () => {
        setOpen(!open)
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(prevState => ({ ...prevState, [name]: value }));
    }

    return (
        <div>
            <div>
                <div className='flex justify-between m-2'>
                    <div className='rounded-lg flex justify-between m-2 p-2 border-slate-100'>
                        <div
                            onClick={() => setOpen(true)}
                            className='card mb-0 rounded-lg flex justify-end items-center text-white pl-4 pr-4 rounded-md bg-blue-500 cursor-pointer p-2'>
                            <FaPlus />
                            <span className='ml-1font-medium'>New Data</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {open && (
                    <div className="bg-black/50 fixed inset-0">
                        <div className="modal-box overflow-auto flex justify-center items-center h-full">
                            <div className="mt-auto mb-auto rounded-lg flex flex-col items-end bg-slate-300 w-1/3 p-5">
                                <button
                                    onClick={() => setOpen(false)}
                                    className="text-2l mb-3">
                                    &times;
                                </button>
                                <form className='w-full text-black' onSubmit={handleSubmit}>
                                    <h1 className='text-2xl pv-3 mb-6 text-center font-semibold'>Form Kwitansi</h1>

                                    <label className="my-2 label font-bold">Tanggal</label>
                                    <input
                                        type="date"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="tgl input"
                                        name="tgl"
                                        value={inputs.tgl || ""}
                                        required
                                        onChange={handleChange}
                                    />

                                    <label className="my-2 label font-bold">Mata Anggaran</label>
                                    <input
                                        type="text"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="Mata anggaran"
                                        name="mataanggaran"
                                        value={inputs.mataanggaran || ""}
                                        onChange={handleChange}
                                    />

                                    <label className="my-2 label font-bold">Dibukui</label>
                                    <input
                                        type="text"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="dibukui"
                                        name="dibukui"
                                        value={inputs.dibukui || ""}
                                        onChange={handleChange}
                                    />

                                    <label className="my-2 label font-bold">Program</label>
                                    <input
                                        type="text"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="Program"
                                        name="program"
                                        value={inputs.program || ""}
                                        onChange={handleChange}
                                    />

                                    <label className="my-2 label font-bold">Kegiatan</label>
                                    <input
                                        type="text"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="Kegiatan"
                                        name="kegiatan"
                                        value={inputs.kegiatan || ""}
                                        onChange={handleChange}
                                    />

                                    <label className="my-2 label font-bold">Terima Dari</label>
                                    <input
                                        type="text"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="Terima Dari"
                                        name="terimadari"
                                        value={inputs.terimadari || ""}
                                        onChange={handleChange}
                                    />

                                    <label className="my-2 label font-bold">Terbilang</label>
                                    <input
                                        type="text"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="Terbilang"
                                        name="terbilang"
                                        value={inputs.terbilang || ""}
                                        onChange={handleChange}
                                    />

                                    <label className="my-2 label font-bold">Pembayaran </label>
                                    <input
                                        type="text"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="pembayaran"
                                        name="pembayaran"
                                        value={inputs.pembayaran || ""}
                                        onChange={handleChange}
                                    />

                                    <label className="my-2 label font-bold">Terbilang</label>
                                    <input
                                        type="text"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="Terbilang"
                                        name="terbilangrp"
                                        value={inputs.terbilangrp || ""}
                                        onChange={handleChange}
                                    />

                                    <label className="my-2 label font-bold">Sudah di bayar pada tanggal</label>
                                    <input
                                        type="date"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder=""
                                        name="dibayarpadatgl"
                                        value={inputs.dibayarpadatgl || ""}
                                        onChange={handleChange}
                                    />
                                   
                                   <label className=" my-2 label font-bold">Pegawai yang melakukan perjalanan</label>
                                    <select name='sppdId' value={inputs.sppdId || Number("")}
                                        onChange={handleChange} className="rounded-lg w-full p-2 my-2 select select-bordered">
                                        <option value="">
                                            select a sppd
                                        </option>
                                        {sppd.map((Sppd, index) => (
                                            <option value={Sppd.id} key={Sppd.id} >{Sppd.pegawai.nama}</option>
                                        ))}

                                    </select>
                                    
                                    <label className=" my-2 label font-bold">Ketua Pengguna Anggaran</label>
                                    <select name='ketuaanggaranId' value={inputs.ketuaanggaranId || Number("")}
                                        onChange={handleChange} className="rounded-lg w-full p-2 my-2 select select-bordered">
                                        <option value="">
                                            select a spj
                                        </option>
                                        {ketuaAnggaran.map((Ketuaanggaran, index) => (
                                            <option value={Ketuaanggaran.id} key={Ketuaanggaran.id} >{Ketuaanggaran.pegawai.nama}</option>
                                        ))}

                                    </select>

                                    <label className=" my-2 label font-bold">Pejabat Pelaksana Teknis</label>
                                    <select name='pejabatpelaksanaId' value={inputs.pejabatpelaksanaId || Number("")}
                                        onChange={handleChange} className="rounded-lg w-full p-2 my-2 select select-bordered">
                                        <option value="">
                                            select a Pejabat
                                        </option>
                                        {pejabatPelaksana.map((Pejabatpelaksana, index) => (
                                            <option value={Pejabatpelaksana.id} key={Pejabatpelaksana.id} >{Pejabatpelaksana.pegawai.nama}</option>
                                        ))}

                                    </select>

                                    <label className=" my-2 label font-bold">Bendahara</label>
                                    <select name='pegawaiId' value={inputs.pegawaiId || Number("")}
                                        onChange={handleChange} className="rounded-lg w-full p-2 my-2 select select-bordered">
                                        <option value="">
                                            select a pegawai
                                        </option>
                                        {pegawai.map((Pegawai, index) => (
                                            <option value={Pegawai.id} key={Pegawai.id} >{Pegawai.nama}</option>
                                        ))}

                                    </select>
                                    <div className='flex justify-center'>
                                        <button

                                            className='card mb-0 rounded-lg flex justify-end items-center text-white pl-4 pr-4 rounded-md bg-blue-500 cursor-pointer p-2'>
                                            <HiCheck />
                                            <span className=' ml-1 font-medium'>Simpan</span>
                                        </button>
                                        <button
                                            onClick={() => setOpen(false)}
                                            className='card ml-2 mb-0 rounded-lg flex justify-end items-center text-white pl-4 pr-4 rounded-md bg-blue-500 cursor-pointer p-2'>
                                            <HiXMark />
                                            <span className=' ml-1 font-medium'>Tutup</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}