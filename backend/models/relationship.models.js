const mongoose = require("mongoose");

const RelationshipSchema = new mongoose.Schema({
    status: {
        type: String,
        enum: ["friends", "blocked", "requested"],
        default: "requested",
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
}, {
    timestamps: true
});
module.exports = mongoose.model("Relationship", RelationshipSchema);