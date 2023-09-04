// url: http://localhost:3000/api/jabatan
import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        const body = await request.json();
        const {id, nama}=body;

        const newPost =await prisma.Jabatan.create({
            data: {
                id,
                nama,

            }
            
        })
        return NextResponse.json(newPost);
    
    } catch(err) {
        return NextResponse.json({message: "POST Error", err}), ({status:500})
    }
}

export const GET = async () => {
    try {

        const posts =await prisma.Jabatan.findMany()

        return NextResponse.json(posts);
    
    } catch(err) {
        return NextResponse.json({message: "GET Error", err}), ({status:500})
    }
}

