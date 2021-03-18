const express = require("express")

const questionController = require("../controllers/question-controller")



const router = express.Router()

const checkAuth = require('../middleware/check-auth');

router.get("/:repostid/:questionid", questionController.getRepost)

router.use(checkAuth)

router.post("/submitquestion", questionController.submitAQuestion)

router.get("/getquestions/:uid", questionController.getQuestions)

router.post("/repostaquestion", questionController.repostAQuestion)




module.exports = router