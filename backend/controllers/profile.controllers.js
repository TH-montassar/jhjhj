const Profile = require("../models/profile.model");

//to test the route
const updateProfile = async (req, res) => {
  console.info("hello updateProfile ");
  const host = process.env.HOST;
  const port = process.env.PORT;
  const user = req.verifiedUser.profile;
  try {
    const updateProfile = await Profile.findByIdAndUpdate(
      user,
      {
        birthday: req.body.birthday,
        avatar: `${host}:${port}/images/${req.files.avatar[0].filename}`,
        coverPicture: `${host}:${port}/images/${req.files.coverPicture[0].filename}`,
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
  const profileId = req.verifiedUser.profile;
  console.info("testPorfile", profileId);
  try {
    const profile = await Profile.findById(profileId);
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
