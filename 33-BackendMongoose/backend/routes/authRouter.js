const express = require("express")
const router = express.Router()
const postController = require("../controllers/authController")

router.post("/register", postController.register)
router.post("/login", postController.login)

module.exports = router