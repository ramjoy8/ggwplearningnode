var express = require('express');
const router = express.Router();
const Event =require ('./event.model')

router.get('/events',(req,res,next)=>{

Event.find(function(err,events){

res.json(events)

})



})

router.post('/addevent',(req,res,next)=>{

let newEvent= new Event({

    id:req.body.id,
    name: req.body.name,
    date: req.body.date,
    time: req.body.time,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    location: req.body.location,
    sessions: req.body.sessions

})

newEvent.save((err,event)=>{
 if(err)
 {
     res.json({msg:'Failed to add'+err})
 }
 else 
 {
    res.json({msg:'Add sucess'})
 }

})
})
module.exports = router