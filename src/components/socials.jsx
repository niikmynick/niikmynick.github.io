import React from "react";

export const Socials = () => {
    return (
        <div id="socials">
            <div id="socials-content">
                <a className="social-link" href="https://github.com/niikmynick" target="_blank" rel="noreferrer">
                    <img src={process.env.PUBLIC_URL + "github.svg"} alt="GitHub" />
                </a>
                <a className="social-link" href="https://t.me/niikmynick" target="_blank" rel="noreferrer">
                    <img src={process.env.PUBLIC_URL + "tg.svg"} alt="Telegram" />
                </a>
                <a className="social-link" href="mailto:nikitakobik@yandex.ru" target="_blank" rel="noreferrer">
                    <img src={process.env.PUBLIC_URL + "mail.svg"} alt="Mail" />
                </a>
                <a className="social-link" href="https://vk.com/niik_official" target="_blank" rel="noreferrer">
                    <img src={process.env.PUBLIC_URL + "vk.svg"} alt="VK" />
                </a>
                <a className="social-link" href="https://soundcloud.com/niikmynick" target="_blank" rel="noreferrer">
                    <img src={process.env.PUBLIC_URL + "sc.svg"} alt="SoundCloud" />
                </a>
                <a className="social-link" href="https://open.spotify.com/artist/5VhVwrfEvoUu7j4qS8bJQQ?si=_DK8vr-kQY2Nad1bct45pQ" target="_blank" rel="noreferrer">
                    <img src={process.env.PUBLIC_URL + "spotify.svg"} alt="Spotify" />
                </a>
                <a className="social-link" href="https://www.worldcubeassociation.org/persons/2017KOBI02" target="_blank" rel="noreferrer">
                    <img src={process.env.PUBLIC_URL + "wca.svg"} alt="WCA" />
                </a>
            </div>
        </div>
    )
}