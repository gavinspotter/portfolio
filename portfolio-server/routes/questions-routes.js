const express = require("express")

const questionController = require("../controllers/question-controller")



const router = express.Router()

const checkAuth = require('../middleware/check-auth');



router.post("/submitquestion", questionController.submitAQuestion)


module.exports = router