const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const gavinRoutes = require("./routes/gavin-routes")

const questionRoutes = require("./routes/questions-routes")


const app = express()

app.use(bodyParser.json())


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

    next();
});


app.use("/api/gavin", gavinRoutes)

app.use("/api/questions", questionRoutes)



app.use((req, res, next) => {
    const error = new HttpError("could not find this route", 404);
    throw error;
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || "an unknown error occured" });
});


mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.d3tnt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    )
    .then(() => {
        app.listen(process.env.PORT || 5000);
    })
    .catch((err) => {
        console.log(err);
    });