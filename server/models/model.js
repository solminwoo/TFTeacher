const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/tft', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
    password:{type:String, required:true}
}, {timestamps:true})

const User = mongoose.model('User', UserSchema)
module.exports={
    User:User
}