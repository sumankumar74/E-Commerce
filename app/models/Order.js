import mongoose from "mongoose";

let OrderSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, ref:"User",required:true},
    dateOfOrder:{type:Date,default:Date.now},
    ordered:{type:Boolean,required:true},
    address:{type:mongoose.Schema.Types.ObjectId , ref:"Address" ,default:null}
})
//delete mongoose.connection.models['Order']
export default mongoose.models.Order || mongoose.model("Order",OrderSchema);