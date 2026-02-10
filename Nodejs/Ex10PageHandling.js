import http from 'http';
import fs from 'fs';
import path from 'path';

const port = 3000;
const root = path.dirname(process.argv[1] || __dirname);

function renderPage(fileName, res){
    const file = root + "/" + fileName;
    fs.createReadStream(file).pipe(res);//read the file and pipe it to the response object, which will send it to the client.pipe method is used to read the stream and send t to the response object. It is more efficient than reading the entire file into memory and then sending it to the client. 
}

function processRequest(req, res){
    if(req.url === "/favicon.ico"){
        return;
    }
    console.log(req.url)
    if(req.url === "/"){
        res.end("<h1>Welcome to Phaniraj Training</h1>")
    }else if(req.url === "/reg"){
        renderPage("RegPage.html", res);
    }
}
http.createServer((req, res) => {
    processRequest(req, res);
}).listen(port, () => {
    console.log("Server is running on http://localhost:" + port);
});