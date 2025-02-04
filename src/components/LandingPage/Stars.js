import "./starsStyles.scss";

const stars = [];
const numStars = 100;
const margin = 10;
const winHeight = window.innerHeight - margin;
const winWidth = window.innerWidth - margin;
const animationMax = 1;
const animationMin = 3;

function getRandom(max) {
    return Math.random() * max;
}

for (let i = 0; i < numStars / 2; i++) {
    stars.push({
        top: getRandom(winHeight),
        left: getRandom(winWidth),
        class: "star",
        animationDuration: getRandom(animationMax - animationMin) + animationMin,
    });

    stars.push({
        top: getRandom(winHeight),
        left: getRandom(winWidth),
        class: "diamondStar",
        animationDuration: getRandom(animationMax - animationMin) + animationMin,
    });
}

function Stars() {
    return (
        <div>
            {stars.map((star, id) => {
                return (
                    <div
                        key={id}
                        className={star.class}
                        style={{
                            top: star.top,
                            left: star.left,
                            animationDuration: `${star.animationDuration}s`,
                        }}
                    />
                );
            })}
        </div>
    );
}

export default Stars;