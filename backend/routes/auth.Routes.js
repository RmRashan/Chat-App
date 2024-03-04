const { login , signup , logout  } = require('../controllers/auth.controller');


const authRoute = require('express').Router();


authRoute.post("/login", login )
authRoute.post("/signup", signup )
authRoute.post("/logout", logout )

module.exports = authRoute;