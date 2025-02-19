import "../styles.scss";
import { useState } from "react";

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);

    function handleHamburgerClick() {
        setShowNavbar(prev => !prev);
    };

    return (
        <div id="navbar">
            <div id="menu">
                <div id="hamburger" onClick={handleHamburgerClick}>&#9776;</div>
                <ul className={ showNavbar ? "display" : "" }>
                    <li><a href="#landing-page">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="">Hobbies</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
