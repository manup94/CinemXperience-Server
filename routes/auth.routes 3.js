const router = require("express").Router();

const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const {
    Signup,
    Login,
    Verify
} = require('../controllers/auth.controllers')

router.post("/signup", Signup)
router.post("/login", Login)
router.get("/verify", isAuthenticated, Verify)

module.exports = router







