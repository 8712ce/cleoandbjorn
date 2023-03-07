// DEPENDENCIES //
import React from "react";
import { Link } from "react-router-dom";

// IMAGES //


// STYLES //
import "./about.css";

export default function About() {
    return (
        <div id="about">

            <h1>About</h1>

            <p>MEDIUM | Graphic Novel</p>

            <p>GENRE | Dark Fantasy, Illustrated Dreampop, Science Fiction, Whimsycore</p>

            <p>AGE LEVEL | 17+</p>

            <p className="textBody">The year is 2096.  In a remote desert, bankrupt Victoria and her army of obsolete androids are preparing to hunt the child who she holds responsible for her deplorable station in life.  Thankfully, Cleo, the introverted 10-year-old, and her naïve, kid brother, Bjørn, have inherited telekinetic abilities through generations of genetic engineering.  Life is cozy in their northern utopia until Cleo begins having an indescribable premonition.</p>

            <Link to="/aboutPage">Click Here to Read More</Link>

        </div>
    )
}