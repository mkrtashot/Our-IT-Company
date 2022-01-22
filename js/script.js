console.log(`this works`);

// settingWheel = this.document.getElementById("settings-wheel")

// light-dark-switch-scroll.classList.toggle("setting-wheel-after-click");
// // light-dark-switch-scroll
// // light-dark-switch-scroll-click

// <<<<<<< feature/Home-Page
// document.querySelector(`#light-dark-switch`).addEventListener('click', darkModeWheel);

// function darkModeWheel () {

//     document.querySelector(`.light-dark-switch-scroll`).classList.toggle(`.light-dark-switch-scroll`);
//     document.querySelector(`#light-dark-switch-scroll`).classList.remove(`light-dark-switch-scroll-click`)

//     // const switchScroll = document.getElementById(`light-dark-switch-scroll`);
//     // console.log("the function works")
//     // switchScroll.classList.add("light-dark-switch-scroll-click");
//     // switchScroll.classList.remove("light-dark-switch-scroll-click");

// =======
function darkModeWheel(settingWheel) {
	const switchScroll = this.document.getElementById(`light-dark-switch-scroll`);
	// const
	// console.log(`the function works`);
}

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
	el.src = "../pictures/sparkle-effect-white-square.jpg";
	el.className = "glitter-star";
	el.style.top = myRand() + "%";
	el.style.left = myRand() + "%";
	el.style.animationDelay = delay;
	el.style.msAnimationDelay = delay;
	el.style.webkitAnimationDelay = delay;
	el.style.monAnimationDelay = delay;
	app.appendChild(el);
}

// --- Global

// const MAX_POSITION = 150;

// // ---- Request animation frame

// const box = document.querySelector(".home-content-textline-container");
// const positionElement = document.querySelector(".home-content");
// let position = 0;

// function animate() {
// 	position += 1;

// 	// Reset position
// 	if (position > MAX_POSITION) {
// 		position = 0;
// 	}

// 	// Update position
// 	box.style.transform = `translateX(${position}px)`;
// 	positionElement.innerHTML = `${position.toFixed(2)}px`;

// 	requestAnimationFrame(animate);
// }

// animate();

// (function () {
// 	var rotator = document.getElementById("moving"), //get the element
// 		dir = "/pictures/", //images folder
// 		delayInSeconds = 1, //delay in seconds
// 		num = "we-build-magic.png", //start number
// 		len = N; //limit
// 	setInterval(function () {
// 		//interval changer
// 		rotator.src = dir + num; //change picture
// 		// num = (num === len) ? 0 : ++num;              //reset if last image reached
// 	}, delayInSeconds * 50);
// })();

// window.onload = function () {
// 	function animate() {
// 		var c = document.getElementById("moving");
// 		var ctx = c.getContext("2d");
// 		ctx.clearRect(0, 0, c.width, c.height);

// 		if (i > 300) {
// 			// adjust the place need to stop the animation at canvas, how many pixels that the stop point close to the origin
// 			i = 1;
// 		}

// 		if (i > 1) {
// 			var j = 0;
// 			while (j < 50) {
// 				// number of circles in the wave (50/5)
// 				ctx.beginPath();
// 				ctx.arc(c.width / 2, c.height + 300, i + j * 5, 0, 2 * Math.PI, true); // i=(j*5) adjust the distance between circles
// 				ctx.lineWidth = 7;
// 				ctx.stroke();
// 				j += 5;
// 			}
// 		}
// 		i++;
// 		setTimeout(animate, 10);
// 	}
// 	var i = 0;
// 	animate();
// 	console.log('works');
// };

//

// const para1 = document.getElementById("moving");
// const para2 = document.getElementById("moving");
// // const para3 = document.getElementById("para3");

// animate(para1);
// animate(para2);
// // animate(para3);

// function animate(element) {
//     let elementWidth = element.offsetWidth;
//     let parentWidth = element.parentElement.offsetWidth;
//     let flag = 0;

//     setInterval(() => {
//         element.style.marginLeft = --flag + "px";

//         if (elementWidth == -flag) {
//             flag = parentWidth;
//         }
//     }, 10);
// }

//proporcional speed counter (for responsive/fluid use)

// var widths = $("moving").width();
// var duration = widths * 7;

// $("moving").marquee({
// 	//speed in milliseconds of the marquee
// 	duration: duration, // for responsive/fluid use
// 	//duration: 8000, // for fixed container
// 	//gap in pixels between the tickers
// 	gap: $("moving").width(),
// 	//time in milliseconds before the marquee will start animating
// 	delayBeforeStart: 0,
// 	//'left' or 'right'
// 	direction: "left",
// 	//true or false - should the marquee be duplicated to show an effect of continues flow
// 	duplicated: true,
// });

// $(function () {
// 	$(".home-content-textline-container").marquee({
// 		speed: 5000,
// 		gap: 50,
// 		delayBeforeStart: 0,
// 		direction: "left",
// 		duplicated: true,
// 		pauseOnHover: true,
// 	});
// });

// $(".home-content-textline-container").marquee({
// 	speed: 250,
// 	gap: 10,
// 	delayBeforeStart: 0,
// 	direction: "left",
// 	duplicated: false,
// 	pauseOnHover: true,
// 	easing: "linear",
// });

// $(function () {
// 	let txt = $("#moving");
// 	txt
// 		.bind("scroll", function () {
// 			let el = $(this);
// 			// Scroll state machine
// 			let scrollState = el.data("scrollState") || 0;
// 			el.data("scrollState", (scrollState + 1) % 4);
// 			switch (scrollState) {
// 				case 0:
// 					// initial wait
// 					el.css({
// 						left: 5,
// 					});
// 					el.show();
// 					window.setTimeout(function () {
// 						el.trigger("scroll");
// 					}, 1000);
// 					break;
// 				case 1:
// 					// start scroll
// 					let delta = 0 - parseInt(el.height());
// 					if (delta < 0) {
// 						el.animate(
// 							{
// 								left: delta,
// 							},
// 							2000,
// 							"linear",
// 							function () {
// 								el.trigger("scroll");
// 							}
// 						);
// 						delta = -5 * parseInt(delta) + "px";
// 						el.animate(
// 							{
// 								left: delta,
// 							},
// 							0,
// 							"linear",
// 							function () {
// 								el.trigger("scroll");
// 							}
// 						);
// 						el.animate(
// 							{
// 								left: 0,
// 							},
// 							2000,
// 							"linear",
// 							function () {
// 								el.trigger("scroll");
// 							}
// 						);
// 					}
// 					break;
// 			}
// 		})
// 		.trigger("scroll");
// });
