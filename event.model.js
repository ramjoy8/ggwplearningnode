const mongoose =require('mongoose')

const EventSchema = mongoose.Schema({
    
          
          name: {
              type:String,
              },
          date: {type:String,
            },
          time: {type:String,
           },
          price: {type:Number,
            },
          imageUrl: {type:String,
            },
          location: {type:Object,
            
        },

        
          sessions: {type:Array
            }


})

const Event=module.exports=mongoose.model('Event',EventSchema)