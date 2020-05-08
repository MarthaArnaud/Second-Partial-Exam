const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const jsonParser = bodyParser.json();
const { DATABASE_URL, PORT } = require( './config' );

const app = express();

app.delete('/sports/delete',(req,res)=>{
    let id= req.body.id;
    let sportId= req.query.id;
    if(!id){
        res.statusMessage="The id parameter is required";
        return res.status(406).end();
        
    }
    if(!sportid){
        res.statusMessage="The sportId parameter is required"; 
        return res.status(406).end();
        
    }
    if(id!=sportId){
        res.statusMessage="id and sport id parameter dont match";
        return res.status(409).end();

    }
    sports
    .deleteSports(id)
    .then(response=>{
        return response;
    })
    .then(responseJSON=>{
        if(responseJSON.status.ok){
            return res.status(204).end();
        }
        else{
            res.statusMessage="The id doesnt belong to any sport";
            return res.status(404).end();
        }
    })
    .catch(err=>{
        return err;
    })
    
    
    
    
})

/* Your code goes here */


app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});