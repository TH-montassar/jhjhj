const {
  getProfile,
  updateProfile,
} = require("../controllers/profile.controllers");
const { verifyToken } = require("../middlewares");

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

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
  // limits: {
  //   fileSize: 500000,
  // },
});

router.put(
  "/updateProfile",
  verifyToken,
  upload.single("avatar"),
  updateProfile
);
module.exports = router;

/**
 * @swagger
 * /api/profile/getProfile:
 *   get:
 *     summary: Get user profile
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: Successfully retrieved user profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       500:
 *         description: Internal server error
 *
 *
 * /api/profile/updateProfile:
 *   put:
 *     summary: Update user profile
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: Successfully updated user profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       500:
 *         description: Internal server error
 */
