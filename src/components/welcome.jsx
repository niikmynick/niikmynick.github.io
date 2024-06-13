import React from "react";
import {useTranslation} from "react-i18next";

export const WelcomeBlock = () => {
    const { t, i18n } = useTranslation();

    return (
        <div id="welcome-content">
            <h1>
                {t("welcome")}
            </h1>
            {/*<h1>welcome to niik’s world</h1>*/}
        </div>
    )
}