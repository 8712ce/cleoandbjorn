// DEPENDENCIES //
import React from "react";
import { Link } from "react-router-dom";

// IMAGES //
import fusion from "../../assets/fusion_icon.png";


// STYLES //
import "./about.css";

export default function About() {
    return (
        <div id="about">

            <img className="fusion" src={fusion} alt="nuclear fusion icon" />

            <h1>About</h1>

            {/* <p className="comp_about_text">MEDIUM | Graphic Novel</p>

            <p className="comp_about_text">GENRE | Dark Fantasy, Science Fiction, STEAMpunk, Whimsycore</p>

            <p className="comp_about_text">AGE LEVEL | 17+</p> */}

            <p className="comp_about_text">The year is 2096.  In a remote desert, bankrupt Victoria and her army of obsolete androids are preparing to hunt the child who she holds responsible for her deplorable station in life.  Thankfully, Cleo, the introverted 10-year-old, and her naïve, kid brother, Bjørn, have inherited telekinetic abilities through generations of genetic engineering.  Life is cozy in their northern utopia until Cleo begins having an indescribable premonition...</p>

            <Link className="card_link" to="/aboutPage">Click Here to Read More</Link>

        </div>
    )
}