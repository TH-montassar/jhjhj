const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 5,
        unique: true,
    },
    lastName: {
        type: String,
        minlength: 5,
        required: true
    },

    email: {
        type: String,
        unique: true,
        index: true,
        lowercase: true,
        required: true,
        min: 10,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 20,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    },
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile"
    },
    token: {
        type: String
    }
}, {
    timestamps: true,
});
module.exports = mongoose.model("User", UserSchema);