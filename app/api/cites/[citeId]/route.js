import { NextResponse } from "next/server";

export function GET(request, { params }) {
    return NextResponse.json("Obteniendo citas " + params.citeId)
}

export function PUT(request, { params }) {
    return NextResponse.json("Actualizando citas " + params.citeId)
}

export function DELETE(request, { params }) {
    return NextResponse.json("Eliminando citas " + params.citeId)
}