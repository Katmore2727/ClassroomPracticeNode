const http = require('http');
// const { hostname } = require('os');
const express = require('express');
const path = require('path');

// const app = http.createServer((req, res)=>{
//     res.writeHead(200,{'content-type':'text'})
//     res.end('Hello  World');
// })

const app = express();

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'Home.html'));
})

app.get('/Contactus', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'Contactus.html'));
})

app.get('/Aboutus', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'Aboutus.html'));
})


port = 3004;
// hostname1 = `127.0.0.1`;

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
})