import { EmployeeRepo } from "./EmployeeRepo.js";
const repo = new EmployeeRepo();
//create new Employees. 
var rec = { id: 123, name: "Phaniraj", address: "Bangalore" };
repo.addEmployee(rec);
repo.addEmployee({ id: 124, name: "Suresh", address: "Chennai" });
const all = repo.getEmployees();
all.forEach((r) => console.log(r.name));
