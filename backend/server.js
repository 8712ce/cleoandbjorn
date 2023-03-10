// DEPENDENCIES //
const express = require("express")
const app = express()
const cors = require("cors")
const passport = require("./config/passport")()
require("dotenv").config()
const port = process.env.PORT
const methodOverride = require("method-override");
const path = require("path")

// ACCESS MODELS //
const db = require("./models")

// ACCESS CONTROLLERS //
const chaptersCtrl = require("./controllers/chapters")
const imagesCtrl = require("./controllers/images")
const usersCtrl = require("./controllers/users")





// MIDDLEWARE //

// CORS ALLOWS THE FRONTEND TO COMMUNICATE WITH THE BACKEND //
app.use(cors())

// USE THE REACT BUILD FOLDER FOR STATIC FILES //
// app.use(express.static(path.join(path.dirname(__dirname), "frontend", "build")))

// BODY PARSER: USED FOR POST/PUT/PATCH ROUTES: THIS WILL TAKE INCOMING STRINGS FROM TEH BODY THAT ARE URL ENCODED AND PARSE TEHM INTO AN OBJECT THAT CAN BE ACCESSED IN THE REQUEST PARAMETER AS A PROPERTY CALLED BODY (REQ.BODY). //
app.use(express.urlencoded({ extended: true }));

app.use(express.json())
app.use(passport.initialize())





// ROUTES //

// ALL ROUTES AFFECTING THE CHAPTER MODEL: THIS TELLS THE APP TO LOOK AT THE "CONTROLLERS/CHAPTERS.JS" FILE TO HANDLE ALL ROUTES THAT BEGIN WITH "LOCALHOST:8000/CHAPTER." //
app.use("/chapters", chaptersCtrl)

// ALL ROUTES AFFECTING THE IMAGES MODEL: THIS TELLS THE APP TO LOOK AT THE "CONTROLLERS/IMAGE.JS" FILE TO HANDLE ALL ROUTES THAT BEGIN WITH "LOCALHOST:8000/IMAGE." //
app.use("/images", imagesCtrl)

// ALL ROUTES AFFECTING THE USER MODEL: THIS TELLS THE APP TO LOOK AT THE "CONTROLLERS/USER.JS" FILE TO HANDLE ALL ROUTES THAT BEGIN WITH "LOCALHOST:8000/USER" //
app.use("/users", usersCtrl)

// ANY OTHER ROUTE NOT MATCHING THE ROUTES ABOVE GETS ROUTED BY REACT //
app.get("*", (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), "frontend", "build", "index.html"));
})





// LISTENER //
app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`)
})