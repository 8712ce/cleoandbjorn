// DEPENDENCIES //
const express = require("express")
const router = express.Router()
const jwt = require("jwt-simple")

// CONFIGS //
const passport = require("../config/passport")
const config = require("../config/config")

// MODELS //
const db = require("../models")
const User = db.User

// LOG IN ROUTE: FIND BY EXISTING USER //
router.post("/login", async (req, res) => {
    // ATTEMPT TO FIND THE USER BY THEIR USERNAME IN THE DATABASE //
    const foundUser = await User.findOne({ username: req.body.username })
    // CHECK TO:
    // 1. MAKE SURE THE USER WAS FOUND IN THE DATABASE
    // 2. MAKE SURE THE USER ENTERED IN THE CORRECT PASSWORD
    if (foundUser && foundUser.password === req.body.password) {
        // IF THE ABOVE APPLIES, SEND THE JWT TO THE BROWSER //
        const payload = { id: foundUser.id }
        const token = jwt.encode(payload, config.jwtSecret)
        res.json({
            token: token,
            user: foundUser
        })
        // IF THE USER WAS NOT FOUND IN THE DATABASE OR THEIR PASSWORD WAS INCORRECT, SEND AN ERROR //
    } else {
        res.sendStatus(401)
    }
})

// GET USER DATA (IF USER IS LOGGED IN) //
router.get("/", async (req, res) => {
    const token = req.headers.authorization
    const decode = jwt.decode(token, config.jwtSecret)
    const foundUser = await db.User.findById(decode.id)
    res.json(foundUser)
})

module.exports = router;