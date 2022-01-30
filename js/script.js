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
const folkOne = document.querySelector('.folks-1');
const folkTwo = document.querySelector('.folks-2');
const folkThree = document.querySelector('.folks-3');

const folksButtons = document.querySelector('.folks-buttons');
const folkButtonLeft = document.querySelector('.folks-button-left');
const folkButtonRight = document.querySelector('.folks-button-right');


let current_tab_index =0;
let folksTabIndex =0;
corporate.addEventListener("click", subsectionOnClick);
folks.addEventListener("click", subsectionOnClick);

// let subSectionArray = [corporate, folks];

function subsectionOnClick() {

  if (this === corporate) {
    this.classList.add(`clients-subsections-titles-click`);
    folks.classList.remove('clients-subsections-titles-click');

    showSubsection(corporateBox);
    showSubsection(clientInfo1);
    hideSubsection(clientInfo2);
    hideSubsection(clientInfo3);
    hideSubsection(clientsDefault);
    hideSubsection(clientsFolks);
    hideSubsection(folkButtonLeft);
    hideSubsection(folkButtonRight);
    hideSubsection(folksButtons);

    buttonApear();
    current_tab_index = 0;
  }

if (this === folks) {
  
  folks.classList.add(`clients-subsections-titles-click`);
  corporate.classList.remove('clients-subsections-titles-click');

  hideSubsection(clientInfo1);
  hideSubsection(clientInfo2);
  hideSubsection(clientInfo3);

  hideSubsection(clientsDefault);

  showSubsection(clientsFolks);
  showSubsection(folkOne);
  hideSubsection(folkTwo);
  hideSubsection(folkThree);
  
  buttonHide();

  showSubsection(folksButtons);
  showSubsection(folkButtonRight);
  showSubsection(folkButtonLeft);

  folksTabIndex = 0;
}
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
    clientButtons.style.visibility = 'hidden';
}

function hideContainer() {
  const hide = document.querySelector(`.container${current_tab_index + 1}`)
  hide.style.visibility = 'hidden';
  hide.style.opacity = '0';
  hide.style.height = '0';
}
function showContainer() {
  const show = document.querySelector(`.container${current_tab_index + 1}`)

  show.style.visibility = 'visible';
  show.style.opacity = '1';
  show.style.height = '100%';

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


// FOLKS SLIDER //

folkButtonLeft.addEventListener('click', function () {
  hideFolksContainer()
  folksTabIndex = folksTabIndex - 1 >= 0 ? folksTabIndex - 1 : 2;
  showFolksContainer()
});

folkButtonRight.addEventListener('click', function() {
  hideFolksContainer()
  folksTabIndex = folksTabIndex + 1 <= 2 ? folksTabIndex + 1 : 0;
  showFolksContainer()
})

function hideFolksContainer() {
  const hideFolks = document.querySelector(`.folks-${folksTabIndex + 1}`)
  hideFolks.style.visibility = 'hidden';
  hideFolks.style.opacity = '0';
  hideFolks.style.height = '0';
}
function showFolksContainer() {
  const showFolks = document.querySelector(`.folks-${folksTabIndex + 1}`)

  showFolks.style.visibility = 'visible';
  showFolks.style.opacity = '1';
  showFolks.style.height = '100%';

}

// CORPORATE HIDE-SHOW FUNCTIONS

function showSubsection(param) {
  param.style.visibility = 'visible';
  param.style.opacity = '1';
  param.style.height = '100%';
}

function hideSubsection(param) {
  param.style.visibility = 'none';
  param.style.opacity = '0';
  param.style.height = '0';
}





// text invert to span //


let clientsTextArray = [];

function textSpanFinal() {
  const clientsText = document.querySelectorAll(".meji-text");
  for (let i = 0; i < clientsText.length; i++) {
    clientsText[i].innerHTML = clientsText[i].innerHTML.split(" ").map(e => `<span>${e}</span>`).join(' ')
  }
}
textSpanFinal();