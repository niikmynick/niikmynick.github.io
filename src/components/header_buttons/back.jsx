import React from "react";
import {Link} from "react-router-dom";

export const BackButton = () => {
    return (
        <div id="back-button">
            <Link to="/#menu-object">
                <img id="back-button-img" src={ process.env.PUBLIC_URL + "/back_button.svg" } alt="back button"/>
            </Link>
        </div>
    )
}
