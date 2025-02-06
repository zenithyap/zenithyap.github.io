import "../../styles.scss";
import profilePic from "./profilePic.png";

function AboutPage() {
    return (
        <section id="about-page">
            <h1>About</h1>
            <div className="introduction-container">
                <img src={profilePic} alt="My Profile" />
                <p>Hey, welcome to my website! I am a final-year Computer Science undergraduate at the National University of Singapore. I enjoy building visually engaging and dynamic web experiences using modern web technologies. Outside of coding, I am a reader, gamer, and a lifelong learner.</p>
            </div>
        </section>
    );
}

export default AboutPage;