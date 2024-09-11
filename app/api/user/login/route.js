import User from "@/app/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import jwt  from "jsonwebtoken";
import DbConnect from "@/app/config/DbConnect";

DbConnect();
export const POST = async (req) => {
    let record = await req.json();
    let { email, password } = record;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ "msg": "Invalid username" }, { status: 400 })
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({ "msg": 'Wrong Password' }, { status: 400 });
        }
        //if all ok then
        let tokenData ={
            id: user._id,
            email:user.email,
        }
        let token =jwt.sign(tokenData, "myfinalyearproject", {expiresIn:"1h"});
        let response = NextResponse.json({"msg":"Login successful",success:true});
        response.cookies.set("token",token),{
            httpOnly:true
        }
        return response;
    }
    catch(err){
        return NextResponse.json({err:err.message});
    }
}