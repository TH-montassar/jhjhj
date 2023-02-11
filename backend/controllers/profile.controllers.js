const Profile = require("../models/profile.model");
const getProfile = async (req, res) => {
    const user = req.user.profile;
    try {
        const profile = await Profile.findById(user);
        return res.status(200).json({
            profile
        });

    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }
}

module.exports.getProfile = getProfile;