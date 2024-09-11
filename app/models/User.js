import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName:{type:String, required:true},
    email:{type:String, required:true},
    contact:{type:String, required:true},
    password:{type:String, required:true},
},{timestamps:true});
 //delete mongoose.connection.models['USer']
export default mongoose.models.User || mongoose.model("User",UserSchema)