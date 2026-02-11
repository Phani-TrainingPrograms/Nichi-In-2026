import express from 'express'
const app = express()
const port = 1234
//app.use(express.json()) //To handle the POST request, we need to use the express.json() middleware to parse the JSON body of the request.
app.use(express.urlencoded({ extended: true })) //To handle the POST request, we need to use the express.urlencoded() middleware to parse the URL-encoded body of the request.

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/Employees', (req, res) => res.send('<h1>Employees Page</h1>'))
app.get('/Products', (req, res) => res.send('<h1>Products Page</h1>'))
app.get('/About', (req, res) => res.send('<h1>About Page</h1>'))
app.get("/Registration", (req, res) => res.sendFile("RegPage.html", { root: "." }))//Current directory is the root directory. 

app.get("/details", (req, res) => {
    const { name, email, mobile } = req.query //Destructuring the query parameters from the request object.
    res.send(`<h1>Details of the Student</h1><hr><p>Name: ${name}</p><p>Email: ${email}</p><p>Mobile: ${mobile}</p>`)
})

//To handle the POST request, we need to use the express.json() middleware to parse the JSON body of the request.
app.post("/details", (req, res) => {
    console.log(req.body)
    if(req.body == undefined || req.body == null){
        res.send("<h1>Invalid Request</h1><hr><p>Please provide the details in the request body.</p>")
        return
    }
    const { name, email, mobile } = req.body //Destructuring the body parameters from the request object.
    res.send(`<h1>Details of the Student</h1><hr><p>Name: ${name}</p><p>Email: ${email}</p><p>Mobile: ${mobile}</p>`)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})