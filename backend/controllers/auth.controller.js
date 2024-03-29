const bcryptjs = require('bcryptjs')
const User = require("../models/user.model");
const genartetken = require('../utils/genarateToken');


const login = async (req, res) => {
    // console.log(req) 

    try {

        const { username, password } = await req.body;

        const user = await User.findOne({ username })
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "user name or password incurrect" });

        }


        genartetken(user._id, res)

        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic
        })






    } catch (error) {
        console.log("login controller" + error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }


}


const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmpassword, gender } = await req.body;

        if (password !== confirmpassword) {
            return res.status(400).json({ error: "password does not match" })
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "Username alredy exists" })
        }

        //Hash Password

        const salt = await bcryptjs.genSalt(10);
        const hashedpassword = await bcryptjs.hash(password, salt)



        const boyprofilepic = 'https://api.dicebear.com/7.x/adventurer/svg?seed=Felix'
        const girlprofilepic = 'https://api.dicebear.com/7.x/adventurer/svg?seed=Felix'


        const newUser = new User({
            fullname,
            username,
            password: hashedpassword,
            gender,
            profilePic: gender === "male" ? boyprofilepic : girlprofilepic

        })

        if (newUser) {

            await genartetken(newUser._id, res)
            await newUser.save();
            res.status(200).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic
            })

        } else {
            res.status(400).json({ error: "Invalid user Data" });
        }


    } catch (error) {
        console.log("signup controller" + error);
        res.status(500).json({ error: "Internal Server Error" });
    }


}

const logout = (req, res) => {


    try {

        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ message: "Loged out successfully" });

    } catch (error) {
        console.log("login controller" + error);
        res.status(500).json({ error: "Internal Server Error" });
    }

}




module.exports = { login, signup, logout };