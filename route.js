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

 let newEvent=new Event(req.body)

     newEvent.save((err,event)=>{

     if(err)
     res.json({msg:err});
     else
     res.json(event)


     })



})



module.exports = router