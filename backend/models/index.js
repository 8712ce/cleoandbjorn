// DEPENDENCIES //
const mongoose = require("mongoose");
require("dotenv").config()
// CONNECT TO MONGODB VIA MONGOOSE //
const connectionString = process.env.MONGO_DB_URI

mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// CONSOLE.LOG() CONNECTION STATUS //
mongoose.connection.on("connected", () => {
    console.log("mongoose connected to ", connectionString);
});

mongoose.connection.on("disconnected", () => {
    console.log("mongoose disconnected to ", connectionString);
});

mongoose.connection.on("error", (error) => {
    console.log("mongoose error ", error);
});

// ACCESS MODELS //
module.exports.Chapter = require("./chapter.js");
module.exports.Image = require("./image.js");
module.exports.User = require("./user.js");