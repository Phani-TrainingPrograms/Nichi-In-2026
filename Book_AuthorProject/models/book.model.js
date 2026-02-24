import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
    BookId : {type : Number, unique : true, required : true},
    Title : { type : String, required : true},
    Price : {type : Number, required : true},
    Authors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Author" }]
})

const Book = mongoose.model("Book", bookSchema);
export default Book