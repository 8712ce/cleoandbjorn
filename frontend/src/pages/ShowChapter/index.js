// DEPENDENCIES //
import React from "react";
import { Link } from "react-router-dom";
import EditChapter from "../../components/EditChapter";

// IMAGES //


// STYLES //
import "./showChapter.css";

export default function ShowChapter({ chapter }) {
    return (
        <div>

            <h1 className="page_title">Chapter {chapter.number}: {chapter.title}</h1>

            {/* <img src={chapter.images}/> */}

            {chapter.images.map((imageURL, index) => (
                <img key={index} src={imageURL} alt={`Image ${index + 1}`} />
            ))}




            <Link className="card_link" to="/chaptersPage">Return to Chapters List</Link>

            <Link className="button" to="/">Home</Link>

            <EditChapter />

        </div>
    )
}




// chapter: { type: Number, required: true },
//         title: { type: String, required: true },
//         thumbnail: { type: String, required: true },
//         images: