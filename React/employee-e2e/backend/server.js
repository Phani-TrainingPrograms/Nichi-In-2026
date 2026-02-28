import express from "express";
import connectDB from "./config/db.js";
import router from './routes/employeeRoutes.js';
import cors from "cors"
connectDB();
const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/employees", router);
const PORT = 1234;
app.listen(PORT, ()=>console.log(`Server available at http://localhost:${PORT}`))