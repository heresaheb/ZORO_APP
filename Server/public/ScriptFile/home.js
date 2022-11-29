const trendScroll = document.querySelector("#trending-home");
const prevButt = document.querySelector("#prev-scroll");
const nextButt = document.querySelector("#next-scroll");
const closeSideNavButt = document.querySelector("#close-menu");
const leftMenu =document.querySelector("#left-nav-bar");
const navBut = document.querySelector("#nav-button");
const cmntButtOff = document.querySelector("#comment-off");
const cmntButtOn = document.querySelector("#comment-on");
const cmntOptDiv = document.querySelector("#cmnt-options");
const hideComntOn = document.querySelector("#hide-comment-sec");
const showCmntOn = document.querySelector("#comment-sec");

let scrollVal = 0;
let left = 1;


prevButt.addEventListener("click", () => {
    // console.log(left);
    if (scrollVal > 21) scrollVal -= 21 * left;
    trendScroll.style = `right: ${scrollVal}px;`
    if (left <= 4) left++;   //to go more left side increase if condintion 4 value
    else right = 1;
});


let right = 1;
//without any animation
// nextButt.addEventListener("click", () => {
//     // console.log(right);
//     trendScroll.style = `right: ${230 * right}px;`
//     if (right < 4) right++;
//     else left = 1;
// });

nextButt.addEventListener("click", () => {
    // console.log(right);
    scrollVal = 230 * right;
    //animation-name: scroll;
    trendScroll.style = ` right: ${scrollVal}px;`

    if (right < 4) right++;  //to go more right side increase if condintion 4 value
    else left = 1;
});

navBut.addEventListener("click" , ()=>{
    leftMenu.style = "visibility : visible";
})



closeSideNavButt.addEventListener("click" , ()=>{
    leftMenu.style = "visibility : hidden";
})

hideComntOn.style = "visibility : hidden"; // hideCmnt is on
let radioButtOn = true;

//off to on
cmntButtOff.addEventListener("click" , ()=>{
    if(!radioButtOn){
    cmntOptDiv.children.item(0).textContent ="Comments are On"; //to div child
    hideComntOn.style = "visibility : hidden;";
    showCmntOn.style = "visibility : visible; height : 12cm; ";
    cmntOptDiv.style="margin: intial; height: intial; padding-left: intial;";
    radioButtOn = true;
    }
})

// on to off
cmntButtOn.addEventListener("click" , ()=>{
    if(radioButtOn){
        cmntOptDiv.children.item(0).textContent ="Comments are Off";
        showCmntOn.style = "visibility : hidden; height : 0cm";
        hideComntOn.style = "visibility : visible";
        cmntOptDiv.style="margin: unset; height: 1cm; padding-left: 7cm;";
        radioButtOn =false;
    }
})


// console.log(cmntOptDiv);