import React from "react";
import { ListItem } from "./listItem";
import {useTranslation} from "react-i18next";


const albumData = [
    {
        name: "Idem",
        tracks: ["Idem"],
        image: "/idem.png",
        link: "https://soundcloud.com/niikmynick/idem?si=c614cea91df940bb876b14aa448ef324&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        year: "2019"
    },
    {
        name: "Die With You - Remix",
        tracks: ["The Anix - Die With You (Niik Remix)"],
        image: "/die_with_you.jpg",
        link: "https://soundcloud.com/niikmynick/the-anix-die-with-you-niik-remix?si=8aa8b19508794391b5915c935d4da6dd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        year: "2021"
    },
    {
        name: "Elements EP",
        tracks: ["Burn", "Voice of Reason", "Imperium"],
        image: "/elements.jpg",
        link: "https://band.link/n93VY",
        year: "2021"
    },
    {
        name: "Universe",
        tracks: ["Universe"],
        image: "/universe.jpg",
        link: "https://band.link/w7Rws",
        year: "2021"
    },
    {
        name: "Hollywood Perfect - Remix",
        tracks: ["Unknown Brain, NotEvenTanner - Hollywood Perfect (Niik Remix)"],
        image: "/hollywood_perfect.png",
        link: "https://soundcloud.com/niikmynick/unknown-brain-noteventanner-hollywood-perfect-niik-remix?si=7d579300fe9a4a16b9a51489b35dbe6a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        year: "2021"
    },
    {
        name: "Emoji - Remix",
        tracks: ["BENCHI - Emoji (Niik Remix)"],
        image: "/emoji.jpg",
        link: "https://soundcloud.com/niikmynick/benchi-emoji-niik-remix?si=84b724b0ba1f4f449dd200268d4fe8d4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        year: "2021"
    },
    {
        name: "Feelings - Remix",
        tracks: ["Misael Gauna, Noctilucent - Feelings (Niik Remix)"],
        image: "/feelings.png",
        link: "https://soundcloud.com/niikmynick/misael-gauna-noctilucent-feelings-niik-remix?si=3fe35d2581444998938a0e1d22991711&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        year: "2021"
    },
    {
        name: "Smart Vibes 13",
        tracks: ["Imagination", "Impetus"],
        image: "/smart_vibes_13.jpg",
        link: "https://band.link/W5maF",
        year: "2021"
    },
    {
        name: "Oxytocin",
        tracks: ["Before", "Past", "Lost Moon", "Morning Light", "Sloth", "Oxytocin", "See You Later"],
        image: "/oxytocin.jpg",
        link: "https://band.link/EfPpp",
        year: "2022"
    },
    {
        name: "Time Again",
        tracks: ["Time Again"],
        image: "/time_again.jpg",
        link: "https://band.link/niiktimeagain",
        year: "2024"
    }
];

export const MusicReleases = () => {
    const { t, i18n } = useTranslation();

    return (
        <div id="items">
            <h2>{t("music_top")}</h2>
            <div id="items-content">
                {albumData.map((album, index) => (
                    <a key={index} href={album.link} target="_blank" rel="noopener noreferrer">
                        <ListItem
                        key={index}
                        name={album.name}
                        // description={album.tracks.map((track) => (
                        //     <p>{track}</p>
                        // ))}
                        info={album.year}
                        image={album.image}
                        link={album.link}
                    />
                    </a>
                ))}
            </div>
        </div>
    )
}
