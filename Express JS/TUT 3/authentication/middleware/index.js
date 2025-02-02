// 2nd way - using middleware
// import User from '../models/user.js'
// import bcrypt from 'bcrypt'

// //Doing authentication through headers
// export const auth = async (req, res, next) => {
//     const authHeader = req.headers.auth

//     if (authHeader && authHeader.startsWith('Basic ')) {
//         const credentials = authHeader.split(' ')[1]
//          //console.log(credentials)
         
//         const [email, password] = credentials.split(':')
//         //console.log(email)
//         //console.log(password)
//         try {
//             const existing_user = await User.findOne({email})
//             if (!existing_user) {
//                 return res.status(400).json({ mssg: "User does not  exists 121" })
//             }

//             const isPasswordCorrect = await bcrypt.compare(password, existing_user.password)
//             if (!isPasswordCorrect) {
//                 return res.status(400).json({ mssg: "Invalid password" })
//             }

//             req.user = existing_user       //req.user conatins user's info after successful authentication
//             next()
//         }
//         catch (error) {
//             return res.status(500).json({ mssg: "Sign in faiiled" }, error)
//         }
//     }
// }







//3rd way - using JWT

import jwt from 'jsonwebtoken'

export const auth = async(req , res , next) =>{
    try{
        const authHeader = req.header('JWTAuth')
        if(!authHeader){
            return res.status(401)  //Unauthorized
        }

        // In jwt we don't use Basic bbut Bearer
        const token = authHeader.split(' ')[1]

        const isCustomAuth = token.length < 500
        let decodedData;

        if(token && isCustomAuth){
            decodedData = jwt.verify(token, 'secretKey')
            req.userId = decodedData?.id
        }else{
            decodedData = jwt.decode(token)
            req.userId = decodedData?.sub
        }
        next()

    }
    catch(error){
        console.log(error)
    }

}