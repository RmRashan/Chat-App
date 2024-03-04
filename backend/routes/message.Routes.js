
const {sendMessgae, getdMessgae} = require('../controllers/sendMessgae.controller');
const ProtectRoute = require('../middleware/protectRoute');

const messageRoute = require('express').Router();



messageRoute.get("/:id", ProtectRoute, getdMessgae)
messageRoute.post("/send/:id", ProtectRoute, sendMessgae)

module.exports = messageRoute;