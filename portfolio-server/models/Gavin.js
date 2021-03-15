const mongoose = require("mongoose")

const Schema = mongoose.Schema


const gavinSchema = {
    username: { type: String, required: true },
    password: { type: String, required: true }
}