const mongoose= require('mongoose');


//schema design

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        requird:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,'email is required and should be unique']

    },
    password:{
        type:String,
        required:[true,"password is required"],


    },

},{timestamps:true})

const userModel=mongoose.model('users',userSchema);
//export
module.exports= userModel