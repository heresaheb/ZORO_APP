import {navHtml} from './navHtml.js';


const navButton = document.querySelector("#nav-button");
const navBarEl = document.querySelector("#nav-side-bar-movies");
const leftContent = document.querySelector("#left-container");
const headEl = document.querySelector("#movie-anime");
const firstMovie = document.querySelector("#first-left-tile");
const navCover = document.querySelector('#Background-cover-for-nav-bar');
// it will return array with elements who accure this class.
const playButton = document.querySelectorAll(".play");

// Default
playButton.style= "visibility:hidden";
navCover.style="visibility: hidden";


// To close the nav-bar
function closeMenu() {

    // when nav-menu will be closed then play buttons back to normal.
    for(let i=0; i<playButton.length ; i++){
        playButton[i].style= "visibility:visible";
    }

    navCover.style= "visibility: hidden";
    navBarEl.style ="visibility: hidden;";
    navBarEl.innerHTML ="";
    leftContent.style="margin-left: 20px;";
    headEl.style="visibility: visible";
    firstMovie.style="visibility: visible";
}

// To open the side nav-bar
navButton.addEventListener("click", function openMenu () {

    //when nav-side bar already visible nav-button can't work
    if(navBarEl.innerHTML){
        return;
    }

    //when nav-menu enable background .play buttons will be disable.
    for(let i=0; i<playButton.length ; i++){
        playButton[i].style= "visibility:hidden";
    }

    navBarEl.innerHTML = navHtml;
    navCover.style= "visibility: visible";
    navBarEl.style ="visibility: visible";

    headEl.style="visibility: hidden;";
    firstMovie.style="visibility: hidden;";

    leftContent.style="margin-left: 0%;"; 

    // NOTE you can call other event inside another event function.
     // For close button
      const closeButton = document.querySelector('#close-button');
        closeButton.addEventListener("click", closeMenu);
    
 });
 

// When click outside from the navSideBar

//NOTE:
// you cannot use brackets for functions inside a event listener if you do then it it will invoke the function immediatly.
navCover.addEventListener("click", closeMenu);
