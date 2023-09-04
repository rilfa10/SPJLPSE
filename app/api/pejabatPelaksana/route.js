// url: http://localhost:3000/api/pejabatpelaksana
import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        const body = await request.json();
        const {id, pegawai, pegawaiId}=body;

        const newPost =await prisma.PejabatPelaksana.create({
            data: {
                id,
                pegawai,
                pegawaiId

            }
            
        })
        return NextResponse.json(newPost);
    
    } catch(err) {
        return NextResponse.json({message: "POST Error", err}), ({status:500})
    }
}

export const GET = async () => {
    try {

        const posts =await prisma.PejabatPelaksana.findMany()

        return NextResponse.json(posts);
    
    } catch(err) {
        return NextResponse.json({message: "GET Error", err}), ({status:500})
    }
}

