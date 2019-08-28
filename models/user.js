const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required:true, /* try testing in build true option */
        unique:true
    },
    password:{
        type: String,
        required:true,
    },
    name:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const User = mongoose.model('User',userSchema);
module.exports=User;