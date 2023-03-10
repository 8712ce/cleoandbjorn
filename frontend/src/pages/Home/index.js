// DEPENDENCIES //
import React, { useState } from "react";
import { Link } from "react-router-dom";

// COMPONENTS //
import Header from "../../components/Header";
import About from "../../components/About";
import Chapters from "../../components/Chapters";
import Connect from "../../components/Connect";
import Yawn from "../../components/Yawn";
import Footer from "../../components/Footer";

// IMAGES //


// STYLES //
import "./home.css";

export default function Home() {

    const [showComponent, setShowComponent] = useState(null);

    return (
        <div id="home">
            <Header />

            <div>
                <h1>Follow the Pixies into the Forest</h1>

                <p className="important_text">"Our similarities are undeniable. We share a deep need for companionship, and crave the warmth and tenderness of love. It fills me with pride to acknowledge these fundamental human desires that we share."</p>
                <p className="body_text credit">- Pappa</p>
            </div>

            <About />

            <Chapters />

            <Connect />

            <Yawn />
            
            <Footer />
        </div>
    )
}