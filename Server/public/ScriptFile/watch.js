const ep1ButtonEl = document.querySelector("#ep1");
const videoEl = document.querySelector("#video");

// console.log(ep1ButtonEl);

ep1ButtonEl.addEventListener("click" , ()=>{
    videoEl.src ="hello";
    console.log(videoEl);
});

function sayHello() {
    console.log("Hello There!");
}