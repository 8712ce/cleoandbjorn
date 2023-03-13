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

            <div className="credits">
                <p className="credit_text small">Cleo & Bjorn™</p>
                <p className="credit_text small">Written and Illustrated by David Milton</p>

                <p className="credit_text small">Website Designed and Built by David Milton</p>

                <p className="footer_text light small">© 2020, 2021, 2022, 2023  David Milton.  All rights reserved.  Cleo & Bjørn, the Cleo & Bjørn logo, and all characters featured herein and the distinctive likenesses thereof and all related elements are trademarks of David Milton.  No portion of this publication may be reproduced or transmitted, in any form or by any means, without the express written permission of David Milton.</p>
            </div>


            <img className="copilots" src={copilots} alt="Illustration of two robots, one of which in the form of a rabbit." />

        </div>
    )
}