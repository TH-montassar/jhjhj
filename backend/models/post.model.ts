const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    content: {
      type: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    media: [],
    /*  post: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Post",
     }, */
  },
  {
    timestamps: true,
  }
);
// Compile model from schema
module.exports = mongoose.model("Post", PostSchema);
