import React, {useEffect} from "react";
import {BigLogo} from "../components/big_logo";
import {ParticlesComponentDesktop} from "../components/particles";
import {WelcomeBlock} from "../components/welcome";
import {MainMenu} from "../components/main_menu";
import {Footer} from "../components/footer";
import '../main.css';
import {initPage} from "../utils/page";

export const MainPage = () => {
    useEffect(() => {
        initPage()
    }, []);

    return (
        <>
            <BigLogo />
            <div id="welcome-div">
                <WelcomeBlock />
                <MainMenu />
                <ParticlesComponentDesktop id="tsParticles-main" />
            </div>
            <Footer />
        </>

    )
}
