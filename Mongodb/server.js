//npm install express mongodb

const express = require('express')
const { MongoClient, ObjectId } = require("mongodb")

const app = express();
app.use(express.json());

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = "MySampleDatabase";

let db, empList;
////////////////////////Db Connection///////////////////////////
async function connect(){
    try{
        await client.connect();
        console.log("Connected to db");
        db = client.db(dbName);
        empList = db.collection("empList");
    }catch(err){
        console.error("Failed to connect: ", err)
    }
}

connect();
////////////////APIs////////////////////////////////////////////
app.get("/empList", async (req, res)=>{
    try{
        const allEmpList = await empList.find().toArray();
        res.json(allEmpList);
    }catch(err){
        res.status(500).json({"message": err.message})
    }
})

app.get("/empList/:id", async(req, res)=>{
    try {
        const empId = Number(req.params.id);//id is string from params. 
        debugger;
        const found = await empList.findOne({"empId" : empId})
        if(found)
            res.json(found);
        else
            res.status(401).json({message: "Record not found"});
    } catch (error) {
        res.status(500).json({"message" : error.message})
    }
})
//9945205684->Excel sheet->Id, Name, Image

app.post('/empList', async(req, res)=>{
    try {
        const result = await empList.insertOnt(req.body);
        res.status(201).json({id : result.insertedId, ...req.body });
    } catch (err) {
        res.status(500).json({error : err.message});
    }
})
///////////////////app start////////////////////////////////////
app.listen(1234, ()=>{
    console.log("Server available at http://localhost:1234")
})


