import React from "react";
import { ListItem } from "./listItem";
import {useTranslation} from "react-i18next";


const projectData = [
    {
        name: "CreditFlow",
        description: "An application for MacOS users that helps arbitrageurs to find the right split of person's credit bill according to the law",
        stack: "Swift, SwiftUI",
        image: "/creditFlow/main.png",
        githubLink: "https://github.com/niikmynick/CreditFlow_MacOS"
    },
    {
        name: "Voice Assistant",
        description: "A voice assistant developed for ATOM Hackathon. Can perform various tasks in Software Defined Vehicles",
        stack: "Python, PicoVoice, VOSK",
        image: "/atom-hackathon.png",
        githubLink: "https://github.com/niikmynick/atom_voice_assistant"
    },
    {
        name: "Neural Profession Classifier",
        description: "Test a person's abilities to guess which IT profession they are most suitable for and analyze the importance of certain human qualities in various fields of activity",
        stack: "Node.js, TensorFlow.js, HTML, CSS, SQLite",
        image: "/opd_neural.jpg",
        githubLink: "https://github.com/niikmynick/opd_neural_webapp"
    },
    {
        name: "Reminder Telegram Bot",
        description: "A Telegram bot developed specially for the Yandex marketing team. " +
            "It designed to identify and authenticate managers from a team's local Google spreadsheet. " +
            "It provides managers with a list of tasks based on specific statuses. " +
            "Additionally, the bot sends a report to the head of the team, providing information about each team member's progress." +
            "The bot is deployed in the Yandex Cloud Services.",
        stack: "Python, Aiogram, Google Sheets API",
        image: "/yandex-task-reminder.png",
        githubLink: "https://github.com/niikmynick/reminderYandexBot"
    },
    {
        name: "Vote Telegram Bot",
        description: "A Telegram bot, developed for the second scientific and practical conference of Gazprom Design employees. " +
            "The bot is designed to collect and check votes from conference participants and to display the results in real-time. " +
            "The bot was deployed in the Yandex Cloud Services.",
        stack: "Python, Aiogram",
        image: "/gazprom-vote-bot.png",
        githubLink: "https://github.com/niikmynick/voteBotGazprom"
    },
    {
        name: "FAQ Telegram Bot",
        description: "A Telegram bot, developed to reduce amount of questions from employees of Gazprom Design company to its HR department " +
            "and improve overall management system on official documents",
        stack: "Python, Aiogram",
        image: "/hr_bot.png",
        githubLink: ""
    },
    {
        name: "VK Meet Bot",
        description: "A VK bot, developed to help people find each other using different filters such as city, age or any other",
        stack: "Python, VK Api",
        image: "/vk_meet.jpg",
        githubLink: "https://github.com/niikmynick/vk_meet"
    },
    {
        name: "Stack machine with assembly-like language translator",
        description: "A stack machine with an assembler translator.",
        stack: "Python",
        image: "/asm-machine.png",
        githubLink: "https://github.com/niikmynick/csa-lab3"
    },
    {
        name: "Stack machine with Forth-like language translator",
        description: "A stack machine with a Forth translator.",
        stack: "Python",
        image: "/forth-machine.png",
        githubLink: "https://github.com/niikmynick/csa_forth"
    },
    {
        name: "Hit checker web app (front-end)",
        description: "Front-end part of web app developed as a laboratory work for web development course in ITMO University. " +
            "This app allows you to play with graph, place points on it and check them",
        stack: "React, Redux",
        image: "/web-lab-4-2.png",
        githubLink: "https://github.com/niikmynick/web-lab4-frontend"
    },
    {
        name: "Hit checker web app (back-end)",
        description: "Back-end part of laboratory work for web development course in ITMO University.",
        stack: "Java EE",
        image: "/web-lab-4-1.png",
        githubLink: "https://github.com/niikmynick/web-lab4-backend"
    },
    {
        name: "Hit checker JSF app",
        description: "Another version of laboratory work for web development course",
        stack: "Java EE, JSF",
        image: "/web-lab-3.png",
        githubLink: "https://github.com/niikmynick/web-lab3"
    },
    {
        name: "Collection managing app",
        description: "An app that provided with GUI to manage your personal Space Marine collection and view the collections of other users",
        stack: "Kotlin, TornadoFx",
        image: "/space_marine.png",
        githubLink: "https://github.com/niikmynick/Lab8"
    },
    {
        name: "Portfolio website",
        description: "My personal portfolio website. It is created to show all aspects of my life -- projects, skills and hobbies. I hope you like it )",
        stack: "React",
        image: "/img.png",
        githubLink: "https://github.com/niikmynick/niikmynick.github.io"
    }
];

export const Projects = () => {
    const { t, i18n } = useTranslation();

    return (
        <div id="items">
            <h2>{t("projects-top")}</h2>
            <div id="items-content">
                {projectData.map((project, index) => (
                    <a key={index} href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <ListItem
                            key={index}
                            name={project.name}
                            description={project.description}
                            info={project.stack}
                            image={project.image}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};
