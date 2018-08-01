const express = require('express') ;
const bodyParser = require('body-parser') ; 

const dishrouter = express.Router() ; 

dishrouter.use(bodyParser.json()) ; 

dishrouter.route('/')
.all( (req,res,next)=>{

    res.statusCode = 200 ;
    res.setHeader('Content-Type' , 'text/plain') ;
    next() ;  
}) 
.get( (req,res,next)=>{
    res.end('will send all the dishes to you!') ; 
    }) 
    
.post(  (req,res,next) =>{
        res.end('Will add the dishes : ' + req.body.name + 
            'with detais : '+ req.body.description) ; 
    
    }) 
    
    
.put( (req,res,next) =>{
    
        res.statusCode = 403 ; 
        res.end('PUT operation not supported on /dishes') ; 
    
    })  
    
    
    
.delete( (req,res,next) =>{
        res.end('Delecting all the dishess!') ; 
    
    }) ; 

    dishrouter.route('/dishes/:dishId') 

    .all( (req,res,next)=>{

        res.statusCode = 200 ;
        res.setHeader('Content-Type' , 'text/plain') ;
        next() ;  
    }) 
    .get( (req,res,next)=>{
        res.end('will send dishId the dishes to you!') ; 
        }) 
        
    .post(  (req,res,next) =>{
            res.end('Will add the joy  dishes : ' + req.body.name + 
                'with detais : '+ req.body.description) ; 
        
        }) 
        
        
    .put( (req,res,next) =>{
        
            res.statusCode = 403 ; 
            res.end('PUT operation not joy supported on /dishes') ; 
        
        })  
        
        
        
    .delete( (req,res,next) =>{
            res.end('Delecting fixed dishId from the dishess!') ; 
        
        }) ; 
    




module.exports = dishrouter ; 

