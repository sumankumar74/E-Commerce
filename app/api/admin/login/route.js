import { NextResponse } from "next/server";
import bycrypt from "bcryptjs";
import  Jwt from "jsonwebtoken";
import DbConnect from "@/app/config/DbConnect";
import Admin from "@/app/models/Admin";

DbConnect();

export const POST = async(req)=>{
    let record = await req.json();

    let {email, password}= record;
    
    try{
        const admin = await Admin.findOne({email});
        if(!admin){
            return NextResponse.json({"msg": "Invalid Username"}, {status:400})
        }
        const validPassword = await bycrypt.compare(password, admin.password);
        if(!validPassword){
            return NextResponse.json({"msg":"Invalid username or password"}, {status:400})
        }

        //if all ok then
        let tokenData = {
            id:admin,
            username:admin.email
        }
        let token =   Jwt.sign(tokenData, "mynameissumankumar", {expiresIn:"1h"})

        let response =  NextResponse.json({"msg":"Login Successful", success:true});
        response.cookies.set("token",token,{
            httpOnly:true
        })

        return response;
    }
    catch(err){
        return NextResponse.json({err:err.message})
    }
}