const express = require("express");
const mongoose = require("mongoose");
const ObjectId = require("mongodb");

const app = express();
app.use(express.json());

const dburl = 'mongodb://127.0.0.1:27017/MySampleDatabase';
mongoose.connect(dburl)
    .then(()=>console.log("Connected to Mongodb"))
    .catch(err => console.err('Error while connecting to database', err))

// const empRec = new mongoose.Schema({
//     empId : {type : Number, required: [true, 'Id is mandatory'], unique : true},
//     empName : {type : String, required : true},
//     empAddress : {type : String, required : true},
//     empSalary : {type : Number, required: [true, 'Salary is mandatory'], unique : true} 
// }, 
// {
//     collection : 'empList'
// })

const EmpSchema = new mongoose.Schema({
    _id : { type : Number },
    empName : {type : String},
    empAddress : {type : String},
    empSalary : {type : Number},
}, {
    collection : 'empList',
    _id : false //Tell Mongoose that we are providing our own id. 
})

const Emp = mongoose.model('emp', EmpSchema);
//const Emp = mongoose.model('emp', empRec, 'empList'); //explicitly setting the collection. 

///////////////////////////////////////////CRUD operations///////////////////////
// app.post('/newemp', async(req, res)=>{
//     try {
//         const newEmp = new Emp(req.body);
//         const savedRec = await newEmp.save();
//         res.status(201).json(savedRec);
//     } catch (error) {
//         res.status(400).json({message : error.message})
//     }
// })

app.post("/newemp", async(req, res)=>{
    try {
        const { empId, empName, empAddress, empSalary } = req.body;
        const newRec = new Emp({
            _id : empId,empName, 
            empAddress, empSalary
        });
        await newRec.save();
        res.status(201).json(savedRec);
    } catch (error) {
        res.status(400).json({message : error.message})
     }
})

app.get("/empList", async(req, res)=>{
    try {
        const records = await Emp.find();
        res.json(records)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

app.get("/empList/:id", async(req, res)=>{
    try {
        console.log(req.params.id)
        const rec = await Emp.findOne({empId : req.params.id});//id is _id and object id. Use findOne and pass empId : the value to find. 
        if(!rec) return res.status(404).json({message: 'Employee not found'});
        res.json(rec);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})


app.put("/empList/:id", async(req, res)=>{
    try {
        const id = req.params.id;
        const updatedRec = req.body;
        const result = await Emp.findOneAndUpdate(
            {
                empId : id
            }, 
            updatedRec,
            {
                new : true, runValidators : true
            }
        )
        if(!result){
            return res.status(404).json({message: 'Employee not found to update'})
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

///////////////////////Start the app/////////////////////////
const PORT = 1234;
app.listen(PORT, ()=>console.log(`Server is available at http://localhost:${PORT}`))

