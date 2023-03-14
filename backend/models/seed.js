const db = require("./")

const seed_chapters = [
    {
        number: 1,
        title: "Drops",
        thumbnail: "",
        images: ""
    },
    {
        number: 2,
        title: "The Painter and the Styrmann"
    },
    {
        number: 3,
        title: "The Year Was 2096"
    },
    {
        number: 4,
        title: "Clockwork"
    },
    {
        number: 5,
        title: "Tele-Cares"
    },
    {
        number: 6,
        title: "Rainbows & Lollipops"
    },
    {
        number: 7,
        title: "Trashy YA Novel"
    }
]

db.Chapter.deleteMany({}, (err, chapters) => {
    if (err) {
        console.log("Error occured in remove", err)
    } else {
        console.log("Removed all chapters")

        db.Chapter.insertMany(seed_chapters, (err, chapters) => {
            if (err) {
                console.log("Error occured in insertMany", err)
            } else {
                console.log("Created", chapters.length, "chapters")
            }
        })
    }
})