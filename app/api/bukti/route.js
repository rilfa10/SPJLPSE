// url: http://localhost:3000/api/bukti
import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        const body = await request.json();
        const {id, buktitransportasi, tfsaku, buktipesanhotel, sppd, sppdId}=body;

        const newPost =await prisma.Bukti.create({
            data: {
                id,
                buktitransportasi, 
                tfsaku, 
                buktipesanhotel, 
                sppd, 
                sppdId

            }
            
        })
        return NextResponse.json(newPost);
    
    } catch(err) {
        return NextResponse.json({message: "POST Error", err}), ({status:500})
    }
}

export const GET = async () => {
    try {

        const posts =await prisma.Bukti.findMany()

        return NextResponse.json(posts);
    
    } catch(err) {
        return NextResponse.json({message: "GET Error", err}), ({status:500})
    }
}

