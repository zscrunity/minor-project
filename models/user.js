const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  
  firstname : { type: String, required: true},
  lastname : { type: String, required: true},
  email : { type: String, required: true , unique: true},
  password : { type: String, required: true},
  username : { type: String, required: true, unique: true},
  isAdmin : { type: Boolean, default: false}  
} , {
  timestamps: true
});

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;