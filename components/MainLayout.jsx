import React from "react";
import Header from "./Header";
import Link from "next/link";

// React Icons
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { TbUsers } from "react-icons/tb";
import { FaAngleUp } from "react-icons/fa";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-slate-100 w-screen min-h-screen">
      <Header />
      <div className="flex justify-start items-start p-3 pt-1 pl-6">
        <aside className="bg-white rounded-lg w-80 p-3 drop-shadow">
          <ul>
            <li className="flex justify-start items-center hover:bg-slate-50 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineHome className="mr-2" />
              <Link href="/">Dashboard</Link>
            </li>

            <li className="flex justify-start items-center hover:bg-blue-50 hover:text-blue-800 rounded-xl p-2">
               <TbUsers className="mr-2" />
              <h3 href="/" className="flex-1">
                Pegawai
              </h3>
              <FaAngleUp />
            </li>

            <li className="flex justify-start items-center hover:bg-blue-50 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineUser className="mr-2" />
              <Link href="/">User</Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;