const mongoose = require("mongoose")

const Schema = mongoose.Schema


const gavinSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    questions: [{ type: mongoose.Types.ObjectId, required: true, ref: "Question" }]
})

module.exports = mongoose.model("Gavin", gavinSchema)