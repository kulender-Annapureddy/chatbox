import bcrypt from 'bcryptjs';
import User from "../models/user.model.js";
import generateTokenAndSetCookie from '../utilis/generateToken.js';
 
// Reister or signup
export const signUp = async (req, res) => {
    try {
        const {fullName, username, password,confirmPassword, gender}  = req.body
        if(password !== confirmPassword){
            return res.status(400).json({error:"password don't match"});
        }
        const user = await User.findOne({username});
        if(user) {
            return res.status(400).json({error:"username already exist"});
        }

        // Hasing password here 
          const salt = await bcrypt.genSalt(12)
          const hashPassword = await bcrypt.hash(password,salt);
 
        // refer to this url for profilepictures
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic= `https://avatar.iran.liara.run/public/girl?username=${username}`
        
        const newUser =  new User({
            fullName,
            username,
            password:hashPassword,
            gender,
            profilePic:gender === 'male' ? boyProfilePic : girlProfilePic ,

        })
        if (newUser) {

            // generate Jwt token
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({
               _id:newUser._id, 
               fullName:newUser.fullName,
               username: newUser.username,
               profilePic:newUser.profilePic
            })
        } else {
            res.status(400).json({error:"invalid user data"});
        }
       
    } catch (error) {
       cpnsole.log("error in signup controller", error.message);
       res.status(500).json({error: "internalsrver error"}); 
    }
}
//login
export const loginUser = async (req, res) => {
    try {
        const {username, password} = req.body;

        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || " ");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"invalid username or incorrect password"});
        }
        generateTokenAndSetCookie(user.id, res);
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user,username,
            profilePic:user.profilePic,
        });
    } catch (error) {
        console.log("error in login controller", error);
        res.status(400).json({error: "internal server error"});
    }
}
// logout
export const logout = (req, res) => {
    try {
        res.cookie("jwt", "",{maxAge:0});
        res.status(200).json({message:"logged out successfully :)"});
    } catch (error) {
        console.log("error in logout controller", error.message);
        res.status(500).jsont({error:"internal server error"})
    }
}
