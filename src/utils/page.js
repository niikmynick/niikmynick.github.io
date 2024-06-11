import {applyTheme} from "./theme";
import {applyLanguage} from "./language";

export const initPage = () => {
    const theme = localStorage.getItem('theme');
    const language = localStorage.getItem('language');

    if (!theme) {
        localStorage.setItem('theme', 'dark');
    }

    if (!language) {
        localStorage.setItem('language', 'en');
    }

    applyTheme(theme);
    applyLanguage(language);
}