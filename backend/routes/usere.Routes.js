const usersRoute = require('express').Router();
const getUsersSideBar = require('../controllers/getUsersSideBar.controller');
const ProtectRoute = require('../middleware/protectRoute');

usersRoute.get("/", ProtectRoute, getUsersSideBar)


module.exports = usersRoute;