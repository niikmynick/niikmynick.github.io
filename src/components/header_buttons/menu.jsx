import React, { useState } from "react";

export const MenuButton = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div id="menu-button" onClick={toggleMenu}>
                <img id="menu-button-img" src={
                    process.env.PUBLIC_URL + '/menu_button.svg'
                } alt="menu button"/>
            </div>

            {menuOpen && (
                <div id="top-menu-overlay">
                    <div id="top-menu-content">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#albums">Albums</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </>

    )
}