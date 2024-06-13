import i18n from "./i18n";


export const applyLanguage = (language) => {
    const root = document.documentElement;
    root.setAttribute('lang', language);
    i18n.changeLanguage(language)
}

export const changeLanguage = () => {
    const language = localStorage.getItem('language');
    if (language === "en") {
        applyLanguage("ru")
        localStorage.setItem('language', 'ru');
    } else {
        applyLanguage("en")
        localStorage.setItem('language', 'en');
    }
}