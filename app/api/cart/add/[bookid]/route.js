import Book from "@/app/models/Book";
import Order from "@/app/models/Order";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import  JWT  from "jsonwebtoken";
import OrderItem from "@/app/models/OrderItem";
import DbConnect from "@/app/config/DbConnect";

DbConnect();
export const GET = async(req,{params})=>{
    let {bookid}= params;
    const book =  await Book.findById(bookid);

    //if book not found
    if(!book){
        return NextResponse.json({message:"Book not found"},{status:400})
    }

    let token= cookies().get("token");
    let user = JWT.verify(token.value, "myfinalyearproject");

    let order;
    order = await Order.findOne({userId:user.id, ordered:false});
    if(!order){
         order =  await Order.create({userId:user.id, ordered:false});   
    }
    let orderItem;
    orderItem = await OrderItem.findOne({userId:user.id , bookId:bookid , orderId:order._id});

    if(!orderItem){
        orderItem= await OrderItem.create({userId:user.id,bookId:bookid,orderId:order._id})
    }
    else{
        orderItem= await OrderItem.findOneAndUpdate({userId:user.id,bookId:bookid,orderId:order._id},{$inc:{quantity:1}})
    }
    return NextResponse.json({message:"Book has been added to Cart",success:true},{status:200});

}