const mongoose = require( 'mongoose' );
const uuid = require( 'uuid' );


const sportSchema= mongoose.Schema({
        id:uuid.v4(),
        name:String,
        num_players:Number  
});

sports = mongoose.Collection('sports',sportSchema);

const Sports={
    deleteSports:function(id){
        sports
        .findOneAndRemove({id:id})
        .then(deletedSport=>{
            return deletedSport;
        })
        .catch(err=>{
            return err;
        })
        }

}

/* Your code goes here */

module.exports = {
    Sports
};