import "../../styles.scss";
import profilePic from "./profilePic.JPEG";
import azendianLogo from "./azendian_icon.png";

function AboutPage() {
    return (
        <section id="about">
            <h1>About</h1>
            <div className="introduction-container">
                <img id="profilePic" src={profilePic} alt="My Profile" />
                <p>Hey, welcome to my website! I am a final-year Computer Science undergraduate at the National University of Singapore. I enjoy building visually engaging and dynamic web experiences using modern web technologies. Outside of coding, I am a reader, gamer, and a lifelong learner.</p>
            </div>
            <div className="experience-container">
                <h2>Experience</h2>
                <div className="title-container">
                    <img src={azendianLogo} alt="azendian logo" />
                    <div>
                        <h3>Fullstack Developer Intern</h3>
                        <h3>Azendian Solutions</h3>
                        <p>Jan - Jun 2024</p>
                    </div>
                </div>
                <p>Developed real time Dashboard to monitor cooling machines. Participated in weekly client feedback to improve dashboard user interface.</p>
                <p>Led logistics planning for a beach cleaning company event, coordinating with a team of five interns to ensure timely execution and a seamless attendee experience.</p>
            </div>
        </section>
    );
}

export default AboutPage;