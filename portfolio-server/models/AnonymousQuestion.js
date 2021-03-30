const mongoose = require("mongoose")

const Schema = mongoose.Schema

const questionSchema = new Schema({
    question: { type: String, required: true },
    gavin: { type: mongoose.Types.ObjectId, required: true, ref: "Gavin" },
    repost: { type: mongoose.Types.ObjectId, required: true, ref: "Repost" }
})

module.exports = mongoose.model("Question", questionSchema)