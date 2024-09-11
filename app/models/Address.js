import mongoose from "mongoose";

const AddressSchema= new mongoose.Schema({
    name:{type:String, required:true},
    contact:{type:String, required:true},
    area:{type:String, required:true},
    landmark:{type:String, required:true},
    city:{type:String, required:true},
    state:{type:String, required:true},
    pincode:{type:Number, required:true},
    user:{type:mongoose.Schema.Types.ObjectId, required:true,ref:"User"},
    type:{type:String, required:true, default:"home"},
})
//delete mongoose.connection.models['Address']
export default mongoose.models.Address || mongoose.model("Address",AddressSchema)