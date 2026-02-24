import mongoose from "mongoose";
const authorSchema = new mongoose.Schema({
    AuthorId : {type : Number, unique : true, required : true},
    Name : { type : String, required : true},
    Location : {type : String, required : true}
})

const Author = mongoose.model("Author", authorSchema);
export default Author
