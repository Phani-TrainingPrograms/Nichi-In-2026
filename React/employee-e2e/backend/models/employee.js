import mongoose from "mongoose"
const employeeSchema= new mongoose.Schema({
    name : {type : String, required: true},
    address : {type : String, required: true},
    salary : {type : Number, required: true},
    image : {type : String},
}, {timestamps : true})//adds fields like createdAt, updatedAt for audit trails. 

export default mongoose.model("Employee", employeeSchema);