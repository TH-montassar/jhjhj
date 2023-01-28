const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    lastName: {
        type: String,
        min: 3,
        max: 20
    },
    number: {
        type: Number,
        default: 0000,
        min: 8,
        max: 8
    },
    email: {
        type: String,
        unique: true,
        index: true,
        lowercase: true,
        required: true,
        min: 10,
        max: 50
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 20,

    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});
module.exports = mongoose.model("User", UserSchema);