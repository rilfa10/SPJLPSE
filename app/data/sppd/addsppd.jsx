"use client";

import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { HiCheck, HiXMark } from 'react-icons/hi2';

export default function AddData({ pegawai }) {
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [inputs, setInputs] = useState({});
    // const [pegawai, setJabatan] = useState("");

    const handleSubmit = (e) => {
        inputs.pegawaiId = parseInt(inputs.pegawaiId)
        inputs.tglsppd = new Date(inputs.tglsppd).toISOString()
        e.preventDefault();
        axios.post('/api/sppd', inputs).then(res => {
            console.log(inputs)
            console.log(res)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setInputs({})
            setOpen(false);
            router.refresh();
        })

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
                    <div className='rounded-lg flex justify-between m-2 p-2 border border-slate-100 '>
                        <div
                            onClick={() => setOpen(true)}
                            className='card mb-0 rounded-lg flex justify-end items-center text-white pl-4 pr-4 rounded-md bg-blue-500 cursor-pointer p-2'>
                            <FaPlus />
                            <span className=' ml-1 font-medium'>New Data</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {open && (
                    <div className="bg-black/50 fixed inset-0">
                        <div className="flex justify-center items-center h-full">
                            <div className="rounded-lg flex flex-col items-end bg-slate-300 w-1/3 p-5">
                                <button
                                    onClick={() => setOpen(false)}
                                    className="text-2l mb-3">
                                    &times;
                                </button>
                                <form className='w-full text-black' >
                                    <h1 className='text-2xl pv-3 mb-4 text-center font-semibold'>Form SPPD</h1>

                                    <label className="my-2 label font-bold">No.SPPD</label>
                                    <input
                                        type="text"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="Nomor SPPD"
                                        name="no"
                                        value={inputs.no || ""}
                                        onChange={handleChange}
                                    />
                                    <label className="my-2 label font-bold">Tgl Input</label>
                                    <input
                                        type="Date"
                                        className="rounded-lg w-full my-3 p-2"
                                        placeholder=""
                                        name="tglsppd"
                                        value={inputs.tglsppd || ""}
                                        onChange={handleChange}
                                    />
                                    <label className="my-2 label font-bold">File SPPD</label>
                                    <input
                                        type="file"
                                        className="rounded-lg w-full my-3 p-2"
                                        placeholder=""
                                        name="file"
                                        value={inputs.file || ""}
                                        onChange={handleChange}
                                    />

                                    <label className=" my-2 label font-bold">Pegawai</label>
                                    <select name='pegawaiId' value={inputs.pegawaiId || Number("")}
                                        onChange={handleChange} className="rounded-lg w-full p-2 my-2 select select-bordered">
                                        <option value="">
                                            selecta a pegawai
                                        </option>
                                        {pegawai.map((Pegawai, index) => (
                                            <option value={Pegawai.id} key={Pegawai.id} >{Pegawai.nama}</option>
                                        ))}

                                    </select>

                                    <div className='flex justify-center'>
                                        <div
                                            onClick={handleSubmit}
                                            className='card mb-0 rounded-lg flex justify-end items-center text-white pl-4 pr-4 rounded-md bg-blue-500 cursor-pointer p-2'>
                                            <HiCheck />
                                            <span className=' ml-1 font-medium'>Simpan</span>
                                        </div>
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
