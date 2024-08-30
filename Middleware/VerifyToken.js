const jwt = require ('jsonwebtoken')
const verifyToken = (req,res,next)=>{
    const token = req.cookies.accessToken;
    if(token){
        jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
            if(err){
                res.status(500).json({message:'Access Denied'})
            }else{
                req.user = user
                next();
            }
        });
    }else{
        res.status(401).json({message:'Access Denied'})

    }
};
module.exports = verifyToken;
