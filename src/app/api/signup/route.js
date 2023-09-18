"use server"

import { NextResponse } from "next/server"
export async function POST(req){
    console.log("testing signup")
    return NextResponse.json(
        {test:"Hello World"}
        )
}
