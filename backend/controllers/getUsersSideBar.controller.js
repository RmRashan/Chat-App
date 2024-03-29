const User = require("../models/user.model");

const getUsersSideBar = async  (req, res) => {

 
    try {

        const loggedInUserId = req.user._id;
        const filteruser = await User.find({ _id: {$ne: loggedInUserId }})
        // const filteruser = await User.find().select('-passwordu')

        res.status(200).json(filteruser);

    } catch (error) {
        console.log("Error in getUsersSideBar controller : " + error.message);

        res.status(500).json({ error: "Internal Server Error" });
    }

}




module.exports = getUsersSideBar;