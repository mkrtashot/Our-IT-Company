// homePage sparkling animation //

const app = document.getElementById("sparkle");

const myRand = () => {
	let r = 50;
	while (40 < r && r < 60) {
		r = Math.random() * 100;
	}
	return r;
};

for (let i = 0; i < 50; i++) {
	const delay = Math.random() + "s";
	const el = document.createElement("img");
	el.src = "./pictures/sparkle-effect-white-square.jpg";
	el.className = "glitter-star";
	el.style.top = myRand() + "%";
	el.style.left = myRand() + "%";
	el.style.animationDelay = delay;
	el.style.msAnimationDelay = delay;
	el.style.webkitAnimationDelay = delay;
	el.style.monAnimationDelay = delay;
	app.appendChild(el);
}