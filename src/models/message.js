const mongoose = require('mongoose');
const validator = require('validator');

const messageSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLenght: 3
    },
    email:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("InValid Email Id")
            }
        }
    },
    phone:{
        type: String,
        required: true,
        min:10
    },
    message:{
        type: String,
        required: true,
        minLenght: 5
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const User = mongoose.model("Contact", messageSchema)

module.exports = User;