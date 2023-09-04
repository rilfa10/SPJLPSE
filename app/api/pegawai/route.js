// url: http://localhost:3000/api/pegawai
import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        const body = await request.json();
        const {nip, nama, alamat, telp, golongan, jabatan, jabatanId}=body;

        const newPost =await prisma.Pegawai.create({
            data: {
                nip, 
                nama, 
                alamat, 
                telp,
                golongan,
                jabatan, 
                jabatanId,
            }
            
        })
        return NextResponse.json(newPost);
    
    } catch(err) {
        return NextResponse.json({message: "POST Error", err}), ({status:500})
    }
}

export const GET = async () => {
    try {

        const posts =await prisma.Pegawai.findMany()

        return NextResponse.json(posts);
    
    } catch(err) {
        return NextResponse.json({message: "GET Error", err}), ({status:500})
    }
}

