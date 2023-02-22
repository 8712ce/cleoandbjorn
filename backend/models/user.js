// DEPENDENCIES //
const mongoose = require("mongoose")
const Schema = mongoose.Schema

// CREATE A USER SCHEMA //
const userSchema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true }
    }
)

// CREATE A USER MODEL USING THE USER SCHEMA //
const User = mongoose.model("User", userSchema)

// EXPORT THE USER MODEL, WILL BE ACCESSED IN "INDEX.JS" //
module.exports = User