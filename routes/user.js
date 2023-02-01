const userModel = require("../models/user");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();


//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req,res) => {
  if(req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
  }

  try { 
    const updatedUser = await userModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      }, 
      {new: true}
    );
    res.status(200).json(updatedUser);
  } catch(err) { 
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id",verifyTokenAndAuthorization , async (req,res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted!!!");
  } catch(err) {
    res.status(500).json(err);
  }
});

//GET USER
router.delete("/find/:id",verifyTokenAndAdmin , async (req,res) => {
  try {
    const user = await userModel.findById(req.params.id);
    
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch(err) {
    res.status(500).json(err);
  }
});

//GET ALL USER
router.delete("/",verifyTokenAndAdmin , async (req,res) => {
  const query = req.query.new;

  try {
    const users = query ? await userModel.find().sort({_id: -1}).limit(1) : await User.find();
    res.status(200).json(users);
  } catch(err) {
    res.status(500).json(err);
  }
});




module.exports = router;