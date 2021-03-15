const express = require("express")

const gavinController = require("../controllers/gavin-controller")

const router = express.Router()

router.post("/signup", gavinController.signup)

router.post("/login", gavinController.login)

module.exports = router