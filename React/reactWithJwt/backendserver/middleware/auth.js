const jwt = require('jsonwebtoken');
const User = require('../models/user.js')

const protect = async(req, res, next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            //extract the token
            token = req.headers.authorization.split(' ')[1]
            //verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            //find the mathching user
            req.user = await User.findById(decoded.id).select('-password');//no password shall be shared. 
            //move to next middleware.
            next(); 
        }catch(err){
            console.error(err.message);
            res.status(401).json({message : 'Not Authorized, token failed'})
        }
    }

    if(!token){
        res.status(401).json({message : 'No Token, so not authorized'});
    }
}

module.exports = { protect }
