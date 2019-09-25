const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hobbySchema = new Schema({
    hobby: {
        type: String,
        required: true
    }
});

const Hobby = mongoose.model("hobbies", hobbySchema);

module.exports = Hobby;
