import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma'

export async function GET(request, { params }) {


    const cite = await prisma.cite.findUnique({
        where: {
            id: Number(params.citeId)
        }
    })
    return NextResponse.json(cite)
}

export function PUT(request, { params }) {

    

    return NextResponse.json("Actualizando citas " + params.citeId)
}






export async function DELETE(request, { params }) {

    try {

        const deleteCite = await prisma.cite.delete({
            where: {
                id: Number(params.citeId)
            }
        })

        return NextResponse.json(deleteCite)

    } catch (error) {
        return NextResponse.json(error.message)

    }


}