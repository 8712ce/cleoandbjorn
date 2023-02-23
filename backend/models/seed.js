const db = require("./")

const seed_chapters = [
    {
        chapter: 1,
        title: "Drops"
    },
    {
        chapter: 2,
        title: "The Painter and the Styrmann"
    },
    {
        chapter: 3,
        title: "The Year Was 2096"
    },
    {
        chapter: 4,
        title: "Clockwork"
    },
    {
        chapter: 5,
        title: "Tele-Cares"
    },
    {
        chapter: 6,
        title: "Rainbows & Lollipops"
    },
    {
        chapter: 7,
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