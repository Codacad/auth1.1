const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username:{type:String, require:true},
  email:{type:String, require:true},
  password:{type:String, require:true}
}, {timestamps:true})

const User = mongoose.model("User", userSchema)
module.exports = User