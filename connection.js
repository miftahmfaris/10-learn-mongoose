const mongoose = require("mongoose");
const DATABASE = process.env.DATABASE || "mongodb://localhost/test";

mongoose
    .connect(DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("Connected to database");
    })
    .catch(error => {
        console.log("There is some problem", error);
    });

const db = mongoose.connection;

module.exports = db;
