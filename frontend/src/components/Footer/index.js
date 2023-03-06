// DEPENDENCIES //
import React from "react";
// import { Link } from "react-scroll";

// IMAGES //
import copilots from "../../assets/footer_copilots.jpg";

// STYLES //
import "./footer.css";

export default function Footer() {
    return (
        <div id="footer">

            <img className="copilots" src={copilots} alt="Illustration of two robots, one of which in the form of a rabbit." />


        </div>
    )
}