const Profile = require("../models/profile.model");

//to test the route
const updateProfile = async (req, res) => {
  const host = process.env.HOST;
  const port = process.env.PORT;
  const user = req.verifiedUser.profile;
  try {
    const updateProfile = await Profile.findByIdAndUpdate(
      user,
      {
        birthday: req.body.birthday,
        avatar: `${host}:${port}/images/${req.file.filename}`,
        coverPicture: `${host}:${port}/images/${req.file.filename}`,
        bio: req.body.bio,
        number: req.body.number,
        RelationshipStatus: req.body.RelationshipStatus,
      },
      {
        new: true,
      }
    );
    return res.status(200).json(updateProfile);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getProfile = async (req, res) => {
  const user = req.user.profile;
  try {
    const profile = await Profile.findById(user);
    return res.status(200).json({
      profile,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

module.exports.getProfile = getProfile;
module.exports.updateProfile = updateProfile;
