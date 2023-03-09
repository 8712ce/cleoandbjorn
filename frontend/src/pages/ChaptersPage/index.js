// DEPENDENCIES //
import React from "react";
import { Link } from "react-router-dom";

// IMAGES //
import cozy from "../../assets/c_b_cozy.jpg";

// STYLES //
import "./chaptersPage.css";

export default function ChaptersPage({ chapters, getChapter }) {
    return (
        <div id="chaptersPage">

            <h1>Chapters</h1>

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

            <Link className="button" to="/">Home</Link>
            <Link className="button" to="/newChapter">Post New Chapter</Link>

        </div>
    )
}