import user from "../models/user"
import bcrypt from 'bcrypt'

const signup = async(req, res) =>{
    const {email, password, confirmPassword, name}  = req.body

    try{
          const existing_user = await user.findOne({email})
          if(existing_user){
            return res.status(400).json({mssg : "User already exists"})
          }

          if(password != confirmPassword){
            return res.status(400).json({mssg : "Passwors does not match"})
          }

          const hashedPassword = await bcrypt.hash(password, 12)
    }
    catch(error){

    }
}