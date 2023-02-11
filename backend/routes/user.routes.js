const router = require("express").Router();
const User = require("../models/user.model");
router.param("user", async (req, res, next, id) => {
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        } else {
            req.user = user;
            next();
        }

    } catch (error) {
        return res.status(500).json({
            message: error
        });

    }

    router.put("/:user", updateInfo);


});
//router.get("/", );
module.exports = router;