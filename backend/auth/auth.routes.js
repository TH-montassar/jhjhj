const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/user.model");
const Profile = require("../models/profile.model");
const Address = require("../models/address.model");
router.post("/register", async (req, res) => {

    try {
        const user = await User.findOne({
            email: req.body.email
        });
        if (user) {
            return res.status(422).json({
                message: "Email already exist"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: err
        });
    }

    try {
        //generate new password
        const salt = await bcrypt.genSalt(5);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        const newProfile = new Profile();
        const newAddress = new Address();
        const savedProfile = await newProfile.save();
        const savedAddress = await newAddress.save();
        //save user and hash password
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashPassword,
            profile: savedProfile._id,
            address: savedAddress._id,
        });


        const savedUser = await newUser.save();
        return res.status(201).json({
            savedUser: savedUser,
            message: "User created successfully"
        });
    } catch (err) {
        res.status(500).json(`${err.message} ${err.stack} `);
    }
});

//login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        if (!user) return res.status(404).json({
            message: "User not found"
        });
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

        if (!isPasswordValid) return res.status(401).json({
            message: "wrong password or email"
        });
        const accessToken = jwt.sign({
            _id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            isAdmin: user.isAdmin,
        }, process.env.TOKEN_SECRET, {
            expiresIn: "3 days"
        });
        user.token = accessToken;
        return res.status(200).json({
            user: user,
        });
    } catch (error) {
        res.status(500).json(error.message);
    }

});


module.exports = router;