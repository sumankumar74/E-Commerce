import DbConnect from "@/app/config/DbConnect";
import { NextResponse } from "next/server";
import bycrypt from "bcryptjs";
import Admin from "@/app/models/Admin";

DbConnect();
export async function GET(req){
    let data = await User.find();
    return NextResponse.json(data)
}

export const POST =  async(req) =>{
    let record = await req.json();

    let {fullName, email,contact, password} = record;

    //salt
    let salt = await bycrypt.genSalt(10);

    let hashedPassword = await bycrypt.hash(password, salt) 

    let data = new Admin({fullName,email,contact, password:hashedPassword});

    try{
        data = await data.save();
        return NextResponse.json({"msg":"Admin Account Created Successfully"})
    }
    catch(err){
        return NextResponse.json({"msg":"something went wrong", "error": err.message})
    }
}
