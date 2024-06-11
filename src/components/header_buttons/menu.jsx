import React from "react";

export const MenuButton = () => {
    return (
        <div id="menu-button">
            <img id="menu-button-img" src={
                process.env.PUBLIC_URL + '/menu_button.svg'
            } alt="menu button"/>
        </div>
    )
}