const res = require('express/lib/response');
const fs = require('fs');
const http = require('http');
const { home } = require('nodemon/lib/utils');

const server = http.createServer((req,res)=>{
    console.log("request made");
    res.setHeader('Content-TYpe','text/html');
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'Home.html'
            break;
        default:
            break;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.end(data);
        }
    })
});


server.listen(3000,'localhost',()=>{
    console.log("server startted at port no 3000")
})