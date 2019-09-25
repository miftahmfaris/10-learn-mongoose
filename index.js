require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const db = require("./connection");

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/hobbies", require("./routes/hobbies"));
app.use("/users", require("./routes/user"));

if (db) {
    app.listen(PORT, () => {
        console.log(`This app listen in PORT: ${PORT}`);
    });
}
