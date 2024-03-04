const mongosee = require('mongoose')


const messageScheme = mongosee.Schema({
    senderId: {
        type: mongosee.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    reciverId: {
        type: mongosee.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type:String,
        required:true
    }

},{timestamps:true})

const Message = mongosee.model("Message", messageScheme)

module.exports = Message;