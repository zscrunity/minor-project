const mongoose = require("mongoose");

const roomschema = mongoose.Schema({

  name : { type : String , required : true },
  maxcount : { type : Number, required : true },
  phonenumber: { type : Number, required : true },
  rent : { type : Number, required : true },
  type: { type : String, required : true },
  description : { type : String, required : true },
  timestamps : Date,
  imageurls : [],
  currentbookings: []
})

const roomModel = mongoose.model('rooms', roomschema);

module.exports = roomModel;