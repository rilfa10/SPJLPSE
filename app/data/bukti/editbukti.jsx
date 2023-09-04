"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { AiOutlineForm } from 'react-icons/ai';
import { HiCheck, HiXMark } from 'react-icons/hi2';

const EditData = ({ Bukti, sppd }) => {
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [inputs, setInputs] = useState(Bukti);

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.patch(`/api/bukti/${Bukti.id}`, inputs).then(res => {
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
                        <div className="overflow-auto flex justify-center items-center h-full">
                            <div className="mt-auto mb-auto rounded-lg flex flex-col items-end bg-slate-300 w-1/3 p-5">
                                <button
                                    onClick={() => setOpen(false)}
                                    className="text-2l mb-3">
                                    &times;
                                </button>
                                <form className='w-full text-black' >
                                    <h1 className='text-2xl pv-3 mb-6 text-center font-semibold'>Form Upload Bukti Pembayaran</h1>

                                    <label className=" my-2 label font-bold">No.SPPD</label>
                                    <select name='sppdId' value={inputs.sppdId || Number("")}
                                        onChange={handleChange} className="rounded-lg w-full p-2 my-2 select select-bordered">
                                        <option value="">
                                            select a SPPD 
                                        </option>
                                        {sppd.map((Sppd, index) => (
                                            <option value={Sppd.id} key={Sppd.id} >{Sppd.no}</option>
                                        ))}

                                    </select>

                                    <label className="my-2 label font-bold">Upload Bukti Tiket Berngkat</label>
                                    <input
                                        type="file"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="Kegiatan"
                                        name="buktitransportasi"
                                        value={inputs.buktitransportasi ||""}
                                        onChange={handleChange}
                                    />
                                    <label className="my-2 label font-bold">Upload Bukti Tiket Pulang </label>
                                    <input
                                        type="file"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="Tujuan perjalanan dinas"
                                        name="buktitransportpulang"
                                        value={inputs.buktitransportpulang || ""}
                                        onChange={handleChange}
                                    />
                                    <label className="my-2 label font-bold">Upload Bukti Transfer Uang Saku</label>
                                    <input
                                        type="file"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder="1 hari"
                                        name="tfsaku"
                                        value={inputs.tfsaku ||""}
                                        onChange={handleChange}
                                    />
                                    <label className="my-2 label font-bold">Upload Bukti Pembayaran/Pemesanan Hotel</label>
                                    <input
                                        type="file"
                                        className="rounded-lg w-full my-2 p-2"
                                        placeholder=""
                                        name="buktipesanhotel"
                                        value={inputs.buktipesanhotel ||""}
                                        onChange={handleChange}
                                    />
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

export default EditData;

