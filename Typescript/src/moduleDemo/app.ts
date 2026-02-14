import { EmployeeRepo } from "./EmployeeRepo.js";
import { Employee as EmpRecord } from './EmployeeData.js'
const repo = new EmployeeRepo();

//create new Employees. 
var rec : EmpRecord = {  id : 123, name : "Phaniraj", address : "Bangalore"} as EmpRecord
repo.addEmployee(rec);
repo.addEmployee({  id : 124, name : "Suresh", address : "Chennai"} as EmpRecord)

const all = repo.getEmployees();

all.forEach((r) => console.log(r.name));


