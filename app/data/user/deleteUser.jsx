"use client";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import { AiOutlineRest } from "react-icons/ai";
import { HiCheck, HiXMark } from 'react-icons/hi2';

const DeleteData = ({ user }) => {
    // console.log(user)
    const [Open, setIsOpen] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        console.log('hapus', user.id)
        const result = await fetch(`/api/user/${user.id}`, { method: "DELETE" })
        setIsOpen(false);
        router.refresh();
    };

    const handleModal = () => {
        setIsOpen(!Open);
    };

    return (
        <div>
            {/* <div className='rounded-lg flex justify-between m-2 p-2 border border-slate-100 '> */}
            <div
                onClick={handleModal}
                className='card m-2 ml-0 rounded-lg flex justify-end items-center text-white pr-4 rounded-md bg-red-600 cursor-pointer p-2'>
                <AiOutlineRest className='h-5 w-5' />
                <span className=' ml-1 font-medium'>Delete</span>
            </div>

            {/* </div> */}
            {Open && (
                <div className="bg-black/50 fixed inset-0">
                    <div className="flex justify-center items-center h-full">
                        <div className="rounded-lg flex flex-col bg-slate-300 w-1/3 p-5">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="flex justify-end text-2l mb-3">
                                &times;
                            </button>
                            <h3 className="font-semibold text-center text-lg text-black">Anda ingin menghapus username {user.username} ?</h3>
                            <div className='flex justify-center mt-3 '>
                                <div
                                    onClick={handleDelete}
                                    className='card mb-0 rounded-lg flex justify-end items-center text-white pl-4 pr-4 rounded-md bg-blue-500 cursor-pointer p-2'>
                                    <HiCheck />
                                    <span className=' ml-1 font-medium'>Iya</span>
                                </div>
                                <div
                                    onClick={() => setIsOpen(false)}
                                    className='card ml-2 mb-0 rounded-lg flex justify-end items-center text-white pl-4 pr-4 rounded-md bg-blue-500 cursor-pointer p-2'>
                                    <HiXMark />
                                    <span className=' ml-1 font-medium'>Tidak</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeleteData;