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

    Event.findById(req.params._id, function(err, event) {
        if (err)
            res.send(err);
        res.json(event);
    });



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

     newEvent.save(
 )



})



module.exports = router