// DEPENDENCIES //
const express = require("express")
const router = express.Router()
const jwt = require("jwt-simple")

// MODELS //
const db = require("../models")
const Chapter = db.Chapters

// NEW (GET/READ) ROUTE: THIS ROUTE RENDERS A FORM THE USER WILL USE TO POST (CREATE) A NEW CHAPTER. //
router.get("/new", (req, res) => {
    res.render("newChapter", {
        tabTitle: "Post a Chapter"
    })
})

// CREATE (POST) ROUTE: THIS ROUTE RECEIVES THE POST REQUEST SENT FROM THE NEW ROUTE ABOVE, PARSES IT INTO A CHAPTER OBJECT, CREATES THE CHAPTER OBJECT AS A DOCUMENT IN THE CHAPTERS COLLECTION, AND REDIRECTS TEH USER BACK TO THE ROOT/HOME PAGE. //
router.post("/", (req, res) => {
    db.Chapter.create(req.body, (err, chapter) => {
        res.redirect("/chapters/show/" + chapter._id)
    })
})

// SHOW (GET/READ) ROUTE: THIS ROUTE WILL SHOW AN INDIVIDUAL CHAPTER DOCUMENT USING THE URL PARAMETER (WHICH WILL ALWAYS BE THE CHAPTER DOCUMENT'S ID). //
router.get("/show/:id", (req, res) => {
    db.Chapter.findById(req.params.id, (err, chapter) => {
        res.render("showChapter", {
            chapter: chapter,
            tabTitle: "Chapter: " + chapter.title
        })
    })
})

// DELETE ROUTE: THIS ROUTE ALLOWS US TO DELETE AN INDIVIDUAL CHAPTER DOCUMENT USING THE URL PARAMETER (WHICH WILL ALWAYS BE THE CHAPTER DOCUMENT'S ID). //
router.delete("/:id", (req, res) => {
    db.Chapter.findByIdAndDelete(req.params.id, (err, chapter) => {
        res.redirect("/")
    })
})

// EDIT (GET/READ) ROUTE: THIS ROUTE RENDERS A FORM THE USER WILL USE TO EDIT (PUT) PROPERTIES OF AN EXISTING CHAPTER. //
router.get("/:id/edit", (req, res) => {
    db.Chapter.findById(req.params.id, (err, book) => {
        res.render("editChapter", {
            chapter: chapter,
            tabTitle: "Edit"
        })
    })
})

// UPDATE (PUT) ROUTE: THIS ROUTE RECEIVES THE PUT REQUEST SENT FROM THE EDIT ROUTE ABOVE, PARSES IT INTO A CHAPTER OBJECT, EDITS THE SPECIFIED CHAPTER OBJECT AS A DOCUMENT IN THE CHAPTERS COLLECTION, AND REDIRECTS THE USER BACK TO THE SHOW PAGE FOR THE UPDATED CHAPTER. //
router.put("/:id", (req, res) => {
    db.Chapter.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err,chapter) => {
        res.redirect("/chapters/show/" + chapter._id)
    })
})

module.exports = router