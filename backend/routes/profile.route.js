/**
 * @swagger
 * tags:
 *   - name: Profile
 *     description: Operations related to user profiles
 * /
/**
 * @swagger
 * /api/profile:
 *   get:
 *     summary: Get user profile.
 *     tags:
 *       - Profile
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProfileResponse'
 */

const { getProfile } = require("../controllers/profile.controllers");

const router = require("express").Router();

router.param("profile", async (req, res, next, id) => {
  try {
    const profile = await Profile.findById(id);
    if (!profile) {
      return res.status(404).json({
        message: "profile not found",
      });
    } else {
      req.profile = profile;
      next();
    }
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
});

router.get("/profile", getProfile);
module.exports = router;
