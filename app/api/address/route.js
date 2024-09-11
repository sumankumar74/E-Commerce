
import { cookies } from "next/headers";
import  JWT from "jsonwebtoken";
import { NextResponse } from "next/server";
import DbConnect from "@/app/config/DbConnect";
import Address from "@/app/models/Address";

DbConnect();
export const GET = async()=>{
   
    let token= cookies().get("token");
    let user = JWT.verify(token.value, "myfinalyearproject");

    let address = await Address.find({user:user.id});

    return NextResponse.json({address})
}