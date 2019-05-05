const mongoose =require('mongoose')

const EventSchema = mongoose.Schema({
    
          _id:{ type:Number,
               },
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
            
        },

        
          sessions: {type:Array
            }


})

const Event=module.exports=mongoose.model('Event',EventSchema)