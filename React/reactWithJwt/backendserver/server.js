const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDb = require('./config/db.js')
const userRoutes = require('./routes/userRoutes.js')

dotenv.config();
connectDb();

const app = express();

//use the middlewares:
app.use(cors());//cors enabling.
app.use(express.json())//body parsing

app.use('/api/users', userRoutes);

//Global Error handler
app.use((err, req, res, next)=>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message : err.message
    })
    next()
})

const PORT = process.env.PORT || 1234 ;
app.listen(PORT, () => console.log("Server is available at " + PORT))
