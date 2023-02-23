// DEPENDENCIES //
const mongoose = require("mongoose")
const Schema = mongoose.Schema

// CREATE A CHAPTER SCHEMA //
const chapterSchema = new Schema (
    {
        chapter: { type: Number, required: true },
        title: { type: String, required: true },
        image: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
        }
    }
)

// CREATE A CHAPTER MODEL USING THE CHAPTER SCHEMA //
const Chapter = mongoose.model("Chapter", chapterSchema)

// EXPORT THE CHAPTER MODEL, WILL BE ACCESSED IN "INDEX.JS" //
module.exports = Chapter