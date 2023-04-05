const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/Users')


// REGISTER USER
const authController={
    register : async(req,res)=>{
        try{
            const{email,password,role}=req.body
            if(!email || !password || !role){
                console.log("All fields are cumpulsory!")
                return res.json({message:"All fields are compulsory !!"})
                // return res.redirect('/auth/register')
            }

            const userExists=await User.exists({ email: email });
            console.log("id",userExists)

            if(userExists){
                console.log("User Already exist!")
                return res.json("User Already exist!")
            }


            // if(userExists){
            //     console.log("Already exist !");
            //     // res.json("Allready exist !!");
            //     return res.redirect('/auth/register')
            // }

            const salt = await bcrypt.genSalt();
            const hashedPassword=await bcrypt.hash(password,salt);
            const newUser=new User({
                email,
                password:hashedPassword,
            })
            const savedUser = await newUser.save();
            console.log("User registered successfully !!")
            res.status(201).json({user:savedUser});
        }
        catch(err){
            res.status(500).json({error:`myError${err.message}`})
        }
    }
    ,
    login : async(req,res)=>{
        try{
            const{email,password}=req.body
    
            const user = await User.findOne({email:email});
            if(!user) return res.json({msg:"User don't exist"})
    
            const isPasswordMatch=await bcrypt.compare(password,user.password);
            if(!isPasswordMatch) return res.json({msg:"Invalid credentials"})
    
            const token=jwt.sign({id:user.id},process.env.JWT_SECRET_KEY)
            res.json({token:token,user:user})
        }
        catch(err){
            res.json({error:err.message})
        }
    }
}

module.exports =authController