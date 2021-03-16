const HttpError = require("../models/HttpError")

const Question = require("../models/AnonymousQuestion")

const Gavin = require("../models/Gavin")


const submitAQuestion = async (req, res, next) => {

    const { question } = req.body

    let gavin

    try {
        gavin = await Gavin.findById(req.userData.userId)
    } catch (err) {
        const error = new HttpError("couldnt find your id", 500)
        return next(error)
    }

    if (!gavin) {
        const error = new HttpError("couldnt find gavin", 404)
        return next(error)
    }

}


exports.submitAQuestion = submitAQuestion