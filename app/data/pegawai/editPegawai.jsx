"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { AiOutlineForm } from 'react-icons/ai';
import { HiCheck, HiXMark } from 'react-icons/hi2';
import Formpegawai from '@/components/form/formadd';
import TextArea from '@/components/form/textarea';
import Dropdown from '@/components/form/dropdown';

const EditData = ({ Pegawai, jabatan }) => {
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [inputs, setInputs] = useState(Pegawai);

    const handleSubmit = async (e) => {
        inputs.jabatanId = parseInt(inputs.jabatanId)
        e.preventDefault();
        axios.patch(`/api/pegawai/${Pegawai.id}`, inputs).then(res => {
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

    const handleFocus = (e) => {
        setFocused(true);
    };

    const golongan = [
        {
            id: "III/a",
            nama: "III/a"
        },
        {
            id: "III/b",
            nama: "III/b"
        },
        {
            id: "III/c",
            nama: "III/c"
        },
        {
            id: "III/d",
            nama: "III/d"
        }
    ]
    
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
                                    className="text-3l mb-3">
                                    &times;
                                </button>
                                <form className='w-full text-black' onSubmit={handleSubmit} >
                                    <h1 className='text-2xl pv-3 text-center font-semibold'>Form Pegawai</h1>
                                    <Formpegawai
                                        label='Nip '
                                        type='text'
                                        name='nip'
                                        placeholder='Nomor Induk pegawai'
                                        value={inputs.nip}
                                        change={handleChange}
                                        errorMessage={`Nip yang anda masukkan salah !`}
                                        pattern='^[0-9\b]+$'
                                        required='true'
                                    />

                                    <Formpegawai
                                        label='Nama Pegawai'
                                        type='text'
                                        name='nama'
                                        placeholder='Masukkan nama anda dengan awalan huruf Kapital'
                                        value={inputs.nama}
                                        change={handleChange}
                                        errorMessage={`Masukkan nama anda sesuai perintah !`}
                                        pattern='^[A-Z][A-z\s]{1,}$'
                                        required='true'
                                    />
                                    <Dropdown
                                        label='Golongan'
                                        name='golongan'
                                        value={inputs.golongan}
                                        change={handleChange}
                                        errorMessage='required to select one of the data'
                                        required='true'
                                        data={golongan}
                                    />

                                    <TextArea
                                        label='Alamat'
                                        name='alamat'
                                        value={inputs.alamat}
                                        change={handleChange}
                                        errorMessage={`Silahkan masukkan alamat anda !`}   
                                        required='true'
                                    />

                                    <Formpegawai
                                        label='Telepon'
                                        type='tel'
                                        name='telp'
                                        placeholder='Masukkan No.telp dengan awalan +62/08'
                                        value={inputs.telp}
                                        change={handleChange}
                                        errorMessage={`No.telepon Tidak Valid, silahkan masukkan sesuai perintah !`}
                                        pattern='^(\+62|62|0)8[1-9][0-9]{6,10}$'
                                        required='true'
                                    />
                                    <Dropdown
                                        label='Jabatan'
                                        name='jabatanId'
                                        value={inputs.jabatanId}
                                        change={handleChange}
                                        errorMessage='required to select one of the data'
                                        required='true'
                                        data={jabatan}
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

export default EditData;

