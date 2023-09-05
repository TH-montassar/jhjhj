const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    birthday: {
      type: Date,
      default: new Date(),
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
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Profile", ProfileSchema);

/**
 * @swagger
 * components:
 *   schemas:
 *     Profile:
 *       type: object
 *       properties:
 *         birthday:
 *           type: string
 *           format: date
 *         avatar:
 *           type: string
 *         coverPicture:
 *           type: string
 *         bio:
 *           type: string
 *         followers:
 *           type: array
 *           items:
 *             type: string
 *         following:
 *           type: array
 *           items:
 *             type: string
 *         number:
 *           type: number
 *           minimum: 10000000
 *           maximum: 99999999
 *         RelationshipStatus:
 *           type: string
 *           enum:
 *             - single
 *             - married
 *             - InaRelationshipWith
 *             - complicated
 *       example:
 *         birthday: 1990-01-01
 *         avatar: "https://example.com/avatar.jpg"
 *         coverPicture: "https://example.com/cover.jpg"
 *         bio: "I love exploring the world!"
 *         followers: ["user1", "user2"]
 *         following: ["user3", "user4"]
 *         number: 12345678
 *         RelationshipStatus: "single"
 */

/**
 * @swagger
 * tags:
 *   - name: Profile
 *     description: Operations related to user profiles
 */

