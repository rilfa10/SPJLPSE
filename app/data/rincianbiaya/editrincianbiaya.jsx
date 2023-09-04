"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { AiOutlineForm } from 'react-icons/ai';
import { HiCheck, HiXMark } from 'react-icons/hi2';
import DropdownForm from '@/components/form/dropdown';
import Dropdown from '@/components/form/dropdownno';

const EditData = ({ rincianBiaya, spj, pegawai, sppd, ketuaAnggaran, pejabatPelaksana }) => {
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [inputs, setInputs] = useState(rincianBiaya);

    const handleSubmit = async (e) => {
        inputs.tgl = new Date(inputs.tgl).toISOString()
        inputs.spjId = parseInt(inputs.spjId)
        inputs.pegawaiId = parseInt(inputs.pegawaiId)
        inputs.sppdId = parseInt (inputs.sppdId)
        inputs.ketuaanggaranId = parseInt (inputs.ketuaanggaranId)
        inputs.pejabatpelaksanaId = parseInt (inputs.pejabatpelaksanaId)


        e.preventDefault();
        axios.patch(`/api/rincianbiaya/${rincianBiaya.id}`, inputs).then(res => {
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
                        <div className="modal-box overflow-auto flex justify-center items-center h-full">
                            <div className="mt-auto mb-auto rounded-lg flex flex-col items-end bg-slate-300 w-1/3 p-5">
                                <button
                                    onClick={() => setOpen(false)}
                                    className="text-2l mb-3">
                                    &times;
                                </button>
                                <form className='w-full text-black' onSubmit={handleSubmit}>
                                    <h1 className='text-2xl pv-3 mb-6 text-center font-semibold'>Form Rincian Biaya</h1>

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

                                    <label className="my-2 label font-bold">Lama Perjalanan</label>
                                    <input
                                        type="text"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="masukkan angka"
                                        name="lamaperjalanan"
                                        value={inputs.lamaperjalanan || ""}
                                        onChange={handleChange}
                                    />

                                    <label className="my-2 label font-bold">Biaya Transport Berangkat</label>
                                    <input
                                        type="text"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="biaya transport berangkat"
                                        name="transportberangkat"
                                        value={inputs.transportberangkat || ""}
                                        onChange={handleChange}
                                    />

                                    <label className="my-2 label font-bold">Biaya Transport pulang</label>
                                    <input
                                        type="text"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="biaya transport pulang"
                                        name="transportpulang"
                                        value={inputs.transportpulang || ""}
                                        onChange={handleChange}
                                    />

                                    <label className="my-2 label font-bold">Biaya Taxi Bandara Berau</label>
                                    <input
                                        type="text"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="Biaya taxi bandara kalimarau berau"
                                        name="taxilocal"
                                        value={inputs.taxilocal || ""}
                                        onChange={handleChange}
                                    />

                                    <label className="my-2 label font-bold">Biaya Taxi Bandara Luar</label>
                                    <input
                                        type="text"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="Biaya taxi bandara luar"
                                        name="taxiluar"
                                        value={inputs.taxiluar || ""}
                                        onChange={handleChange}
                                    />

                                    <label className="my-2 label font-bold">Biaya Penginapan</label>
                                    <input
                                        type="text"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="total biaya penginapan/hotel"
                                        name="fasilitas"
                                        value={inputs.fasilitas || ""}
                                        onChange={handleChange}
                                    />

                                    <label className="my-2 label font-bold">Biaya Saku/hari </label>
                                    <input
                                        type="text"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="Biaya saku perhari"
                                        name="sakuperhari"
                                        value={inputs.sakuperhari || ""}
                                        onChange={handleChange}
                                    />

                                    <label className="my-2 label font-bold">Total Biaya Saku </label>
                                    <input
                                        type="text"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="total dana uang saku"
                                        name="totaldanaharian"
                                        value={inputs.totaldanaharian || ""}
                                        onChange={handleChange}
                                    />
                                    {/* <Dropdown
                                        label='No Spj'
                                        name='spjId'
                                        value={inputs.spjId}
                                        change={handleChange}
                                        errorMessage='required to select one of the data'
                                        required='true'
                                        data={spj}
                                    /> */}

                                    <DropdownForm
                                        label='Bendahara '
                                        name='pegawaiId'
                                        value={inputs.pegawaiId}
                                        change={handleChange}
                                        errorMessage='required to select one of the data'
                                        required='true'
                                        data={pegawai}
                                    />

                                    <Dropdown
                                        label='SPPD'
                                        name='sppdId'
                                        value={inputs.sppdId}
                                        change={handleChange}
                                        errorMessage='required to select one of the data'
                                        required='true'
                                        data={sppd}
                                    />

                                    {/* <DropdownForm
                                        label='Ketua Pengguna Anggaran'
                                        name='ketuaanggaranId'
                                        value={inputs.ketuaanggaranId}
                                        change={handleChange}
                                        errorMessage='required to select one of the data'
                                        required='true'
                                        data={ketuaAnggaran}
                                    />

                                    <DropdownForm
                                        label='Pejabat Pelaksana Teknis'
                                        name='pejabatpelaksanaId'
                                        value={inputs.pejabatpelaksanaId}
                                        change={handleChange}
                                        errorMessage='required to select one of the data'
                                        required='true'
                                        data={pejabatPelaksana}
                                    /> */}
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

