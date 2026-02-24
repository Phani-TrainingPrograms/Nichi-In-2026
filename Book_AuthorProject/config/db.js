import mongoose from "mongoose";
const dbUrl = "mongodb://127.0.0.1:27017/bookstore"
const connectDb = async ()=>{
    try {
        await mongoose.connect(dbUrl)
        console.log("Connected to database");
    } catch (error) {
        console.error("Connection Failed: ", error.message)
        process.exit(-1);
    }
}

export default connectDb;//use default to export single components. 
