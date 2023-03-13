// DEPENDENCIES //
import React from "react";
import { Link } from "react-router-dom";

// IMAGES //
import fusion from "../../assets/fusion_icon.png";


// STYLES //
import "./chapters.css";

export default function Chapters() {
    return (
        <div id="comp_card">

            <img className="fusion" src={fusion} alt="nuclear fusion icon" />

            <h1 className="card_title">Chapters</h1>

            <p className="comp_chapter_text">Are you ready to curl up in your coziest place with a story that promises to take you on a thrilling journey filled with mystery and intrigue? As you scroll through the pages, allow yourself to get lost in the forest with the enigmatic characters. Hopefully, you will find yourself more and more engrossed in the story, eager to uncover its secrets and see where it will lead you next. So go ahead, settle in for a reading experience that will leave you yearning for an existence beyond that which we've ever known.</p>

            <p className="comp_chapter_text light center">Sensitive Content Warning: This story contains depictions of human cruelty.</p>

            <Link className="card_link" to="/chaptersPage">I Am 17+ Years Old</Link>

        </div>
    )
}