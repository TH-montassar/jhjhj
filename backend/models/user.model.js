const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 5,
      unique: true,
    },
    lastName: {
      type: String,
      minlength: 5,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      index: true,
      lowercase: true,
      required: true,
      min: 10,
      max: 100,
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
      ref: "Address",
    },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
    token: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", UserSchema);
/**
 * @swagger
 * tags:
 *   - name: User
 *     description: Operations related to users
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           minLength: 5
 *         lastName:
 *           type: string
 *           minLength: 5
 *         email:
 *           type: string
 *           format: email
 *         password:
 *           type: string
 *           minLength: 6
 *           maxLength: 20
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - password
 *
 *
 */
