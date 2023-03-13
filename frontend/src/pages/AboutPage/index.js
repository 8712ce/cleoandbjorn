// DEPENDENCIES //
import React from "react";
import { Link } from "react-router-dom";

// IMAGES //
import cozy from "../../assets/c_b_cozy.jpg";

// STYLES //
import "./aboutPage.css";

export default function AboutPage() {
    return (
        <div id="aboutPage">

            <img className="cozy" src={cozy} alt="Cleo drawing on her tablet and Bjorn reading her book" />

            <h1 className="card_title">About</h1>

            <p className="about_text">MEDIUM | Graphic Novel</p>

            <p className="about_text">GENRE | Dark Fantasy, Science Fiction, STEAMpunk, Whimsycore</p>

            <p className="about_text">AGE LEVEL | 17+</p>

            <p className="about_text">The year is 2096.  In a remote desert, bankrupt Victoria and her army of obsolete androids are preparing to hunt the child who she holds responsible for her deplorable station in life.  Thankfully, Cleo, the introverted 10-year-old, and her naïve, kid brother, Bjørn, have inherited telekinetic abilities through generations of genetic engineering.  Life is cozy in their northern utopia until Cleo begins having an indescribable premonition.</p>

            <p className="about_text">To assuage her daughter’s anxiety, Mamma takes Cleo on “raids” to demonstrate how their powers can be used for more than entertainment.  On a night illuminated by a long sunset, Cleo discovers her mother is a feared vigilante, often tasked with defending their way of life from their human ancestors.  A cohort of villains from Mamma's past are thwarted by the mother daughter team, and although this first mission doesn’t go as planned, Mamma becomes even more of a hero to her children.</p>

            <p className="about_text">So, with the help of their swashbuckling mother, sage father, fearless cousins, vengeful Aunt Silje, and mischievous “Grammy,” Cleo and Bjørn will lead a quest through the taiga to defeat Victoria while learning several lessons of their own.</p>

            <Link className="button" to="/">Home</Link>

        </div>
    )
}