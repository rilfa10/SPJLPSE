// url: http://localhost:3000/api/spj
import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        const body = await request.json();
        const {sppd, sppdId, filekwitansi, filerincianbiaya}=body;

        const newPost =await prisma.Spj.create({
            data: {
                sppd, 
                sppdId, 
                filekwitansi,
                filerincianbiaya

            }
            
        })
        return NextResponse.json(newPost);
    
    } catch(err) {
        return NextResponse.json({message: "POST Error", err}), ({status:500})
    }
}

export const GET = async () => {
    try {

        const posts =await prisma.Spj.findMany()

        return NextResponse.json(posts);
    
    } catch(err) {
        return NextResponse.json({message: "GET Error", err}), ({status:500})
    }
}

