const nav = document.querySelector('#navbar');
const navScroll = document.querySelector('#navBarScroll');

window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
        nav.style.display = 'none';
        navScroll.style.display = 'block'
    } else {
        nav.style.display = 'flex';
        navScroll.style.display = 'none'
    }
}