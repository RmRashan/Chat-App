const Conversation = require("../models/conversation.model");
const Message = require("../models/message.model");
const { getReceiverSocketId, io } = require("../socket/socket");

const sendMessgae = async (req, res) => {

    try {
        const { message } = req.body;
        const { id: reciverId } = req.params;
        const senderId = req.user._id

        console.log(message + " : " + senderId + " : " + reciverId)


        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, reciverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, reciverId]
            })

        }
        const newMessage = new Message({
            senderId,
            reciverId,
            message,
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }

        

        // await newMessage.save();
        // await conversation.save();

        // this will run in parallel
        await Promise.all([conversation.save(), newMessage.save()])

        const receiverSocketId = getReceiverSocketId(reciverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }


        res.status(200).json(newMessage);


    } catch (error) {
        res.status(500).json({ error: "sendMessgae.js Internal server error" + error });


    }

}



const getdMessgae = async (req, res) => {

    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;



        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages");






        if (!conversation) return res.status(200).json([]);
        const message = conversation.messages;

        res.status(200).json(message);


    } catch (error) {
        res.status(500).json({ error: "sendMessgae.js Internal server error" + error });


    }

}



module.exports = { sendMessgae, getdMessgae };