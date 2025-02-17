import { useState } from "react";

import "./solarSystem.scss";
import AnimatedBox from "./animatedBox/AnimatedBox";

function SolarSystem() {
    const [planetDesc, setPlanetDesc] = useState({
        mercury: false,
        venus: false,
    });

    function handlePlanetClick(planet) {
        const animatedBox = document.querySelector(`#${planet} + .animated-box`);
        console.log(animatedBox);
        setPlanetDesc(prev => {
            const updatedPlanetDesc = {
                ...prev,
                [planet]: !prev[planet]
            }

            if (updatedPlanetDesc[planet] === true) {
                animatedBox.style.width = "fit-content";
                animatedBox.style.height = "auto";
            } else {
                setTimeout(() => {  
                    animatedBox.style.width = 0;
                    animatedBox.style.height = 0;
                }, 1250);
            }

            return updatedPlanetDesc;
        });
    };

    const pixDesc = "A command-line task manager done as a school project. It can mark/unmark, add/delete, and find tasks by keyword.";
    const myLibDesc = "Bookmark application done as a school project in a team of five. My role was designing and implementing the front end design. The app is able to support books that currently being read, finished books as well as books to read."

    return (
        <div id="solar-system">
            <div id="sun"></div>
            <div className="planets-container">
                <div className="blank"></div>
                <div id="mercury" onClick={() => handlePlanetClick("mercury")}></div>
                <AnimatedBox title="Pix" link="https://github.com/zenithyap/ip" isDisplay={planetDesc.mercury} desc={pixDesc}></AnimatedBox>

                <div id="venus" onClick={() => handlePlanetClick("venus")}></div>
                <AnimatedBox title="MyLib" link="https://github.com/zenithyap/tp" isDisplay={planetDesc.venus} desc={myLibDesc}></AnimatedBox>
                <div className="blank"></div>
            </div>
        </div>
    )
}

export default SolarSystem;