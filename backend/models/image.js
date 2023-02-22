// DEPENDENCIES //
const mongoose = require("mongoose")
const Schema = mongoose.Schema

// CREATE AN IMAGE SCHEMA //
const imageSchema = new Schema(
    {
        url: { type: String }
    }
)

// CREATE AN IMAGE MODEL USING THE IMAGE SCHEMA //
const Image = mongoose.model("Image", imageSchema)

// EXPORT THE IMAGE MODEL, WILL BE ACCESSED IN "INDEX.JS" //
module.exports = Image