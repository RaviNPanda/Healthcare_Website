const express = require('express');
const router = express.Router();
const User = require("../model/userSchema");
const authenticate = require('../middleware/authenticate')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/',(req,res)=>{
    res.send("hello world from router")
})
 
router.post('/api/register',async (req,res)=>{
    console.log(req.body)
    const {name,email,gender,phone,dob,password,cpassword} = req.body;
        if(!name || !email || !gender|| !dob || !phone || !password ||!cpassword ||(cpassword!==password)){
            return res.status(422).json({error:"invalid data"})
        }

    try {
        const userExit = await User.findOne({email:email});
        if(userExit){
            return res.status(422).json({error:"already registered user"})
        }
        const spassword = await bcrypt.hash(password,10);
        const copassword = await bcrypt.hash(cpassword,10);

        const data = new User({
            name:name,
            email:email,
            phone:phone,
            gender:gender,
            dob:dob,
            password:spassword,
            cpassword:copassword
        });
        const savedata = await data.save();
        console.log(savedata)
        if(savedata){
            res.status(201).json({message:"successfully registered User"})
        }
        else{
            res.status(500).json({error:"registration failed"})
        }
    } catch (error) {
        console.log(error)
    }

})

router.post('/api/login',async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(522).json({error:"invalid data"})
    }
    try {
        const data = await User.findOne({email:email});
        if(data!=null){
            const hashcompare = await bcrypt.compare(password, data.password);
            
            const token = await data.generateAuthToken();//calling userschema function called generateAuthToken
                        res.cookie("jwtToken",token,{
                            maxAge: new Date(Date.now() + 259800000),httpOnly:true
                });

            if(hashcompare){   
               return res.status(201).json({message:"user logged in"})
            }
            else{
               return res.status(422).json({error:"invalid data"})
            }
        }
        else{
                return res.status(422).json({error:"plz complete data"})
        }
    } catch (error) {
        console.log(error)
    }
})



router.get('/api/Home', authenticate ,(req,res)=>{
    res.send(req.rootuser)
})

router.get('/api/about', authenticate ,(req,res)=>{
    res.send(req.rootuser)
})

router.get('/api/getuser', authenticate ,(req,res)=>{
    res.send(req.rootuser)
})

router.post('/api/contact', authenticate ,async (req,res)=>{
      const {email,message}  = req.body;
      if(!email || !message){
        console.log("error occured at auth js 93")
        return res.json({error:"complete the data"})
      }
      
      const userinfo = await User.findOne({_id: req.userID }) 
      if(userinfo){
            const usermessage = await userinfo.addmessage(email,message);
            await userinfo.save();
            res.status(201).json({message:"user message stored"})
      }
      else{
        console.log("error occured at auth js 105")
        return res.status(404).json({error:"complete the data"})
      }
})

router.get('/api/logout' ,(req,res)=>{
    console.log("at 106 at auth .js")
    res.clearCookie("jwtToken",{path:'/'});
    console.log("at 108 at auth .js")
    res.status(200).send('User Logout')
})

module.exports = router;