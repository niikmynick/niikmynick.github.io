import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export const ParticlesComponentDesktop = (props) => {
    const options = {
        smooth: true,
        fullScreen: { enable: false, zIndex: -1 },
        interactivity: {
            events: { onClick: { enable: true, mode: "push" }, onHover: { enable: true, mode: "grab" } },
            modes: { push: { quantity: 3 }, grab: { distance: 150 } },
        },
        particles: {
            number: { value: 100, density: { enable: true, value_area: 1000 } },
            links: { enable: true, opacity: 0.3, distance: 200 },
            move: { enable: true, speed: { min: 1, max: 3 } },
            opacity: { value: { min: 0.3, max: 0.7 } },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    }

    const particlesInit = (engine) => {loadSlim(engine)};

    return <Particles id={props.id} init={particlesInit} options={options} />

};

export const ParticlesComponentMobile = (props) => {
    const options = {
        smooth: true,
        fullScreen: { enable: false, zIndex: -1 },
        interactivity: {
            events: { onClick: { enable: true, mode: "push" }, onHover: { enable: true, mode: "grab" } },
            modes: { push: { quantity: 3 }, grab: { distance: 100 } },
        },
        particles: {
            links: { enable: true, opacity: 0.3, distance: 150 },
            move: { enable: true, speed: { min: 0.5, max: 1.5 } },
            opacity: { value: { min: 0.3, max: 0.7 } },
            size: { value: { min: 0.5, max: 1.5 } },
        },
        detectRetina: true,
    }

    const particlesInit = (engine) => {loadSlim(engine)};

    return <Particles id={props.id} init={particlesInit} options={options} />
};
