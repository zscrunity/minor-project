const express = require("express");
const router = express.Router();
const Property = require("../models/property");

router.post("/propertyadd", async ( req , res ) => {
  const newProperty = new Property(req.body);  
  try{
    const property = await newProperty.save();
    res.status(201).json(property);
   
  } catch (error) {
    return res.status(500).json(error);
  }
}); 

module.exports = router;
