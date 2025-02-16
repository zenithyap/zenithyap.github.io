import "./animatedBox.scss";

function AnimatedBox({ isDisplay, desc, link, title }) {
    return (
        <div className={ isDisplay ? "animated-box animate": "animated-box" }>
            <div className="border-top"></div>
            <div className="border-right"></div>
            <div className="border-bottom"></div>
            <div className="border-left"></div>
            <p>{title}<br/><br/>{desc}<br/><br/>Click <a href={link} target="_blank" rel="noopener noreferrer">here</a> to find out more!</p>
        </div>
    )
}

export default AnimatedBox;