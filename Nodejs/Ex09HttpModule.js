//Http Module is used to create web server and handle http request and responses. 
import http from 'http';

const port = 3000;

function processRequest(req, res) {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // console.log("Request received from client:", req.url);
    // res.end('Hello World!');
    switch (req.url) {
      case "/Employees" : res.end("<h1>Employee List</h1><ul><li>Phaniraj</li><li>Suresh</li><li>Ramesh</li></ul>"); break;
      case "/Departments" : res.end("<h1>Department List</h1><ul><li>HR</li><li>IT</li><li>Finance</li></ul>"); break;
      default: res.end("<h1>Welcome to the Home Page</h1><p>Please navigate to /Employees or /Departments to see the respective lists.</p>"); break;
    }    
}

http.createServer(processRequest).listen(port, () => {
    console.log("Server is running on http://localhost:" + port);
});