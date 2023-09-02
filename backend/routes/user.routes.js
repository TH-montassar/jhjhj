/**
 * @swagger
 * tags:
 *   - name: User
 *     description: Operations related to users
 * /
/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Create a new user.
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserRequestBody'
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse'
 */
/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login as a user.
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserResponse'
 */
const router = require("express").Router();
const {
  updateInfo,
  register,
  login,
} = require("../controllers/user.controller");
const User = require("../models/user.model");
router.param("user", async (req, res, next, id) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
});

router.put("/:user", updateInfo);
router.post("/register", register);
router.post("/login", login);
module.exports = router;
