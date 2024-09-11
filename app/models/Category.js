import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    catTitle:{type:String, required:true},
    catDescription:{type:String, required:true}
})
 // delete mongoose.connection.models['Category']
export default mongoose.models.Category || mongoose.model("Category", CategorySchema)