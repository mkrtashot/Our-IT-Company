// NAVBAR on scroll //

const nav = document.querySelector('#nav-bar');
const navList = document.querySelector('.nav-list');
// const navBarItems = document.querySelector('.nav-list');

// console.dir(navBarItems);

window.onscroll = function () {
  "use strict";
  if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
    nav.style.top = "0";
    nav.style.background = 'rgba(120, 120, 120, 0.452)';
    nav.style.height = '40px'
    navList.style.borderBottom = 'none';
    // navBarItems.style.fontSize = '12px'
  }
  else {
    nav.style.top = "2";
    nav.style.background = 'none';
    nav.style.height = '70px'
    navList.style.borderBottom = 'solid 1px rgba(192, 192, 192, 0.452)';
    // navBarItems.style.fontSize = '18px'
  }
};



// homePage sparkling animation //

// const app = document.getElementById("sparkle");

// const myRand = () => {
// 	let r = 50;
// 	while (40 < r && r < 60) {
// 		r = Math.random() * 100;
// 	}
// 	return r;
// };

// for (let i = 0; i < 50; i++) {
// 	const delay = Math.random() + "s";
// 	const el = document.createElement("img");
// 	el.src = "../pictures/sparkle-effect-white-square.jpg";
// 	el.className = "glitter-star";
// 	el.style.top = myRand() + "%";
// 	el.style.left = myRand() + "%";
// 	el.style.animationDelay = delay;
// 	el.style.msAnimationDelay = delay;
// 	el.style.webkitAnimationDelay = delay;
// 	el.style.monAnimationDelay = delay;
// 	app.appendChild(el);
// }

// clients - Subtitle click effect //

const clientsDefault = document.querySelector('.clients-subsection-default');
const corporateBox = document.querySelector('.clients-subsection-container');

const corporate = document.querySelector('.corporate');
const folks = document.querySelector('.folk');

const clientInfo1 = document.querySelector('.container1');
const clientInfo2 = document.querySelector('.container2');
const clientInfo3 = document.querySelector('.container3');
const clientButtons = document.querySelector('.clients-page-content-buttons');
const clientsFolks = document.querySelector('.clients-folks-page');

corporate.addEventListener("click", subsectionOnClick);
folks.addEventListener("click", subsectionOnClick);

// let subSectionArray = [corporate, folks];

function subsectionOnClick() {

  console.dir(this);

  if (this === corporate) {
    this.classList.add(`clients-subsections-titles-click`);
    folks.classList.remove('clients-subsections-titles-click');

    showSubsection(corporateBox);
    showSubsection(clientInfo1);
    hideSubsection(clientInfo2);
    hideSubsection(clientInfo3);
    hideSubsection(clientsDefault);
    buttonApear();
    current_tab_index = 0;

  }
}

if (this === folks) {
  this.classList.add(`clients-subsections-titles-click`);
  corporate.classList.remove('clients-subsections-titles-click');
  hideSubsection(clientInfo1);
  hideSubsection(clientInfo2);
  hideSubsection(clientInfo3);
  hideSubsection(clientsDefault);
  showSubsection(clientsFolks)
  buttonApear();
  current_tab_index = 0;

}


// let checkCorporate = false;
// let checkFolks = false;

//   if (checkCorporate === false && this === corporate) {

//     checkCorporate = true;
//     checkFolks = false;
//   }

//   if (checkCorporate === true && this === corporate) {
//     showSubsection (clientInfo1);
//     hideSubsection (clientInfo2);
//     hideSubsection (clientInfo3);
//     buttonApear();
//     checkCorporate = false;
//   }

//   if (checkFolks === false && this === folks) {
//     this.classList.add(`clients-subsections-titles-click`);
//     corporate.classList.remove('clients-subsections-titles-click')
//     checkFolks = true;
//     checkCorporate = false;
//   }

//   if (checkFolks === true && this === folks) {
//     hideSubsection(clientInfo1);
//     hideSubsection (clientInfo2);
//     hideSubsection (clientInfo3);
//     showSubsection(clientsFolks);

//     buttonHide();
//   }
// }

function buttonApear() {
 
    clientButtons.style.opacity = '1';
    clientButtons.style.visibility = 'visible';
  
}

function buttonHide() {

    clientButtons.style.opacity = '0';
    clientButtons.style.visibility = 'none';

}

function hideContainer() {
  const hide = document.querySelector(`.container${current_tab_index + 1}`)
  hide.style.visibility = 'hidden';
  hide.style.opacity = '0';
}
function showContainer() {
  const show = document.querySelector(`.container${current_tab_index + 1}`)

  show.style.visibility = 'visible';
  show.style.opacity = '1';
}
document.querySelector('.clients-page-content-button-up').addEventListener("click", function () {
  hideContainer()
  current_tab_index = current_tab_index - 1 >= 0 ? current_tab_index - 1 : 2;
  showContainer()
})

document.querySelector('.clients-page-content-button-down').addEventListener("click", function () {
  hideContainer()
  current_tab_index = current_tab_index + 1 <= 2 ? current_tab_index + 1 : 0;
  showContainer()
})

// CORPORATE HIDE-SHOW FUNCTIONS

function showSubsection(param) {
  param.style.visibility = 'visible';
  param.style.opacity = '1';
}

function hideSubsection(param) {
  param.style.visibility = 'none';
  param.style.opacity = '0';
}





// text invert to span //
let current_tab_index = 0;

let clientsTextArray = [];

function textSpanFinal() {
  const clientsText = document.querySelectorAll(".meji-text");
  for (let i = 0; i < clientsText.length; i++) {
    clientsText[i].innerHTML = clientsText[i].innerHTML.split(" ").map(e => `<span>${e}</span>`).join(' ')
  }
}
textSpanFinal();