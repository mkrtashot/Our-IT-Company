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


// clients - Subtitle click effect //

const corporate = document.querySelector('.corporate');
const folks = document.querySelector('.folk');

corporate.addEventListener("click", subsectionOnClick);
folks.addEventListener("click", subsectionOnClick);

const clientInfo1 = document.querySelector('.container1')
const clientInfo2 = document.querySelector('.container2')
const clientInfo3 = document.querySelector('.container3')
const clientButtons = document.querySelector('.clients-page-content-buttons')

let subSectionArray = [corporate, folks];

function subsectionOnClick() {
  let checkCorporate = false;
  let checkFolks = false;

  if (checkCorporate === false && this === corporate) {
    this.classList.add(`clients-subsections-titles-click`);
    folks.classList.remove('clients-subsections-titles-click')
    checkCorporate = true;
    checkFolks = false;
  }


  if (checkFolks === false && this === folks) {
    this.classList.add(`clients-subsections-titles-click`);
    corporate.classList.remove('clients-subsections-titles-click')
    checkFolks = true;
    checkCorporate = false;

  }

  if (checkCorporate === true && this === corporate) {
    clientInfo1.style.visibility = 'visible';
    clientInfo1.style.opacity = '1';
    current_tab_index=0;
    buttonApear();
  }

  if (checkFolks === true && this === folks) {
    clientInfo1.style.display = 'none';
    buttonApear();
  }
}

function buttonApear() {
  {
    clientButtons.style.opacity = '1';
    clientButtons.style.visibility = 'visible';
  }
}
function hideContainer(){
  const hide =  document.querySelector(`.container${current_tab_index+1}`)
  hide.style.visibility = 'hidden';
  hide.style.opacity = '0';
}
function showContainer(){
  const show =  document.querySelector(`.container${current_tab_index+1}`)

  show.style.visibility = 'visible';
  show.style.opacity = '1';
}
document.querySelector('.clients-page-content-button-up').addEventListener("click",function(){
  hideContainer()
  current_tab_index = current_tab_index-1>=0?current_tab_index-1:2;
  showContainer()
})

document.querySelector('.clients-page-content-button-down').addEventListener("click",function(){
  hideContainer()
  current_tab_index = current_tab_index+1<=2?current_tab_index+1:0;
  showContainer()

})
// text invert to span //
let current_tab_index=0;

let clientsTextArray = [];

function textSpanFinal() {
  const clientsText = document.querySelectorAll(".meji-text");
  for (let i = 0; i<clientsText.length; i++){   
    clientsText[i].innerHTML=clientsText[i].innerHTML.split(" ").map(e=>`<span>${e}</span>`).join(' ')     
   }
}
textSpanFinal()
