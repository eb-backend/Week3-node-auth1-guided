

const usersModel = require("../users/users-model")
const bcrypt= require("bcryptjs")


const restrict=()=>{
    return async (req, res, next)=>{
        try{
            //this is with the session
            if(!req.session || !req.session.user){
                return res.status(401).json({message: "not authorized"})
            }

            //manually
            // const {username, password}=req.headers
            // if (!username || !password){
            //     return res.status(401).json({ message: "invalid 1"
            //     })
            //   }
            //   //make sure user exists
            // const user = await usersModel.findBy({username}).first()

            // if(!user){
            //     return res.status(401).json({message: "invalid 2"})
            // }

            // const passwordvalid= await bcrypt.compare(password, user.password)

            // if(!passwordvalid){
            //     return res.status(401).json({message:"invalid 3"})
            // }
            next()

        }catch(err){next(err)}


}
}


module.exports ={
    restrict
}