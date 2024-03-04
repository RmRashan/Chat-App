const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    fullname: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
        minlenght: 6
    },

    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },

    profilePic: {
        type: String,
        default:""
    }


});


 const User = mongoose.model("User", userSchema);

module.exports=User;