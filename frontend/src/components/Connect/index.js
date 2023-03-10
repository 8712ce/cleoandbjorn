// DEPENDENCIES //
import React, { useState } from "react";
import { Link } from "react-router-dom";

// IMAGES //
import fusion from "../../assets/fusion_icon.png"
import insta from "../../assets/instagram_logo.jpeg";
import webToon from "../../assets/webtoon_logo.jpeg";


// STYLES //
import "./connect.css";

export default function Connect() {

    return (
        <div id="connect">

            <img className="fusion" src={fusion} alt="nuclear fusion icon" />

            <h1>Connect</h1>

            <p className="connect_text center">For any questions or inquiries, you can send e-mails to 8712ce@gmail.com</p>
            <p className="connect_text light center">I wish I could reply to all e-mails, but because I am communicating with you from approximately 100 years in the future, I am just not able to stay on top of them.  I am sorry in advance.</p>

            <a href="https://www.instagram.com/cleoandbjorn" target="_blank"><img className="social_media" src={insta} alt="Cleo's drawing of the Instagram logo" /></a>

            <a href="https://www.webtoons.com/en/challenge/cleo-bjorn/list?title_no=698587&webtoon-platform-redirect=true" target="_blank"><img className="social_media" src={webToon} alt="Cleo's drawing of the WebToon logo" /></a>

        </div>
    );
}