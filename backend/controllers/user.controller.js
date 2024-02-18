const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/user.model");
const Profile = require("../models/profile.model");
const Address = require("../models/address.model");

const register = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (user) {
      return res.status(422).json({
        message: "Email already exist",
        status: 422,
      });
    }
    /*generate new password
      it uses await and is non-blocking. This is generally preferable in applications that need to handle many requests concurrently,
      as it allows other tasks to be executed while waiting for the hashing to complete.
    */
    const salt = await bcrypt.genSalt(5);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newProfile = new Profile();
    const newAddress = new Address();
    /* const savedProfile = await newProfile.save();
    const savedAddress = await newAddress.save(); */

    const [savedProfile, savedAddress] = await Promise.all([
      newProfile.save(),
      newAddress.save(),
    ]);
    //save user and hash password
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      //it will block the execution of other code until the hashing is complete.
      //password: bcrypt.hashSync(req.body.password, 10),
      password: hashPassword,
      profile: savedProfile._id,
      address: savedAddress._id,
    });

    const savedUser = await newUser.save();
    return res.status(201).json({
      savedUser: savedUser,
      message: "User created successfully",
      status: 201,
    });
  } catch (err) {
    //res.status(500).json(`message :${err.message}, ${err.stack} `);
    res.status(500).json({
      message: err.message,
      stack: err.stack,
      status: 500,
    });
  }
};
const login = async (req, res) => {
  /*  const enteredPassword = req.body.password;
      const enteredEmail = req.body.password;
  */
  //using object destructuring
  const { password, email } = req.body;

  try {
    const user = await User.findOne({
      email: email,
    });
    if (!user)
      return res.status(404).json({
        message: "wrong password or email",
      });
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({
        message: "wrong password or email",
      });
    const accessToken = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isAdmin: user.isAdmin,
        profile: user.profile,
        address: user.address,
      },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "3 days",
      }
    );
    //user.token = accessToken;
    return res.status(200).json({
      user: user,
      token: accessToken,
      //message: "connect successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const updateInfo = async (req, res) => {};

const authCheck = async (req, res) => {
  try {
    const user = await User.findById(req.verifiedUser._id)
      .populate("address")
      .populate({ path: "profile", select: "avatar birthday " });
    if (!user) {
      return res.status(404).json({ message: "not found User" });
    } else {
      return res.status(200).json(user);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

/* exports.updateInfo = updateInfo;
exports.register = register;
exports.login = login; */
module.exports = {
  updateInfo,
  register,
  login,
  authCheck,
};
