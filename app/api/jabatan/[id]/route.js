// url: http://localhost:3000/api/jabatan/12345
import Prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server"; 

export const GET = async (request, {params}) => {
    try {
        const { id } = params;
        const post = await Prisma.Jabatan.findUnique({
            where: {
                id: Number(id),
            },
        });

        if(!post) {
            return NextResponse,json(
                {message: "Jabatan not fouund", err},
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
        const {nama}=body;

        const {id} = params;




        const updatePost =await prisma.Jabatan.update({
            where: {
                id: Number(id),
            },
            data: {
                nama,

            }
            
        })
        if(!updatePost) {
            return NextResponse,json(
                {message: "Jabatan not fouund", err},
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
        await Prisma.Jabatan.delete({
            where: {
                id: Number(id),
            },
        });

        return NextResponse.json("Jabatan has been deleted");
    }   catch(err){
        return NextResponse.json({message: "DELETE Error", err}, {status: 500})
    }
};