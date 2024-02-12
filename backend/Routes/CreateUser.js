const express=require('express')
const router=express.Router();
const User=require('../models/User')
const { body, validationResult } = require('express-validator');

const bcrypt=require('bcrypt')
const jwt=require("jsonwebtoken")
const jwtSecret="MyNameIsAayushMankarandIAmLegend"

router.post('/createuser',[
    body('email').isEmail(),
    body('name').isLength({min:5}),
    body('password','Incorrect Password').isLength({min:5})
]


,async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors:errors.array()})
    }
  
    const salt=await bcrypt.genSalt(10);  //pass upto 10characters
    let secPassword=await bcrypt.hash(req.body.password,salt) //req.body.password comes from frontend

  
    try {
        await User.create({
            name:req.body.name,   //all this bcoz we have to take the input from the user
            password:secPassword,  //creates secure password
            email:req.body.email,
            location:req.body.location,
        })
        res.json({success:true})
    } catch (error) {
        console.log(error)
        res.json({success:false})
    }
})


router.post('/loginuser',[
    body('email').isEmail(),
    body('password','Incorrect Password').isLength({min:5})
],
async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors:errors.array()})
    }
    let email=req.body.email;
    try {
        let userData=await User.findOne({email})  //finds for same email in db
        if (!userData) {
            return res.status(400).json({errors:"Try logging in with correct email credentials"})
        }
        //checks for password
        const pwdCompare=await bcrypt.compare(req.body.password,userData.password); 

        if (!pwdCompare) {
            return res.status(400).json({errors:"Try logging in with correct password credentials"})

        }
        const data={
            user:{
                id:userData.id
            }
        }
        const authToken=jwt.sign(data,jwtSecret)
        return res.json({success:true,authToken:authToken})

    } catch (error) {
        console.log(error)
        res.json({success:false})
    }
})

module.exports=router;