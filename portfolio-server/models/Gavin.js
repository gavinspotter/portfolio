const mongoose = require("mongoose")

const Schema = mongoose.Schema

const repostSchema = new Schema({
    question: { type: mongoose.Types.ObjectId, required: true, ref: "Question" },
    answer: { type: String, required: true }
})


const gavinSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    questions: [{ type: mongoose.Types.ObjectId, required: true, ref: "Question" }],
    respots: [repostSchema]
    // reposts: [{ type: mongoose.Types.ObjectId, required: true, ref: "Repost" }]
})

module.exports = mongoose.model("Gavin", gavinSchema)