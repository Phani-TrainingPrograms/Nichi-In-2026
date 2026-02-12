//This program shall create REST END POINTS FOR THE EMPLOYEES TABLE IN THE DATABASE of MySQL and perform CRUD operations on the table using the REST API.
import mysql from "mysql2";
import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//////////////////////////Database Connection code//////////////////////////////////////////////////
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
app.get('/employees', (req, res) => {
    connection.query(getAll, (err, results) => {  
        if(err){ console.error("Error fetching employees:", err); res.status(500).send("Error fetching employees"); return; }
        res.json(results);//converting the results to JSON format and sending it as a response.
    });
});

app.get('/employees/:id', (req, res) => {
    const { id } = req.params;
    connection.query(getById, [id], (err, results) => {
        if (err) { console.error("Error fetching employee by ID:", err); res.status(500).send("Error fetching employee by ID"); return; }
        res.json(results);
    })
});


app.post('/employees', (req, res) => {
    const { name, address, salary } = req.body;
    connection.query(insert, [name, address, salary], (err, results) => {
        if (err) { console.error("Error adding employee:", err); res.status(500).send("Error adding employee"); return; }
        res.json({ message: "Employee added", id: results.insertId });//return auto generated id. 
    });
});

app.put('/employees/:id', (req, res) => {
    const { id } = req.params;
    const { name, address, salary } = req.body;
    connection.query(update, [name, address, salary, id], (err, results) => {
        if (err) { console.error("Error updating employee:", err); res.status(500).send("Error updating employee"); return; }
        res.json({ message: "Employee updated" });
    });
});



app.delete('/employees/:id', (req, res) => {
    const { id } = req.params;
    connection.query(deleteById, [id], (err, results) => {
        if (err) { console.error("Error deleting employee:", err); res.status(500).send("Error deleting employee"); return; }
        res.json({ message: "Employee deleted" });
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 
