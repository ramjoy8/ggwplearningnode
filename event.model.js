const mongoose =require('mongoose')

const EventSchema = mongoose.Schema({
    
          id:{ type:Number,
               required:true},
          name: {
              type:String,
              required:true},
          date: {type:String,
            required:true},
          time: {type:String,
            required:true},
          price: {type:Number,
            required:true},
          imageUrl: {type:String,
            required:true},
          location: {type:Object,
            required:true
        },

        
          sessions: {type:Array,
            required:true}


})

const Event=module.exports=mongoose.model('Event',EventSchema)