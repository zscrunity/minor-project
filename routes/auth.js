const express = require('express');
const router = express.Router();
const User = require("../models/user");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async ( req , res ) => {
  const newuser = new User(req.body);
  newuser.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();

  try{
    const user = await newuser.save();
    console.log(user);
    res.status(201).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
}); 
 
//LOGIN
router.post("/login", async ( req, res ) => {
  try {

    const user = await User.findOne({username: req.body.username});
    !user && res.status(401).json("Wrong Credentials!");

    const hashedPassword = CryptoJS.AES.decrypt( user.password, process.env.PASS_SEC);
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    OriginalPassword !== req.body.password && res.status(401).json("Wrong Credentials!");

    const accessToken = jwt.sign({
      id: user._id, isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      {expiresIn:"3d"}
      );
    
    const {password, ...others} = user._doc;
    res.status(200).json({...others,accessToken}); 

   
  } catch(error) {
    return res.status(500).json({error});
  }
});

module.exports = router;