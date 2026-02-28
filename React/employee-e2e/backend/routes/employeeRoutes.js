import express from "express";
import Employee from '../models/employee.js'

const router = express.Router();

//create
router.post("/", async (req, res)=>{
    const emp = new Employee(req.body);
    await emp.save();
    res.status(201).json(emp);
})

//delete
router.delete("/:id", async (req, res)=>{
    await Employee.findByIdAndDelete(req.params.id);
    res.json({message : "Employee deleted successfully"})
})

//update
router.put("/:id", async (req, res)=>{
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {new : true});
    res.json(employee)
})

//getById
router.get("/:id", async (req, res)=>{
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
})
//getAll
router.get("/", async (req, res)=>{
  const employees = await Employee.find();
  res.json(employees);  
})

export default router;