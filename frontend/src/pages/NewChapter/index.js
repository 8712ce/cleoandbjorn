// DEPENDENCIES //
import { createChapter } from "../../utils/api";
// import axios from "axios";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
// import { ReactDOM } from "react";
// import ReactDOM from 'react-dom/client';

// STYLES //
import "./newChapter.css"

export default function NewChapter({setChapter}) {

    // STATE //
    const [formState, setFormState] = useState({})
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        createChapter(formState).then(data => {
            setChapter(data)
            navigate("/showChapter")
        });
    };

    function handleChange(event) {
        setFormState({ ...formState, [event.target.id]: event.target.value })
    };

    return (
        <div className="body">
            <div>
                <h1 className="main_text">New Chapter</h1>
            </div>

            <div id="offspring">
                <form onSubmit={handleSubmit} className="createForm">

                        <label>Chapter Number:</label>
                        <input
                            type="number"
                            id="chapter"
                            name="chapter"
                            placeholder="Chapter Number"
                            onChange={handleChange}
                            value={formState.chapter || ""}
                            required />



                        <label>Chapter Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Chapter Title"
                            onChange={handleChange}
                            value={formState.title || ""}
                            required />



                        <label>Thumbnail Image:</label>
                        <input
                            type="text"
                            id="thumbnail"
                            name="thumbnail"
                            placeholder="Thumbnail Image"
                            onChange={handleChange}
                            value={formState.thumbnail || ""}
                            required />

                        

                        <label>Chapter Images:</label>
                        <input
                            type="text"
                            id="images"
                            name="images"
                            placeholder="Chapter Images"
                            onChange={handleChange}
                            value={formState.images || ""}
                            required />

                    <button className="button" type="submit">Create Chapter</button>

                </form>
            </div>
        </div>

    )
}

