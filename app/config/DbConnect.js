import mongoose from "mongoose";

const DbConnect = ()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/bookshop")
    }
    catch(e){
        throw new Error("Can't connect to database")
    }
}

export default DbConnect;