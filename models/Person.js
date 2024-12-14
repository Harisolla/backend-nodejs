const mongoose = require('mongoose');
const Schema = mongoose.Schema;   

const PersonSchema = new Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    username : {
        type : String
    },
    profilepic :{
        type: String,
        default : "https://i.pinimg.com/474x/6c/d2/02/6cd202ff59f05bb096edd84353b49f10.jpg"
    },
    date :{
        type:Date,
        default :Date.now
    }
});

module.exports = Person = mongoose.model('myPerson',PersonSchema);