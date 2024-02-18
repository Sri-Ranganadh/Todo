const jwt  = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function authMiddleware(req,res,next){

    const token = req.cookies.token;
    try{
        const data = jwt.verify(token,JWT_SECRET)
        req.userId = data.userId
        console.log(data)
        next();
    }
    catch(err){
            res.clearCookie('token')
            return res.redirect('/')
    }

}

module.exports={authMiddleware}