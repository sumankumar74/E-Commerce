import DbConnect from "@/app/config/DbConnect";
import { NextResponse } from "next/server";

DbConnect();

export const POST = async (req) =>{
    let response = NextResponse.json({"msg":"logout"})
    
    response.cookies.delete("token")

    return response;
}
