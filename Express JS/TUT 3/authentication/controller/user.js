import User from "../models/user.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const generateToken = (user)=>{
 return jwt.sign(
  {email : user.email , id : user._id},
  'secretKey',
  {expiresIn : '1h'}      //1h = 1 hour
 )
}

export const signup = async(req, res) =>{
    const {name, email, password, confirmPassword}  = req.body  //Don't forget to use middleware body-parser (npm i body-parser)

    try{
          const existing_user = await User.findOne({email})
          if(existing_user){
            return res.status(400).json({mssg : "User already exists"})
          }

          if(password != confirmPassword){
            return res.status(400).json({mssg : "Passwors does not match"})
          }

          const hashedPassword = await bcrypt.hash(password, 12)

          const user = await User.create({ email, password : hashedPassword, userName : name})
          return res.status(200).json({user})

    }
    catch(error){
      return res.status(500).json({mssg : "Sign up faiiled"}, error)

    }
}

//1st way - using routes + postman
export const signin = async(req, res) =>{
  const {email, password} = req.body
  try{
    const existing_user = await User.findOne({email})
    if(!existing_user){
      return res.status(400).json({mssg : "User does not  exists"})
    }

    const isPasswordCorrect = await bcrypt.compare(password, existing_user.password)
    if(!isPasswordCorrect){
      return res.status(400).json({mssg : "Invalid password"})
    }
  
    const token = generateToken(existing_user)
    return res.status(200).json({mssg : "User sign in successful", token})

  }
  catch(error){
    return res.status(500).json({mssg : "Sign in failed"}, error)
  }
}

//This one is used woth the 2nd mwethod - middleware one.
// export const getUserProfile = async(req, res) =>{
//   try{
//     const userProfile = req.user
//     return res.status(200).json({userProfile})
//   }
//   catch(error){
//     return res.status(500).json({mssg : "Something went wrong"}, error)
//   }
// }



//This is used wiht 3rd method - jWT one
export const getUserProfile = async(req, res) =>{
  try{
    const user = await User.findById(req.userId)
    if(!user){
    return res.status(404).json({mssg : "User not found"}, error)
  }
    return res.status(200).json({user})
  }
  catch(error){
    return res.status(500).json({mssg : "Something went wrong"}, error)
  }
}