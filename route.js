var express = require('express');
const router = express.Router();
const Event =require ('./event.model')

router.get('/events',(req,res,next)=>{

Event.find(function(err,events){

res.json(events)

})



})
;

router.get('/events/:_id',(req,res,next)=>{

    console.log(req.params._id);
var query = { _id: req.params.id };

Event.find().where("_id", req.params._id ).
exec(function(err, result) {
    res.json(result)
    if (err) throw err;
    console.log(query)
    console.log(result);

})
;

})

router.post('/event/saveevent',(req,res,next)=>{

 let newEvent=new Event({

    
   name: req.body.name,
   date: req.body.date,
   time: req.body.time,
   price: req.body.price,
   imageUrl: req.body.imageUrl,
   location: req.body.location,

 
   
 })

 newEvent.save((err,contact)=>{

    if(err)
    {
           res.json({msg:'Failed'})

    }
 })



})



module.exports = router