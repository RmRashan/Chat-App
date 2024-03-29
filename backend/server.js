const express = require('express');
const path = require('path');
const authRoute = require('./routes/auth.Routes');
const messageRoute = require('./routes/message.Routes');
const connectToMongoDB = require('./lib/connectToMongoDB');
const cookieParser = require('cookie-parser');
const usersRoute = require('./routes/usere.Routes');
const { app, server } = require('./socket/socket');

const dirname = path.resolve();


require("dotenv").config();
// const port = process.env.PORT || 9000;
const port =  9000;
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);
app.use("/api/users", usersRoute);


app.use(express.static(path.join(dirname, "/frontend/dist")))


     
// app.get("*", (req, res) => {
//     res.sendFile(path.join(dirname, "frontend", "dist", "index.html"));
// })



server.listen(port, () => {
    connectToMongoDB();

    console.log("Server Runniing on port :" + port)
})