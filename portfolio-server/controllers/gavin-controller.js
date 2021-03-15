const HttpError = require("../models/HttpError")
const Gavin = require("../models/Gavin")


const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const signup = async (req, res, next) => {

    const { username, password } = req.body

    let accountExists

    try {
        accountExists = await Gavin.findOne({ username: username })
    } catch (err) {
        const error = new HttpError("couldnt find username", 500)
        return next(error)
    }

    if (accountExists) {
        const error = new HttpError("user exists", 422)
        return next(error)
    }

    let hashedPassword

    try {
        hashedPassword = await bcrypt.hash(password, 12)
    } catch (err) {
        const error = new HttpError("couldnt create password", 500)
        return next(error)
    }

    const createdAccount = new Gavin({
        username,
        password: hashedPassword
    })

    try {
        await createdAccount.save()
    } catch (err) {
        const error = new HttpError("couldnt save user to database", 500)
        return next(error)
    }

    let token
    try {
        token = jwt.sign(
            { userId: createdAccount.id, username: createdAccount.username },
            "dont_share_this",
            { expiresIn: '1h' }
        )
    } catch (err) {
        const error = new HttpError("creating token failed", 500)
        return next(error)
    }

    res.status(201).json({ userId: createdAccount.id, username: createdAccount.username, token: token })

}

const login = async (req, res, next) => {
    const { username, password } = req.body

    let existingAccount

    try {
        existingAccount = await Gavin.findOne({ username: username })
    } catch (err) {
        const error = new HttpError("couldnt find username sorry", 500)
        return next(error)
    }

    if (!existingAccount) {
        const error = new HttpError(
            "this isnt a user",
            401
        )
        return next(error)
    }

    let isValidPassword = false

    try {
        isValidPassword = await bcrypt.compare(password, existingAccount.password)
    } catch (err) {
        const error = new HttpError("password doesnt match", 500)
        return next(error)
    }

    if (!isValidPassword) {
        const error = new HttpError(
            "invalid password",
            403
        )
        return next(error)
    }

    let token

    try {
        token = jwt.sign(
            { userId: existingAccount.id, username: existingAccount.username },
            "dont_share_this",
            { expiresIn: "1h" }
        )
    } catch (err) {
        const error = new HttpError(
            "creating token failed",
            500
        )
        return next(error)
    }


}


exports.signup = signup
exports.login = login