import { navHtml } from './navHtml.js';

const rightContainerEl = document.querySelector("#right-container");
const imageEl = document.querySelector("#content-image");
const main = document.querySelector("#main-content");
const navButtonEl = document.querySelector("#nav-button");
// dividing main string from main element and navEl
const withOutNavEl = main.innerHTML.substring(0, 3537);


const preImageEl = imageEl.innerHTML;
function open() {
    // console.log(window.innerHeight);
    // This if conditon only for mobile users
    if (window.innerHeight > 1000) {
        imageEl.innerHTML += navHtml;
        const navSideBar = document.querySelector("#nav-side-bar");
        navSideBar.style = "margin-top: -48%";

        // Block-Scope
        const closeButtonEl = document.querySelector("#close-button");
        closeButtonEl.addEventListener("click", function () {
            imageEl.innerHTML = preImageEl;
        });
        return;
    }

    // For PC users
    main.innerHTML = withOutNavEl + navHtml;
    const navSideBar = document.querySelector("#nav-side-bar");

    navSideBar.style = "margin-top: -20.7cm";
    // Block-Scope
    const closeButtonEl = document.querySelector("#close-button");

    closeButtonEl.addEventListener("click", function
        () {
        main.innerHTML = withOutNavEl;
        navSideBar.style = "unset";
    });

}


if(window.innerWidth >1000){
    
}



navButtonEl.addEventListener("click", open);
