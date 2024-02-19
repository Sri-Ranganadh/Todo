const jwt  = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function authMiddleware(req,res,next){
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({})
    }
    const token = authHeader.split(' ')[1]
    try{
        const data = jwt.verify(token,JWT_SECRET)
        req.userId = data.userId
        console.log(data)
        next();
    }
    catch(err){
            
            return res.status(401).json({
                message : "Logged Out"
            })
    }

}

module.exports={authMiddleware}