"use client";

import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { HiCheck, HiXMark } from 'react-icons/hi2';
import Dropdown from '@/components/form/dropdown';

export default function AddData({ pegawai }) {
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [inputs, setInputs] = useState({});
    // const [pegawai, setJabatan] = useState("");

    const handleSubmit = (e) => {
        inputs.pegawaiId = parseInt(inputs.pegawaiId)
        e.preventDefault();
        axios.post('/api/ketuaAnggaran', inputs).then(res => {
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
                                <form className='w-full text-black' onSubmit={handleSubmit}>
                                    <h1 className='text-2xl pv-3 mb-6 text-center font-semibold'>Form Tambah Data</h1>
                                
                                    <Dropdown
                                        label='Data Pegawai'
                                        name='pegawaiId'
                                        value={inputs.pegawaiId}
                                        change={handleChange}
                                        errorMessage='required to select one of the data'
                                        required='true'
                                        data={pegawai}
                                    />

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
