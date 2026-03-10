const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')//encrypt ur passwords.

const userSchema = new mongoose.Schema({
    name : { type : String, required : [true, 'Name is mandatory']},
    email :{
        type : String, required:[true, 'Email is mandatory'],
        unique : true,
        match: [/.+\@.+\..+/, "Please provide a valid Email Address"]
    },
    password: {
        type : String, required: [true, 'Password is mandatory'], minlength: 6
    },
    role : {
        type : String, default : 'customer'
    }
}, {timestamps : true});

userSchema.pre('save', async function(){
    if(!this.isModified('password')) return;
    const temp = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, temp);
})

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model('User', userSchema);
