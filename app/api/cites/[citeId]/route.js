import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma'

export async function GET(request, { params }) {
    const getCite = await prisma.cite.findUnique({
        where: {
            id: Number(params.citeId)
        }
    })
    return NextResponse.json(getCite)
}

export async function PUT(request, { params }) {
    const data = await request.json()
    const updateCite = await prisma.cite.update ({
        where: {
            id: Number(params.citeId)
        },
        data: data
    })
    return NextResponse.json(updateCite)
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