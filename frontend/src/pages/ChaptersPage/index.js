// DEPENDENCIES //
import React from "react";
import { Link } from "react-router-dom";

// IMAGES //
import cozy from "../../assets/c_b_cozy.jpg";

// STYLES //
import "./chaptersPage.css";

export default function ChaptersPage() {
    return (
        <div id="chaptersPage">

            <h1>Chapters</h1>

            <Link className="button" to="/">Home</Link>
            <Link className="button" to="/">Post New Chapter</Link>

        </div>
    )
}