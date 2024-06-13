import React from "react";
import {changeTheme} from "../utils/theme";
import {changeLanguage} from "../utils/language";
import {useTranslation} from "react-i18next";

export const Footer = () => {
    const { t, i18n } = useTranslation();

    let theme = localStorage.getItem('theme');
    let language = localStorage.getItem('language');

    const handleThemeClick = () => {
        changeTheme()
        theme = localStorage.getItem('theme')
        document.getElementById("theme").innerText = `${t("theme")}: ${t(theme)}`
    }

    const handleLanguageClick = () => {
        changeLanguage()
        language = localStorage.getItem('language')
        document.getElementById("lang").innerText = `${t("lang")}: ${t(language)}`
        document.getElementById("theme").innerText = `${t("theme")}: ${t(theme)}`
    }

    return (
        <footer>
            <p onClick={handleThemeClick} id="theme">{t("theme")}: {t(theme)}</p>
            <p id="copyright">© 2024 niik </p>
            <p onClick={handleLanguageClick} id="lang">{t("lang")}: {t(language)}</p>
        </footer>
    )
}