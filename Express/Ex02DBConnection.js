//Create a new table in mysql called Employee, with the following columns: id, name, address, salary. Add a few records to the table.
//install mysql2 package using npm install mysql2
import mysql from "mysql2";
import express from "express";
const app = express();

//Middleware is used to inject any logic before the actual request handler is executed. It can be used for tasks such as authentication, logging, or modifying the request/response objects. Enabling CORS etc. 
////////////////Include the Middlware to parse the request body////////////////
app.use(express.json());//Handling JSON body data.
app.use(express.urlencoded({ extended: true }));//For handling POST body data
////////////////////////////////////////////////////////////////////////////

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "sampledb"
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database.");
});
/////////////////////SQL Statements to execute///////////////////
const getAll = "SELECT * FROM Employee";
const getById = "SELECT * FROM Employee WHERE id = ?";
const insert = "INSERT INTO Employee (name, address, salary) VALUES (?, ?, ?)";
const update = "UPDATE Employee SET name = ?, address = ?, salary = ? WHERE id = ?";
const deleteById = "DELETE FROM Employee WHERE id = ?";
/////////////////////////////////CRUD operations////////////////////////////////
//Get all employees
function getAllEmployees() {
    connection.query(getAll, (err, results) => {  
        if(err){ console.error("Error fetching employees:", err); return; }
        console.log("All employees:", results);
    }); 
}

function getEmployeeById(id){
    connection.query(getById, [id], (err, results) => {
        if(err){ console.error("Error fetching employee by ID:", err); return; }
        console.log("Employee by ID:", results);
    });
}
//id is auto_incremented in the database, so we don't need to provide it while inserting a new record.
function addEmployee(name, address, salary){
    connection.query(insert, [name, address, salary], (err, results) => {
        if(err){ console.error("Error adding employee:", err); return; }
        console.log("Employee added with ID:", results.insertId);
    });
}

function updateEmployee(id, name, address, salary){
    connection.query(update, [name, address, salary, id], (err, results) => {
        if(err){ console.error("Error updating employee:", err); return; }
        console.log("Employee updated with ID:", id);
    });
}

function deleteRecordById(id){
    connection.query(deleteById, [id], (err, results) => {
        if(err){ console.error("Error deleting employee:", err); return; }
        console.log("Employee deleted with ID:", id);
    });
}

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    //getAllEmployees(); // Call the function to fetch all employees when the server starts
    //getEmployeeById(1); // Call the function to fetch employee by ID when the server starts
    //addEmployee("John Doe", "123 Main St, Newyork", 50000); // Call the function to add a new employee when the server starts
    //updateEmployee(1, "John Doe", "123 Main St, Queens, Newyork", 55000); // Call the function to update an employee when the server star
});
