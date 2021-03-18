const HttpError = require("../models/HttpError")

const Question = require("../models/AnonymousQuestion")

const Gavin = require("../models/Gavin")

const Repost = require("../models/Reposts")


const submitAQuestion = async (req, res, next) => {

    const { question } = req.body

    const newQuestion = new Question({
        question,
        gavin: req.userData.userId
    })

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

    try {
        await newQuestion.save()
    } catch (err) {
        const error = new HttpError("couldnt save question", 500)
        return next(error)
    }

    try {
        gavin.questions.push(newQuestion)
    } catch (err) {
        const error = new HttpError("couldnt add question to array", 500)
        return next(error)
    }

    try {
        await gavin.save()
    } catch (err) {
        const error = new HttpError("couldnt save gavin data", 500)
        return next(error)
    }

    res.status(201).json({ question: newQuestion })

}

const getQuestions = async (req, res, next) => {

    const userId = req.params.uid

    let questions

    try {
        questions = await Question.find({ gavin: userId })
    } catch (err) {
        const error = new HttpError("couldnt find user", 500)
        return next(error)
    }

    if (!questions || questions.length === 0) {
        return next(new HttpError("couldnt find any questions"))
    }

    res.json({ questions })

}

const repostAQuestion = async (req, res, next) => {


    const { answer, question } = req.body

    let gavin

    try {
        gavin = await Gavin.findById(req.userData.userId)
    } catch (err) {
        const error = new HttpError("couldnt verify token", 500)
        return next(error)
    }

    const repost = {
        question: question,
        answer: answer
    }

    try {
        gavin.reposts.push(repost)
    } catch (err) {
        const error = new HttpError("couldnt add to database", 500)
        return next(error)
    }


    try {
        await gavin.save()
    } catch (err) {
        const error = new HttpError("couldnt save to database", 500)
        return next(error)
    }

    res.json({ repost })


}

const getRepost = async (req, res, next) => {

    const questionId = req.params.questionid

    const repostId = req.params.repostid

    const gavinId = req.params.gavinid

    // let question

    // try {
    //     question = Question.findById(questionId)
    // } catch (err) {
    //     const error = new HttpError("couldnt find question by id", 500)
    //     return next(error)
    // }

    // if (!questions || questions.length === 0) {
    //     return next(new HttpError("couldnt find any questions"))
    // }

    let repost

    try {
        repost = Gavin.findById()
    } catch (err) {
        const error = new HttpError("couldnt find repost by id", 500)
        return next(error)
    }

    // let question

    // try {
    //     question = Question.findById(repost.reposts.question)
    // } catch (err) {
    //     const error = new HttpError("couldnt find question by id", 500)
    //     return next(error)
    // }

    res.json({ repost })




}

exports.getRepost = getRepost
exports.repostAQuestion = repostAQuestion
exports.getQuestions = getQuestions
exports.submitAQuestion = submitAQuestion