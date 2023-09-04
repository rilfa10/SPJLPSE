// url: http://localhost:3000/api/pejabatPelaksana12345
import Prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server"; 

export const GET = async (request, {params}) => {
    try {
        const { id } = params;
        const post = await Prisma.PejabatPelaksana.findUnique({
            where: {
                id: Number(id),
            },
        });

        if(!post) {
            return NextResponse,json(
                {message: "PejabatPelaksana not fouund", err},
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




        const updatePost =await Prisma.PejabatPelaksana.update({
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
                {message: "PejabatPelaksana not fouund", err},
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
        await Prisma.PejabatPelaksana.delete({
            where: {
                id: Number(id),
            },
        });

        return NextResponse.json("PejabatPelaksana has been deleted");
    }   catch(err){
        return NextResponse.json({message: "DELETE Error", err}, {status: 500})
    }
};