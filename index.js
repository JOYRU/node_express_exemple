const express = require('express') ; 
const http = require('http') ; 
const morgan = require('morgan') ; 
const bodyParser = require('body-parser') ; 

const dishrouter = require('./routes/dishRouter') ; 


const hostname = 'localhost' ;
const port = 3000  ; 

const app = express() ; 

app.use(morgan('dev')) ; 
app.use(bodyParser.json()) ; 



app.use('/dishes' , dishrouter) ; 



app.use(express.static(__dirname+'/public')) ;

app.use((req,res,next)=>{
      console.log(req.headers) ; 
      res.statusCode = 200 ; 
      res.setHeader('Content-type' , 'text/html') ; 
      res.end('<html><body><h1>This is an express</h1></body></html>') ; 

}) ; 

const server = http.createServer(app) ; 

server.listen(port,hostname , () =>{

    console.log(`Server running http://${hostname}:${port}`) ; 
} ) ; 


