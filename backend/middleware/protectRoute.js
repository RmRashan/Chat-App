const jwt = require("jsonwebtoken");
const User = require("../models/user.model");



const ProtectRoute = async (req, res, next) => {
    try {

        const token = req.cookies.jwt;

        if (!token) {
            res.status(401).json({ error: "unauthorized - No Token Provided" });

        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded) {
            res.status(401).json({ error: "unauthorized - Ivaild Provided" });

        }

        const user = await User.findById(decoded.userID).select("-password")
        if (!user) {
            res.status(404).json({ error: "User Not found" });

        }
        req.user = user

        next();

    } catch (error) {
        res.status(500).json({ error: "protectroute.js Internal server error" });
    }

}

module.exports = ProtectRoute;
