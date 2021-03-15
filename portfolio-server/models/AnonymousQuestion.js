const mongoose = require("mongoose")

const Schema = mongoose.Schema

const questionSchema = new Schema({
    question: { type: String, required: true },
    gavin: { type: mongoose.Types.ObjectId, required: true, ref: "Gavin" }
})