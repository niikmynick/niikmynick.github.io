import React from "react";
import {changeTheme} from "../utils/theme";
import {changeLanguage} from "../utils/language";

export const Footer = () => {
    let theme = localStorage.getItem('theme');
    let language = localStorage.getItem('language');

    const handleThemeClick = () => {
        changeTheme()
        theme = localStorage.getItem('theme')
        document.getElementById("theme").innerText = `theme: ${theme}`
    }

    const handleLanguageClick = () => {
        changeLanguage()
        language = localStorage.getItem('language')
        document.getElementById("lang").innerText = `lang: ${language}`
    }

    return (
        <footer>
            <p onClick={handleThemeClick} id="theme">theme: {theme}</p>
            <p id="copyright">© 2024 niik </p>
            <p onClick={handleLanguageClick} id="lang">lang: {language}</p>
        </footer>
    )
}