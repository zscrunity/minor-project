const mongoose = require("mongoose");

const propertyschema = mongoose.Schema({

  propertyname : { type : String , required : true },
  category: { type : String, required: true},
  priceprefix : { type : String , required : true },
  phone : { type : Number, required : true},
  price : { type : Number , required : true },
  desc : { type : String, required : true },
  location : { type : String ,required : true},
  area : { type : String, required : true},
  imageurls : [],
  currentbookings: []
})

const propertyModel = mongoose.model('properties', propertyschema);

module.exports = propertyModel;