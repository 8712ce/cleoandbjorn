// DEPENDENCIES //
import React from "react";
import { Link } from "react-router-dom";

// IMAGES //
import cozy from "../../assets/c_b_cozy.jpg";
import NewChapter from "../../components/NewChapter";

// STYLES //
import "./chaptersPage.css";

export default function ChaptersPage({ chapters, getChapter }) {
    return (
        <div id="chaptersPage">

            <h1 className="card_title">Chapters</h1>

            <div>
                {chapters && chapters.map((chapter, i) => {

                    return (

                        <div className='chapters' key={i}>
                            <Link
                                onClick={() => getChapter(chapter._id)}
                                to={`/chapter/${chapter._id}`}>
                                {chapter.name}
                            </Link>
                        </div>
                    )
                })}
            </div>

            <NewChapter />

            <Link className="button" to="/">Home</Link>

        </div>
    )
}