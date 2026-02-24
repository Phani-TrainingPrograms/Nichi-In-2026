import express from 'express'
import connectDb from './config/db.js'
import authorRoutes from './routes/author.route.js'
import bookRoutes from './routes/book.route.js'

const portNo = 1234;
const app = express();

app.use(express.json())
app.use("/api/authors", authorRoutes)
app.use("/api/books", bookRoutes)

connectDb();

app.listen(portNo, ()=> console.log(`Server available at http://localhost:${portNo}`))

