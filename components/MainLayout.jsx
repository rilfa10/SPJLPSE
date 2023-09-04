"use client";
import React, { useContext, useState } from "react";
import Header from "./Header";
import Link from "next/link";
// import Footer from "./Footer"

// React Icons
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { HiOutlineUser, HiOutlineIdentification, HiArrowUpTray } from "react-icons/hi2";
import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { HiOutlineCalculator } from "react-icons/hi2";
import { HiOutlineUsers } from "react-icons/hi2";
import { MenuContext } from "@/context/MenuContext";



const MainLayout = ({ children }) => {
  const { open } = useContext(MenuContext)
  const [togle, setOpen] = useState(false);
  return (
    <div className="bg-slate-100 w-screen min-h-screen">
      <Header />
      <div className="flex justify-start items-start p-3 pt-1 pl-6">
        {/* <aside className="bg-white rounded-lg w-80 p-3 drop-shadow"> */}
        <aside className={`bg-white rounded-lg drop-shadow overflow-hidden transition-all duration-200 ${open ? 'w-80 p-3' : 'w-0'} lg:w-80 lg:p-3`}>
          <ul>
            <li className="flex justify-start items-center hover:bg-blue-50 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineHome className="mr-2 w-5 h-5" />
              <Link href="/">Dashboard</Link>
            </li>

            <li className="flex flex-col justify-start items-start cursor-pointer">
              <div className="p-2 w-full flex flex-row justify-start rounded-xl items-center hover:bg-blue-50 hover:text-blue-800 p-2">
                <HiOutlineIdentification className="mr-2 w-5 h-5" />
                <h3 href="/" className="flex-1" onClick={() => setOpen((prev) => !prev)}>
                  Pegawai
                </h3>
                <FaAngleRight
                  className={`${togle ? 'opacity-0 h-0' : ''} transition-all duration-100 overflow-hidden top-12 top-0 `} />
                <FaAngleDown
                  className={`${togle ? '' : 'opacity-0 h-0'} transition-all duration-100 overflow-hidden top-12 top-0 `} />
              </div>
              <ul
                className={`${togle ? 'w-full pl-10 mt-1' : 'opacity-0 h-0'
                  } transition-all duration-100 overflow-hidden top-12 top-0 `}>
                <li className="flex justify-start items-center rounded-xl pt-1 pb-1 gap-3 my-1 hover:bg-blue-50 hover:text-blue-800 cursor-pointer">
                  <HiOutlineUserCircle className="mr-2 w-5 h-5" />
                  <Link href="/data/jabatan ">Data Jabatan</Link>
                </li>
                <li className="flex justify-start items-center rounded-xl pt-1 pb-1 gap-3 my-1 hover:bg-blue-50 hover:text-blue-800">
                  <HiOutlineUserCircle className="mr-2 w-5 h-5" />
                  <Link href="/data/pegawai ">Data Pegawai</Link>
                </li>
              </ul>

              <div onClick={() => setOpen(false)} className=
                {`fixed opacity-50 z-0 ${togle ? 'block' : 'hidden'}transition-all duration-100 overflow-hidden top-12 top-0 `}>
              </div>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-50 hover:text-blue-800 rounded-xl p-2">
              <HiOutlineUsers className="mr-2 w-5 h-5" />
              <Link href="/data/ketuaAnggaran">Kuasa Pengguna Anggaran</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-50 hover:text-blue-800 rounded-xl p-2">
              <HiOutlineUsers className="mr-2 w-5 h-5" />
              <Link href="/data/pejabatPelaksana">Pejabat pelaksana Teknis Kegiatan</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-50 hover:text-blue-800 rounded-xl p-2">
              <HiOutlineDocumentDuplicate className="mr-2 w-5 h-5" />
              <Link href="/data/sppd">SPPD</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-50 hover:text-blue-800 rounded-xl p-2">
              <HiOutlineClipboardDocumentCheck className="mr-2 w-5 h-5" />
              <Link href="/data/kwitansi">Kwitansi</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-50 hover:text-blue-800 rounded-xl p-2">
              <HiArrowUpTray className="mr-2 w-5 h-5" />
              <Link href="/data/bukti">Bukti Pembayaran</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-50 hover:text-blue-800 rounded-xl p-2">
              <HiOutlineCalculator className="mr-2 w-5 h-5" />
              <Link href="/data/rincianbiaya">Rincian Biaya</Link>
            </li>

            <li className="flex justify-start items-center hover:bg-blue-50 hover:text-blue-800 rounded-xl p-2">
              <HiOutlineUser className="mr-2 w-5 h-5" />
              <Link href="/data/user">User</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-50 hover:text-blue-800 rounded-xl p-2">
              <HiOutlineDocumentDuplicate className="mr-2 w-5 h-5" />
              <Link href="/data/spj">SPJ</Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
      {/* <div><Footer /></div> */}
    </div>
  );
};

export default MainLayout;
