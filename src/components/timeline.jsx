import React from "react";

export const Timeline = () => {
    const timelineData = [
        {
            year: "2004",
            events: [
                {
                    title: "Hi, I'm Nikita",
                    description: "I was born in Norilsk, a small city in Russia located above the Arctic Circle, " +
                        "where the average temperature is below freezing for most of the year"
                },
            ]
        },
        {
            year: "2009",
            events: [
                {
                    title: "Science",
                    description: "In my youth, I was always fascinated by the world around me and the way things worked. " +
                        "To be more specific, I was interested in chemistry and biology, loved to read books and make various experiments. "
                },
                {
                    title: "Magic",
                    description: "I was also passionate about magic tricks and illusions, especially those that involved playing cards. " +
                        "My interest in magic led me to learn cardistry, which is the art of card flourishing."
                },
            ]
        },
        {
            year: "2014",
            events: [
                {
                    title: "Moving to St. Petersburg",
                    description: "In late 2014, my family and I moved to Saint Petersburg. " +
                        "This move opened up new opportunities for me and allowed me to explore new interests and hobbies"

                },
                {
                    title: "Speedcubing and Puzzles",
                    description: "Discovered the world of puzzles and speedcubing, which became my main hobby for the next few years."
                }
            ]
        },
        {
            year: "2017",
            events: [
                {
                    title: "Speedcubing Competitions",
                    description: "Started participating in competitions and became a member of the World Cube Association. " +
                        "I have competed in numerous competitions and have been able to achieve some decent results"
                },
                {
                    title: "Music Production",
                    description: "Discovering the world of music and started learning FL Studio"
                },
                {
                    title: "Design",
                    description: "Became interested in design and started learning Adobe Photoshop, Illustrator and Figma. " +
                        "Started creating my own designs and logos, and even took on some freelance projects"
                },
            ]
        },
        {
            year: "2018",
            events: [
                {
                    title: "Programming",
                    description: "My friend asked me to help him with graphics for his simple game project, which sparked my interest in programming. " +
                        "Since then, I have learned several programming languages on my own and have worked on various projects"
                },
                {
                    title: "ITMO University",
                    description: "Participated in Speedcubes Fest 2018 - a speedcubing competition held in ITMO University. " +
                        "When I saw the campus, I was inspired to study there"
                },
            ]
        },
        {
            year: "2019",
            events: [
                {
                    title: "Music",
                    description: "Released my first track called 'Idem'"
                },
            ]
        },
        {
            year: "2020",
            events: [
                {
                    title: "Programming",
                    description: "It was pandemic time, so I had a lot of free time to learn new things. " +
                        "I started learning web development and created my first website, also started learning Python"
                },
                {
                    title: "Student self-government",
                    description: "In a team founded the student self-government in my school. " +
                        "I was a head of the 'Interior Ministry' department and made a great contribution to the development of the project"
                },
            ]
        },
        {
            year: "2021",
            events: [
                {
                    title: "Multiplying Talents tournament",
                    description: "Participant in the 'Multiplying Talents' Intellectual Tournament by Gazprom Neft, proposed solutions for diversifying the oil industry in the event of global oil depletion"
                },
                {
                    title: "Bioinformatics Contest",
                    description: "Participant in the Bioinformatics Contest 2021, solved specialized tasks using Python"
                },
                {
                    title: "NTI Olympiad",
                    description: "Winner in the 'Python Programming' track at the National Technological Initiative Olympiad"
                },
                {
                    title: "Elements EP",
                    description: "Released my first EP called 'Elements', which consists of 3 tracks"
                },
                {
                    title: "Universe",
                    description: "Released single 'Universe'"
                },
                {
                    title: "Take part in compilation",
                    description: "Took part in the compilation 'Smart Vibes 13' by Smart Phenomena Records with the tracks 'Imagination' and 'Impetus'"
                },
            ]
        },
        {
            year: "2022",
            events: [
                {
                    title: "Oxytocin",
                    description: "Released lo-fi album 'Oxytocin', which consists of 7 tracks"
                },
                {
                    title: "Gold Medal by the Russian Civil Defense Test",
                    description: "Awarded a gold medal by the Russian Civil Defense Test for passing the exam with a perfect score"
                },
                {
                    title: "Graduated from School",
                    description: "I had to choose a university and a major. After much thought, I decided to take computer science instead of chemistry on the Unified State Exam. " +
                        "Fortunately, I was able to pass the all of the exams and enter the university of my dreams"
                },
                {
                    title: "First-Year Student at ITMO",
                    description: "Pursuing a degree in neurotechnologies and programming, while continuing my hobbies in music and puzzles."
                },
            ]
        },
        {
            year: "2023",
            events: [
                {
                    title: "Private Tutor",
                    description: "Taught programming to people of all ages"
                },
                {
                    title: "beITMO Hackathon",
                    description: "Participant in the development of the 'Digital Happiness Profile and Recommender System' for employees and students of ITMO University"
                },
                {
                    title: "Port One conference",
                    description: "Speaker at the 'IT Workshop' project by Port One company, delivering a presentation on artificial intelligence"
                },
                {
                    title: "Freelance developer",
                    description: "Developed websites and applications for clients"
                },
                {
                    title: "Second-Year Student at ITMO",
                    description: "Continuing my studies in neurotechnologies and programming"
                },
                {
                    title: "ATOM Hackathon",
                    description: "Winner in the 'Development of a back-end solution for voice control of a car' track"
                },
                {
                    title: "UFirst experience",
                    description: "Programming teacher in UFirst, a school of additional education for children, taught Python for beginners and intermediate students"
                },
                {
                    title: "OpenMind experience",
                    description: "Mentor of 'Coding to the World' program by OpenMind for the children of Gazprom Neft employees"
                },
            ]
        },
        {
            year: "2024",
            events: [
                {
                    title: "UFirst methodologist",
                    description: "Start working as a methodologist in UFirst, developed a curriculum for Python courses"
                },
                {
                    title: "Freelance developer and private tutor",
                    description: "Developed websites and applications for clients, taught programming to students of all ages"
                },
                {
                    title: "Time Again",
                    description: "Released single 'Time Againe'"
                },
            ]
        }
    ];

    return (
        <div id="about">
            <div id="about-content">
                {timelineData.map((item, index) => (
                    <div key={index} className="timeline-year">
                        <h2>{item.year}</h2>
                        <div className="timeline-events">
                            {item.events.map((event, eventIndex) => (
                                <div key={eventIndex} className="timeline-event">
                                    <h3>{event.title}</h3>
                                    <p>{event.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
