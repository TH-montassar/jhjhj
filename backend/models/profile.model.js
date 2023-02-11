const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    birthday: {
        type: Date,
    },
    avatar: {
        type: String,
        default: "",
    },
    coverPicture: {
        type: String,
        default: "",
    },
    bio: {
        type: String,
    },
    followers: {
        type: Array,
        default: [],
    },
    following: {
        type: Array,
        default: [],
    },
    number: {
        type: Number,
        default: 10000000,
        min: 10000000,
        max: 99999999,
    },
    RelationshipStatus: {
        type: String,
        enum: ["single", "married", "InaRelationshipWith", "complicated"],
        default: "single",
    },
}, {
    timestamps: true,
});
module.exports = mongoose.model("Profile", ProfileSchema);