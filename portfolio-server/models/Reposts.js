const mongoose = require("mongoose")


const Schema = mongoose.Schema

const repostSchema = new Schema({
    question: { type: mongoose.Types.ObjectId, required: true, ref: "Question" },
    answer: { type: String, required: true },
    gavin: { type: mongoose.Types.ObjectId, required: true, ref: "Gavin" }

})

module.exports = mongoose.model("Repost", repostSchema)