// NAVBAR on scroll //

const nav = document.querySelector("#nav-bar");
const navList = document.querySelector(".nav-list");
// const navBarItems = document.querySelector('.nav-list');

// console.dir(navBarItems);

window.onscroll = function () {
	"use strict";
	if (
		document.body.scrollTop >= 10 ||
		document.documentElement.scrollTop >= 10
	) {
		nav.style.top = "0";
		nav.style.background = "rgba(120, 120, 120, 0.452)";
		nav.style.height = "40px";
		navList.style.borderBottom = "none";
		// navBarItems.style.fontSize = '12px'
	} else {
		nav.style.top = "2";
		nav.style.background = "none";
		nav.style.height = "70px";
		navList.style.borderBottom = "solid 1px rgba(192, 192, 192, 0.452)";
		// navBarItems.style.fontSize = '18px'
	}
};

