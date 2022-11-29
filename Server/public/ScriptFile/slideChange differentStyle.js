const firstEl = document.querySelector("#first-sub-container");
const secEl = document.querySelector("#sec-sub-container");
const thirdEl = document.querySelector("#third-sub-container");
const fourthEl = document.querySelector("#fourth-sub-container");

const changeButtonEl = document.querySelector("#change");


const El = [fourthEl, thirdEl, secEl, firstEl];
let index = 0;

function valueSet(targetEl) {

    El[index].style = "animation-name: slide-out";


    setTimeout(() => {

        targetEl.style = "right: 50cm";
        index++;
        console.log("change-Slide");

        // if slide reach last start-over from first
        if (index > El.length - 1) {

            for (let i = 0; i < El.length; i++) {
                El[i].style = "right: 0cm";
            }

            console.log("hello " + index);
            index = 0;
        }

        if (index < El.length) valueSet(El[index]);


    }, 4000);

}

valueSet(El[index]);   //For auto slide-Change



function preSet(targetEl) {

    El[index].style = "animation-name: slide-out";

    setTimeout(() => {

        targetEl.style = "right: 50cm";
        index++;
        console.log("prev-Slide");

        // if (index < El.length){
        //     valueSet(El[index]);
        // }

    }, 4000);
}

let click=0;
// Back to previous slide
changeButtonEl.addEventListener("click", () => {
    // if (index < El.length)
    //     El[index].style = "right: 0cm";


    // index--;

    // El[index].style = "right: 0cm";

    // valueSet(El[index]);


    click++;


})


