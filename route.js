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

var query = { id: req.params.id };

Event.find(query).toArray(function(err, result) {
    res.json(result)
    if (err) throw err;
    console.log(result);

})
;

})

module.exports = router