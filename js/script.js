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
    clientInfo1.style.display = 'flex';
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