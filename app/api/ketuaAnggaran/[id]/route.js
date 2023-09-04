// url: http://localhost:3000/api/ketuaAnggaran/12345
import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server"; 

export const GET = async (request, {params}) => {
    try {
        const { id } = params;
        const post = await prisma.KetuaAnggaran.findUnique({
            where: {
                id: Number(id),
            },
        });

        if(!post) {
            return NextResponse,json(
                {message: "KetuaAnggaran not fouund", err},
                {status: 404}
            )
        }

        return NextResponse.json(post);
    }   catch(err){
        return NextResponse.json({message: "GET Error", err}, {status: 500})
    }
};

export const PATCH = async (request, {params}) => {
    try {
        const body = await request.json();
        const {pegawaiId}=body;

        const {id} = params;




        const updatePost =await prisma.KetuaAnggaran.update({
            where: {
                id: Number(id),
            },
            data: {
                // pegawai,
                pegawaiId,

            }
            
        })
        if(!updatePost) {
            return NextResponse,json(
                {message: "KetuaAnggaran not fouund", err},
                {status: 404}
            )
        }
        return NextResponse.json(updatePost);
    
    } catch(err) {
        return NextResponse.json({message: "update Error", err}), ({status:500})
    }
}

export const DELETE = async (request, {params}) => {
    try {
        const { id } = params;
        await prisma.KetuaAnggaran.delete({
            where: {
                id: Number(id),
            },
        });

        return NextResponse.json("KetuaAnggaran has been deleted");
    }   catch(err){
        return NextResponse.json({message: "DELETE Error", err}, {status: 500})
    }
};