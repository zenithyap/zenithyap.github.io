import "./nightSkyStyles.scss";

const margin = 20;
const winHeight = window.innerHeight - margin;
const winWidth = window.innerWidth - margin;

const stars = [];
const numStars = Math.max(winHeight * winWidth / 20000, 30);
const animationMax = 3;
const animationMin = 1;

const shootingStars = [];
const numShootingStars = Math.min(Math.max((winHeight * winWidth) / 110000, 7), 15);
const shootingStarDelayMax = 10;
const shootingStarDelayMin = 1;

function getRandom(min, max) {
    return (Math.random() * (max - min)) + min;
}

for (let i = 0; i < numStars / 2; i++) {
    stars.push({
        top: getRandom(0, winHeight),
        left: getRandom(0, winWidth),
        class: "star",
        animationDuration: getRandom(animationMin, animationMax),
    });

    stars.push({
        top: getRandom(0, winHeight),
        left: getRandom(0, winWidth),
        class: "diamondStar",
        animationDuration: getRandom(animationMin, animationMax),
    });
}

for (let i = 0; i < numShootingStars; i++) {
    shootingStars.push({
        top: getRandom(0, winHeight),
        left: getRandom(0, winWidth),
        class: "shootingStar",
        animationDuration: getRandom(animationMin, animationMax),
        animationDelay: getRandom(shootingStarDelayMin, shootingStarDelayMax),
    })
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
            <div className="shootingStar"></div>
        </div>
    );
}

function ShootingStars() {
    return(
        <div>
            {shootingStars.map((star, id) => {
                return (
                    <div 
                        key={id}
                        className={star.class}
                        style={{
                            top: star.top,
                            left:star.left,
                            animationDuration: `${star.animationDuration}s`,
                            animationDelay: `${star.animationDelay}s`,
                        }}
                    />
                );
            })}
        </div>
    );
}

function Moon() {
    return (
        <div className="moon-container">
            <div className="moon-mask"></div>
            <div className="moon-glow"></div>
            <div className="moon"></div>
        </div>
    );
}

function NightSkyScene() {
    return (
        <div id="night-sky-scene">
            <Moon/>
            <Stars/>
            <ShootingStars/>
        </div>
    )
};

export default NightSkyScene;
