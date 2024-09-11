import mongoose from 'mongoose';

const AdminSchema =new mongoose.Schema({
fullName:{type:String, required:true},
email:{type:String, required:true},
contact:{type:String, required:true},
password:{type:String, required:true}    
},{timestamps:true})
 
//delete mongoose.connection.models['User']
export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema)