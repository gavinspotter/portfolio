const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")


const app = express()


app.use(bodyParser.json())

app.use((req, res, next) => {
    const error = new HttpError("could not find this route", 404);
    throw error;
});