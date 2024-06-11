import React from "react";

export const Album = ({ name, description, tracks, image, link }) => {
    return (
        <div className="album-card">
            <img src={process.env.PUBLIC_URL + image} alt={name} className="album-image" />
            <div className="album-info">
                <h3 className="album-name">{name}</h3>
                <ul className="album-tracks">
                    {tracks.map((track, index) => (
                        <li key={index}>{track}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const albumData = [
    {
        name: "Idem",
        tracks: ["Idem"],
        image: "/idem.png",
        link: "https://soundcloud.com/niikmynick/idem?si=c614cea91df940bb876b14aa448ef324&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
        name: "Die With You - Remix",
        tracks: ["The Anix - Die With You (Niik Remix)"],
        image: "/die_with_you.jpg",
        link: "https://soundcloud.com/niikmynick/the-anix-die-with-you-niik-remix?si=8aa8b19508794391b5915c935d4da6dd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
        name: "Hollywood Perfect - Remix",
        tracks: ["Unknown Brain, NotEvenTanner - Hollywood Perfect (Niik Remix)"],
        image: "/hollywood_perfect.png",
        link: "https://soundcloud.com/niikmynick/unknown-brain-noteventanner-hollywood-perfect-niik-remix?si=7d579300fe9a4a16b9a51489b35dbe6a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
        name: "Emoji - Remix",
        tracks: ["BENCHI - Emoji (Niik Remix)"],
        image: "/emoji.jpg",
        link: "https://soundcloud.com/niikmynick/benchi-emoji-niik-remix?si=84b724b0ba1f4f449dd200268d4fe8d4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
        name: "Feelings - Remix",
        tracks: ["Misael Gauna, Noctilucent - Feelings (Niik Remix)"],
        image: "/feelings.png",
        link: "https://soundcloud.com/niikmynick/misael-gauna-noctilucent-feelings-niik-remix?si=3fe35d2581444998938a0e1d22991711&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
        name: "Elements EP",
        tracks: ["Burn", "Voice of Reason", "Imperium"],
        image: "/elements.jpg",
        link: "https://band.link/n93VY"
    },
    {
        name: "Universe",
        tracks: ["Universe"],
        image: "/universe.jpg",
        link: "https://band.link/w7Rws"
    },
    {
        name: "Smart Vibes 13",
        tracks: ["Imagination", "Impetus"],
        image: "/smart_vibes_13.jpg",
        link: "https://band.link/W5maF"
    },
    {
        name: "Oxytocin",
        tracks: ["Before", "Past", "Lost Moon", "Morning Light", "Sloth", "Oxytocin", "See You Later"],
        image: "/oxytocin.jpg",
        link: "https://band.link/EfPpp"
    },
    {
        name: "Time Again",
        tracks: ["Time Again"],
        image: "/time_again.jpg",
        link: "https://band.link/niiktimeagain"
    }
];

export const MusicReleases = () => {
    return (
        <div id="albums">
            <h2>My Music Albums</h2>
            <div id="albums-content">
                {albumData.map((album, index) => (
                    <Album
                        key={index}
                        name={album.name}
                        description={album.description}
                        tracks={album.tracks}
                        image={album.image}
                        link={album.link}
                    />
                ))}
            </div>
        </div>
    )
}
