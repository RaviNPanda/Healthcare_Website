const jwt = require('jsonwebtoken');
const User = require("../model/userSchema");
const Authenticate =async (req,res,next)=>{
    try {
        const token = req.cookies.jwtToken;
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);

        const rootuser = await User.findOne({_id:verifyToken._id,"tokens.token":token});
        
        if(!rootuser){
            throw new Error("user not found")
        }

        req.token = token;
        req.rootuser = rootuser;
        req.userID = rootuser._id;

        next();
    } catch (error) {
        res.status(401).send("unauthorized: NO token provied")
        console.log(error)
    }
}

module.exports =Authenticate;