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

            {/* <p>On page load, make title fade from 0 to 1 over a second or two!</p> */}


        </div>
    )
}