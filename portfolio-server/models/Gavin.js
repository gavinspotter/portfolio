const mongoose = require("mongoose")

const Schema = mongoose.Schema


const gavinSchema = Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
})

module.exports = mongoose.model("Gavin", gavinSchema)