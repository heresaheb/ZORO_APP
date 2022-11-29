// import {navHtml} from './navHtml.js';

    const navCover = document.querySelector('#Background-cover-for-nav-bar');
    const navBarElement = document.querySelector('#nav-side-bar');

    const navBarEl = document.querySelector("#nav-side-bar-movies");

// When click outside from the navSideBar
navCover.addEventListener("click", function(){
    navBarElement.style="visibility: hidden";
    navCover.style= "visibility: hidden";

// movies.js
    navBarEl.innerHTML ="";
    leftContent.style="margin-left: 20px;";
    headEl.style="visibility: visible";
    firstMovie.style="visibility: visible";
})



