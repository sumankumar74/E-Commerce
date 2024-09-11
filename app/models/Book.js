import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({

title:{type:String, require:true},
author:{type:String, required:true},
category:{type:mongoose.Schema.Types.ObjectId, required:true, ref:"Category"},
price:{type:Number, required:true},
discountPrice:{type:Number},
description:{type:String, required:true},
featuredImage:{type:String},
status:{type:String, required:true}

 //delete mongoose.connection.models['Book']
})

export default mongoose.models.Book || mongoose.model("Book" ,BookSchema)