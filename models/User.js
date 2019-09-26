const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String },
    pathImage: { type: String },
    hobbies: [
        {
            type: Schema.Types.ObjectId,
            ref: "hobbies"
        }
    ]
});

const User = mongoose.model("users", userSchema);

module.exports = User;
