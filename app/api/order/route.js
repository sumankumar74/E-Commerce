import Order from "@/app/models/Order";
import { cookies } from "next/headers";
import  JWT from "jsonwebtoken";
import { NextResponse } from "next/server";
import OrderItem from "@/app/models/OrderItem";
import DbConnect from "@/app/config/DbConnect";

DbConnect();
export const GET = async()=>{
   
    let token= cookies().get("token");
    let user = JWT.verify(token.value, "myfinalyearproject");

    let order;
    order = await Order.findOne({userId:user.id, ordered:false});

    if(!order){
       return NextResponse.json({msg:"Order not found"},{status:400})
    }

    let orderItems = await OrderItem.find({orderId:order._id, userId:user.id}).populate(["bookId","userId","orderId"]);
    return NextResponse.json({orderItems})
}

export const PUT = async(req)=>{
   let record = await req.json();
    let token= cookies().get("token");
    let user = JWT.verify(token.value, "myfinalyearproject");

    let {address}= record;
    let order;
    order = await Order.findOneAndUpdate({userId:user.id, ordered:false},{address});

    if(!order){
       return NextResponse.json({msg:"Order not found"},{status:400})
    }
    return NextResponse.json({order})
}