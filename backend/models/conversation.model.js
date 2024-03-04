const mongosee = require('mongoose')

const conversationScheme = new mongosee.Schema({

    participants: [{
        type: mongosee.Schema.Types.ObjectId,
        ref: "User",
    }],
    messages:[ {
        type: mongosee.Schema.Types.ObjectId,
        ref: "Message",
        default:[],
    }]

}, { timestamps: true })

const Conversation = mongosee.model("Conversation", conversationScheme)

module.exports = Conversation;