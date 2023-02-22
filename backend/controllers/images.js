// DEPENDENCIES //
const db = require("../models")
const express = require("express")
const router = express.Router()

// NEW (GET/READ) ROUTE: THIS ROUTE RENDERS A FORM THE USER WILL USE TO POST (CREATE) A NEW IMAGE. //
router.get("/new", (req, res) => {
    res.render("newImage", {
        tabTitle: "Post an Image"
    })
})

// CREATE (POST) ROUTE: THIS ROUTE RECEIVES THE POST REQUEST SENT FROM TEH NEW ROUTE ABOVE, PARSES IT INTO AN IMAGE OBJECT, CREATES THE IMAGE OBJECT AS A DOCUMENT IN THE IMAGES COLLECTION, AND REDIRECTS THE USER TO THE SHOW PAGE FOR THE NEW IMAGE THAT WAS CREATED. //
router.post("/", (req, res) => {
    db.Image.create(req.body, (err, image) => {
        res.redirect("/images/show" + image._id)
    })
})

// SHOW (GET/READ) ROUTE: THIS ROUTE WILL SHOW AN INDIVIDUAL IMAGE DOCUMENT USING THE URL PARAMETER (WHICH WILL ALWAYS BE THE IMAGE DOCUMENT'S ID). //
router.get("/show/:id", (req, res) => {
    db.Image.findById(req.params.id, (err, movie) => {
        res.render("showImage", {
            image: image
        })
    })
})

// DELETE ROUTE: THIS ROUTE ALLOWS US TO DELELTE AND INDIVIDUAL IMAGE DOCUMENT USING THE URL PARAMETER (WHICH WILL ALWAYS BE THE IMAGE DOCUMENT'S ID). //
router.delete("/:id", (req, res) => {
    db.Image.findByIdAndDelete(req.params.id, (err, image) => {
        res.redirect("/")
    })
})

// EDIT (GET/READ) ROUTE: THIS ROUTE RENDERS A FORM TEH USER WILL USE TO EDIT (PUT) PROPERTIES OF AN EXISTING IMAGE. //
router.get("/:id/edit", (req, res) => {
    db.Image.findById(req.params,id, (err, image) => {
        res.render("editImage", {
            image: image,
            tabTitle: "Edit Image"
        })
    })
})

// UPDATE (PUT) ROUTE: THIS ROUTE RECEIVES TEH PUT REQUEST SENT FROM TEH EDIT ROUTE ABOVE, PARESE IN INTO AN IMAGE OBJECT, EDITS TEH SPECIFIED IMAGE OBJECT AS A DOCUMENT IN THE IMAGES COLLECTION, AND REDIRECTS THE USER BACK TO THE SHOW PAGE FOR THE UPDATED IMAGE. //
router.put("/:id", (req, res) => {
    db.Image.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, image) => {
        res.redirect("/images/show/" + image._id)
    })
})

module.exports = router