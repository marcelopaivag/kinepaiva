import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma'


export async function GET() {

    const cites = await prisma.cite.findMany()
    return NextResponse.json(cites)
}

export async function POST(request) {
    const { name, lastname, phone, mail, dateTime } = await request.json()
    const newCite = await prisma.cite.create({
        data: {
            name,
            lastname,
            phone,
            mail,
            dateTime
        }
    })
    return NextResponse.json(newCite)
}