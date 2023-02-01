const express = require("express");
const router = express.Router();
const Property = require("../models/property");
const { verifyTokenAndAdmin } = require("./verifyToken");

//CREATE
router.post("/propertyadd", verifyTokenAndAdmin, async ( req , res ) => {
  const newProperty = new Property(req.body);  
  try{
    const property = await newProperty.save();
    res.status(200).json(property);
   
  } catch (error) {
    return res.status(500).json(error);
  }
}); 


//UPDATE
router.put("/:id", verifyTokenAndAdmin, async(req,res) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProperty);
  } catch(err) {
    res.status(500).json.apply(err);
  }
})

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req,res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.status(200).json("Property has been deleted!!!");
  } catch(err) {
    res.status(500).json(err);
  }
});

//GET PROPERTY
router.get("/find/:id", async(req,res) => {
  try {
    const property = await Property.findById(req.params.id);
    res.status(200).json(property);
  } catch(err) {
    res.status(500).json(err);
  }
});

//GET ALL PROPERTY
router.get("/", async (req,res) => {
  const qNew = req.query.new
  const qCategory = req.query.category
  try {
    let properties;
    
    if(qNew) {
      properties = await Property.find().sort({createdAt: -1}).limit(5)
    } else if(qCategory) {
      properties = await Property.find({category: {
        $in: [qCategory],
      },
    });
    } else {
      properties = await Property.find();
    }
    res.status(200).json(properties);
  } catch {

  }
});

module.exports = router;