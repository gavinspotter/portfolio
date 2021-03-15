const HttpError = require("../models/HttpError")
const Gavin = require("../models/Gavin")



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

}

const login = async (req, res, next) => { }


exports.signup = signup
exports.login = login