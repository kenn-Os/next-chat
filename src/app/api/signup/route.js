"use server"

import { NextResponse } from "next/server"
import { z } from "zod";
import UserModel from "@/schema/userSchema";

const signupSchema = z.object({
    username: z
        .string()
        .nonempty()
        .min(3, "username too short")
        .max(15, "username too long"),

    phone: z
        .number()
        .min(10, "invalid phone number"),

    password: z
        .string()
        .nonempty()
        .min(6, "password too short")
    
})
export async function POST(req){
try {
    const formdata = await req.formData();
    const password = formdata.get("password").trim();
    const phone = +formdata.get("phone").trim();
    const username = formdata.get("username").trim();
    console.log(password, username, phone);

    signupSchema.parse({phone, password, username});

    const newUser = new UserModel({phone, password, username})
    const saved = await newUser.save();
    if(saved){
        return NextResponse.json(
            {error:"user account created"}
            )
        }else{ return 
       NextResponse.json({error: "unable to create account"})
       
    }

    return NextResponse.json(
    {error:"An Unknown Error Occured"}
    )
} catch (error) { 
    if(error instanceof z.ZodError){
        const errors = error.flatten().fieldErrors;
        if(Object.keys(error).length > 0){
            const firstError = Object.values(errors)[0][0];
            return NextResponse.json(
                {error: firstError}
                )
        }
        console.log()
    }
    return NextResponse.json(
    {error:"An Unknown Error Occured"}
    )
}
}
