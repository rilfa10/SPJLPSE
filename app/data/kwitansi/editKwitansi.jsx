"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { AiOutlineForm } from 'react-icons/ai';
import { HiCheck, HiXMark } from 'react-icons/hi2';
import FormKwitansi from '@/components/form/formadd';

const EditData = ({ kwitansi, sppd, ketuaAnggaran, pejabatPelaksana, pegawai }) => {
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [inputs, setInputs] = useState(kwitansi);

    const handleSubmit = async (e) => {
        inputs.tgl = new Date(inputs.tgl).toISOString()
        inputs.dibayarpadatgl = new Date(inputs.dibayarpadatgl).toISOString()
        inputs.sppdId = parseInt(inputs.sppdId)
        inputs.ketuaanggaranId = parseInt(inputs.ketuaanggaranId)
        inputs.pejabatpelaksanaId = parseInt(inputs.pejabatpelaksanaId)
        inputs.pegawaiId = parseInt(inputs.pegawaiId)
        console.log(inputs)
        e.preventDefault();
        axios.patch(`/api/kwitansi/${kwitansi.id}`, inputs).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setOpen(false);
            router.refresh();
        });

    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(prevState => ({ ...prevState, [name]: value }));
    };

    async function getData() {
        const res = await fetch("http://localhost:3000/api/kwitansi");

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        return res.json();
    };
    return (
        <div>
            {/* <div className='rounded-lg flex justify-between m-2 p-2 border border-slate-100 '> */}
            <div
                onClick={() => setOpen(true)}
                className='card m-2 rounded-lg flex justify-end items-center text-white pr-4 rounded-md bg-amber-400 cursor-pointer p-2'>
                <AiOutlineForm className='h-5 w-4' />
                <span className=' ml-1 font-medium'>Edit</span>
            </div>

            {/* </div> */}
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
                                <form onSubmit={handleSubmit} >
                                    <h1 className='text-2xl pv-3 mb-6 text-center font-semibold'>Form Kwitansi</h1>

                                    <FormKwitansi
                                        label='Tanggal'
                                        type='date'
                                        name='tgl'
                                        placeholder=''
                                        value={inputs.tgl}
                                        change={handleChange}
                                        errorMessage={` Jabatan wajib di isi, silahkan masukkan jabatan anda !`}
                                        // pattern='^[A-Z][A-z\s]{1,}$'
                                        required='true'
                                    />

                                    <FormKwitansi
                                        label='Mata Anggaran'
                                        type='text'
                                        name='mataanggaran'
                                        placeholder=''
                                        value={inputs.mataanggaran}
                                        change={handleChange}
                                        errorMessage={` Jabatan wajib di isi, silahkan masukkan jabatan anda !`}
                                        // pattern='^[A-Z][A-z\s]{1,}$'
                                        required='true'
                                    />

                                    <FormKwitansi
                                        label='Di Bukui'
                                        type='text '
                                        name='dibukui'
                                        placeholder=''
                                        value={inputs.dibukui}
                                        change={handleChange}
                                        errorMessage={` Jabatan wajib di isi, silahkan masukkan jabatan anda !`}
                                        // pattern='^[A-Z][A-z\s]{1,}$'
                                        required='true'
                                    />

                                    <FormKwitansi
                                        label='Program'
                                        type='text'
                                        name='program'
                                        placeholder=''
                                        value={inputs.program}
                                        change={handleChange}
                                        errorMessage={` Jabatan wajib di isi, silahkan masukkan jabatan anda !`}
                                        // pattern='^[A-Z][A-z\s]{1,}$'
                                        required='true'
                                    />

                                    <FormKwitansi
                                        label='Kegiatan'
                                        type='text'
                                        name='kegiatan'
                                        placeholder=''
                                        value={inputs.kegiatan}
                                        change={handleChange}
                                        errorMessage={` Jabatan wajib di isi, silahkan masukkan jabatan anda !`}
                                        // pattern='^[A-Z][A-z\s]{1,}$'
                                        required='true'
                                    />

                                    <FormKwitansi
                                        label='Sudah Terima Dari'
                                        type='text'
                                        name='terimadari'
                                        placeholder=''
                                        value={inputs.terimadari}
                                        change={handleChange}
                                        errorMessage={` Jabatan wajib di isi, silahkan masukkan jabatan anda !`}
                                        // pattern='^[A-Z][A-z\s]{1,}$'
                                        required='true'
                                    />

                                    <FormKwitansi
                                        label='Terbilang'
                                        type='text'
                                        name='terbilang'
                                        placeholder=''
                                        value={inputs.terbilang}
                                        change={handleChange}
                                        errorMessage={` Jabatan wajib di isi, silahkan masukkan jabatan anda !`}
                                        // pattern='^[A-Z][A-z\s]{1,}$'
                                        required='true'
                                    />

                                    <FormKwitansi
                                        label='Untuk Pembayaran'
                                        type='text'
                                        name='pembayaran'
                                        placeholder=''
                                        value={inputs.pembayaran}
                                        change={handleChange}
                                        errorMessage={` Jabatan wajib di isi, silahkan masukkan jabatan anda !`}
                                        // pattern='^[A-Z][A-z\s]{1,}$'
                                        required='true'
                                    />

                                    <FormKwitansi
                                        label='Terbilang  '
                                        type='text'
                                        name='terbilangrp'
                                        placeholder='Rp...'
                                        value={inputs.terbilangrp}
                                        change={handleChange}
                                        errorMessage={` Jabatan wajib di isi, silahkan masukkan jabatan anda !`}
                                        // pattern='^[A-Z][A-z\s]{1,}$'
                                        required='true'
                                    />

                                    <FormKwitansi
                                        label='Sudah di bayar pada tanggal'
                                        type='date'
                                        name='dibayarpadatgl'
                                        placeholder=''
                                        value={inputs.dibayarpadatgl}
                                        change={handleChange}
                                        errorMessage={` Jabatan wajib di isi, silahkan masukkan jabatan anda !`}
                                        // pattern='^[A-Z][A-z\s]{1,}$'
                                        required='true'

                                    />
                                    <label className=" my-2 label font-bold">Pegawai yang melakukan perjalanan </label>
                                    <select name='sppdId' value={inputs.sppdId || Number("")}
                                        onChange={handleChange} className="rounded-lg w-full p-2 my-2 select select-bordered">
                                        <option value="">
                                            select a SPPD
                                        </option>
                                        {sppd.map((Sppd, index) => (
                                            <option value={Sppd.id} key={Sppd.id} >{Sppd.pegawai.nama}</option>
                                        ))}

                                    </select>

                                    <label className=" my-2 label font-bold">Ketua Pengguna Anggaran</label>
                                    <select name='ketuaanggaranId' value={inputs.ketuaanggaranId || Number("")}
                                        onChange={handleChange} className="rounded-lg w-full p-2 my-2 select select-bordered">
                                        <option value="">
                                            select a Ketua Pengguna Anggaran
                                        </option>
                                        {ketuaAnggaran.map((Ketuaanggaran, index) => (
                                            <option value={Ketuaanggaran.id} key={Ketuaanggaran.id} >{Ketuaanggaran.pegawai.nama}</option>
                                        ))}

                                    </select>

                                    <label className=" my-2 label font-bold">Pejabat Pelaksana Teknis</label>
                                    <select name='pejabatpelaksanaId' value={inputs.pejabatpelaksanaId || Number("")}
                                        onChange={handleChange} className="rounded-lg w-full p-2 my-2 select select-bordered">
                                        <option value="">
                                            select a Pejabat Pelaksana Teknis
                                        </option>
                                        {pejabatPelaksana.map((Pejabatpelaksana, index) => (
                                            <option value={Pejabatpelaksana.id} key={Pejabatpelaksana.id} >{Pejabatpelaksana.pegawai.nama}</option>
                                        ))}
                                    </select>

                                    <label className=" my-2 label font-bold">Bendahara</label>
                                    <select name='pegawaiId' value={inputs.pegawaiId || Number("")}
                                        onChange={handleChange} className="rounded-lg w-full p-2 my-2 select select-bordered">
                                        <option value="">
                                            select a Pegawai
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
    );
};

export default EditData;

