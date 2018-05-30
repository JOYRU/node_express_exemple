const express = require('express') ; 
const http = require('http') ; 
const morgan = require('morgan') ; 
const bodyParser = require('body-parser') ; 



const hostname = 'localhost' ;
const port = 3000  ; 

const app = express() ; 

app.use(morgan('dev')) ; 
app.use(bodyParser.json()) ; 

app.all('/dishes' , (req,res,next)=>{

       res.statusCode = 200 ;
       res.setHeader('Content-Type' , 'text/plain') ;
       next() ;  
}) ; 


app.get('/dishes' , (req,res,next)=>{
res.end('will send all the dishes to you!') ; 
}) ; 

app.post('/dishes' , (req,res,next) =>{
    res.end('Will add the dishes : ' + req.body.name + 
        'with detais : '+ req.body.description) ; 

}) ; 


app.put('/dishes' , (req,res,next) =>{

    res.statusCode = 403 ; 
    res.end('PUT operation not supported on /dishes') ; 

}) ; 



app.delete('/dishes' , (req,res,next) =>{
    res.end('Delecting all the dishess!') ; 

}) ; 


app.get('/dishes/:dishId' , (req,res,next)=>{
    res.end('will send detais of the dish: ' + req.params.dishId + 'to you!') ; 
    }) ; 

app.post('/dishes/:dishId' , (req,res,next) =>{
    res.statusCode = 403 ; 
    res.end('Post operation not supported on /dishes/' + req.params.dishId) ;  

}) ; 


app.put('/dishes/:dishId' , (req,res,next) =>{

  
    res.write('Updatting the dish:  ' + req.params.dishId + '\n') ;
    
    res.end('Will update the dish : ' + req.body.name + 
    'with details : ' + req.body.description) ; 


}) ; 



app.delete('/dishes/:dishId' , (req,res,next) =>{
    res.end('Delecting dish : ' + req.params.dishId) ;


}) ; 











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


