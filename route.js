var express = require('express');
const router = express.Router();
const Event =require ('./event.model')

router.get('/events',(req,res,next)=>{

Event.find(function(err,events){

res.json(events)

})



})
;

router.get('/events/:id',(req,res,next)=>{

    console.log(req.params.id);
var query = { id: req.params.id };

Event.find().where("id", req.params.id ).
exec(function(err, result) {
    res.json(result)
    if (err) throw err;
    console.log(query)
    console.log(result);

})
;

})



// router.post('/event/saveevent',(req,res,next)=>{
//   let newEvent = new Event({
   
//    name: req.body.name,
//    date: req.body.name,
//    time: req.body.time,
//    price: req.body.price,
//    imageUrl: req.body.imageUrl,
//    location: req.body.location,
//    sessions:req.body.sessions
   



//    })
//    newEvent.save((err,event)=>{



//   });





//})
module.exports = router