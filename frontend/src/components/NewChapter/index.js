// DEPENDENCIES //
import { createChapter } from "../../utils/api";
// import axios from "axios";
import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom";
// import { ReactDOM } from "react";
// import ReactDOM from 'react-dom/client';

// IMAGES //
import fusion from "../../assets/fusion_icon.png";

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
        <div id="comp_card" className="nc">

            <img className="fusion" src={fusion} alt="nuclear fusion icon" />

            <h1 className="card_title">New Chapter</h1>

            <div>
                <form onSubmit={handleSubmit} className="createForm">

                        <label className="nc_form">Chapter Number:</label>
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
                            type="file"
                            id="thumbnail"
                            name="thumbnail"
                            placeholder="Thumbnail Image"
                            onChange={handleChange}
                            value={formState.thumbnail || ""}
                            required />

                        

                        <label>Chapter Images:</label>
                        <input
                            type="file"
                            multiple
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

