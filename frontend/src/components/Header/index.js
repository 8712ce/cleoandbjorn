// DEPENDENCIES //
import React from "react";
// import { Link } from "react-scroll";

// IMAGES //
import logo from "../../assets/c_b_logo.png";

// STYLES //
import "./header.css";

export default function Header() {
    return (
        <div id="header">

            <img className="overlay" src={logo} alt="Cleo and Bjorn Logo" />

            <p>The year was 2096...</p>


        </div>
    )
}