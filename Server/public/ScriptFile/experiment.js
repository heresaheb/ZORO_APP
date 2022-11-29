const firstEl = document.querySelector("#first");
const secEl = document.querySelector("#second");
const thirdEl = document.querySelector("#third");
const fourthEl = document.querySelector("#fourth");

const firstContainer = document.querySelector("#first-sub-container");
const secContainer = document.querySelector("#sec-sub-container");
const thirdContainer = document.querySelector("#third-sub-container");
const fourthContainer = document.querySelector("#fourth-sub-container");

const changeButtonEl = document.querySelector("#change");

const El = [fourthEl, thirdEl, secEl, firstEl];
const container = [fourthContainer, thirdContainer, secContainer, firstContainer];


for (let i = 0; i < container.length; i++) {
    container[i].style = "visibility: hidden";
}



let index = 0;

function ImageSet(targetEl) {
    container[index].style ="visibility: visible";
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

        if (index < El.length) ImageSet(El[index]);


    }, 4000);

}

let ind=0;
function valueSet(targetEl) {
    targetEl.style = "animation-name: slide-out";


    setTimeout(() => {

        targetEl.style = "visibility: hidden";
        ind++;
        console.log("change-Slide");

        // if slide reach last start-over from first
        if (ind > container.length - 1) {

            for (let i = 0; i < container.length; i++) {
                container[i].style = "visibility: hidden";
            }

            console.log("container " + ind);
            ind = 0;
        }

        if (ind < container.length) valueSet(container[ind]);


    }, 4000);

}


valueSet(container[ind]);

ImageSet(El[index]);   //For auto slide-Change





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

let click = 0;
// Back to previous slide
changeButtonEl.addEventListener("click", () => {
    // if (index < El.length)
    //     El[index].style = "right: 0cm";


    // index--;

    // El[index].style = "right: 0cm";

    // valueSet(El[index]);


    click++;


})


