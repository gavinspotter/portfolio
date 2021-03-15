const express = require("express")

const questionController = require("../controllers/question-controller")


const router = express.Router()

router.post("/submitquestion", questionController.submitAQuestion)


module.exports = router