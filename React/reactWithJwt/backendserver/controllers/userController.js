const User = require('../models/user.js');
const jwt = require('jsonwebtoken');

const generateToken = (id)=>{
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn : '30d'});
}

exports.registerUser = async(req, res, next)=>{
    const { name, email, password} = req.body;
    console.log("Registering user: ", {name, email});
    try{
        const userExists = await User.findOne({ email });
        if(userExists)
            return res.status(400).json({message :  'User already registered'});
        const user = await User.create({name, email, password});
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email : user.email, 
            token : generateToken(user._id)
        })
    }catch(err){
        next(err)//Pass the error to Error handling middleware. 
    }
}

exports.loginUser = async(req, res, next)=>{
    const { email, password } = req.body;//Email and password will be the payload. 
    try{
        const user = await User.findOne({email});
        if(user && (user.matchPassword(password))){
            res.json({
                 _id : user._id,
                name : user.name,
                email : user.email, 
                token : generateToken(user._id)
            })
        }else{
            res.status(401).json({message : 'Invalid Username or password'})
        }
    }catch(err){
        next(err);
    }
}

exports.getUserProfile = async (req, res) =>{
    const user = await User.findById(req.user.id).select('-password');
    if(user){
        res.json(user)
    }else{
        res.status(400).json({message : 'user not found'})
    }
}
//todo: implement updateProfile and deleteUser methods. 
