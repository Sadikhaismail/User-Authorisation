const mongoose = require ('mongoose')
const Bcrypt = require ('bcrypt')


const userSchema = new mongoose.Schema({
   userName: {
        type:String,
        required:true
    },

    email: {
        type:String,
        required:true
    },

    password: {
        type:String,
        required:true
    },
    role :{
        type:String,
        default:"user"
    }
})



userSchema.pre('save',async function (next){
    if(!this.isModified('password')){
        return next();
    }
    else{
        this.password=await Bcrypt.hash(this.password,10)
    }
})

const userModel= mongoose.model("user",userSchema)

module.exports=userModel