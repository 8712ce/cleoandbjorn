const db = require("./")

const seed_chapters = [
    {
        chapter: 1,
        title: "Drops",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPi50Otyf8KSTl9L2om9h4YU5TAP0L2BTuxkBIjeFQUpuV93Z5M5XbnaRQs-upvMGXXsk2iLV38kl5Vg5GFyELNlnZs7E7hBSDLHWs_muuNb-x21LtGi34mlsAWZLvvtbk0ioWfe2vd-Cr0Z6UsMuK5FDla6L8pw5kzLPgQ3TdY-PyKgGjWRrkxB9iNg/s800/001_intro_001.jpg"
    },
    {
        chapter: 2,
        title: "The Painter and the Styrmann",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhf1bzvRIBfot7NuJHp-Ruitr8CgDiIMz1gYiatrJvUHZChAt45ptv7NVtqx7pBWpEWOXJElbxqooB3dJc4wWIja-ka-ygsZ_OLsdmuddzSiXBlS9mRYkm4SFNrqYSkAd-YKjCXa7sXSWZ2sLHIroHi0LNDKENmsEBiKaynxsQZMPbAKnFu4o5rRfygGg/s800/001_intro_067.jpg"
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