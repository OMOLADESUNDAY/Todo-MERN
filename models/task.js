const mongoose=require('mongoose');

const TaskSchema= new mongoose.Schema({
     name:{
          type:String,
          required:[true, 'must provide a name'],
          trim:true,
          maxlength:[20, 'name cannot be more than 20'],
          minlength:[3,'name should be more than 3']
     },
     completed:{
          type:Boolean,
          default:false
     }
})
module.exports=mongoose.model('task',TaskSchema)
