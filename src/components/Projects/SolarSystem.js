import { useState } from "react";

import "./solarSystem.scss";
import AnimatedBox from "./animatedBox/AnimatedBox";

function SolarSystem() {
    const [planetDesc, setPlanetDesc] = useState({
        mercury: false,
        venus: false,
        earth: false,
        mars: false,
        jupiter: false,
    });

    function handlePlanetClick(planet) {
        const animatedBox = document.querySelector(`#${planet} + .animated-box`);
        console.log(animatedBox);
        setPlanetDesc(prev => {
            const updatedPlanetDesc = {
                ...prev,
                [planet]: !prev[planet]
            }

            return updatedPlanetDesc;
        });
    };

    const designPortfolioDesc = "Created a portfolio website for my girlfriend as a personal project. My first time learning and using tailwindcss."
    const peerPrepDesc = "Created a dynamic web application to allow users to discuss problems and enhance problem solving skills. Engage in real time discussions through the chat feature and visualize code while tackling problems."
    const myLibDesc = "Bookmark application done as a school project in a team of five. My role was designing and implementing the front end design. The app is able to support books that currently being read, finished books as well as books to read."
    const pixDesc = "A command-line task manager done as a school project. It can mark/unmark, add/delete, and find tasks by keyword.";
    const robotDogDesc = "Cooperated with a PhD student in developing an autonomous navigation go1 robot. My role was to create a stair climbing model with data collected from manually controlling the robot."

    return (
        <div id="solar-system">
            <div id="sun"></div>
            <h1>Projects</h1>
            <p>Click the planets to find out more!</p>
            <div className="planets-container">

                <div className="blank"></div>
                <div className="planet" id="mercury" onClick={() => handlePlanetClick("mercury")}></div>
                <AnimatedBox title="Design Portfolio" link="https://soarz.netlify.app" isDisplay={planetDesc.mercury} desc={designPortfolioDesc}></AnimatedBox>

                <div className="planet" id="venus" onClick={() => handlePlanetClick("venus")}></div>
                <AnimatedBox title="Peer Prep" link="https://github.com/CS3219-AY2324S1/ay2324s1-course-assessment-g51" isDisplay={planetDesc.venus} desc={peerPrepDesc}></AnimatedBox>
                <div className="blank"></div>

                <div className="blank"></div>
                <div className="planet" id="earth" onClick={() => handlePlanetClick("earth")}></div>
                <AnimatedBox title="MyLib" link="https://github.com/zenithyap/tp" isDisplay={planetDesc.earth} desc={myLibDesc}></AnimatedBox>

                <div className="planet" id="mars" onClick={() => handlePlanetClick("mars")}></div>
                <AnimatedBox title="Pix" link="https://github.com/zenithyap/ip" isDisplay={planetDesc.mars} desc={pixDesc}></AnimatedBox>
                <div className="blank"></div>

                <div className="blank"></div>
                <div className="planet" id="jupiter" onClick={() => handlePlanetClick("jupiter")}></div>
                <AnimatedBox title="Robot Dog" link="https://www.ccsgp.comp.nus.edu.sg/robotic-dog-intern" isDisplay={planetDesc.jupiter} desc={robotDogDesc}></AnimatedBox>
            </div>
        </div>
    )
}

export default SolarSystem;