import React from "react";
import {BackButton} from "./header_buttons/back";
import {LogoButton} from "./header_buttons/logo";
import {MenuButton} from "./header_buttons/menu";

export const Header = () => {
    return (
        <header id="header">
            {/*<BackButton />*/}
            <LogoButton />
            {/*<MenuButton />*/}
        </header>
    )
}