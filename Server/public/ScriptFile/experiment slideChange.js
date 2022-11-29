const firstEl = document.querySelector("#first-sub-container");
const secEl = document.querySelector("#sec-sub-container");
const thirdEl = document.querySelector("#third-sub-container");
const fourthEl = document.querySelector("#fourth-sub-container");

// const changeButtonEl = document.querySelector("#change");


const El = [fourthEl, thirdEl, secEl, firstEl];
let index = 0;

function valueSet(targetEl) {

    El[index].style = "visibility: visible; animation-name: slide-in;";

    setTimeout(() => {

        targetEl.style = "visibility: hidden;";
        index++;

        // if slide reach last start-over from first
        if (index > El.length - 1) {
            for (let i = 0; i < El.length; i++) {
                El[i].style = "right: -50cm; visibility: hidden;";
            }
            index = 0;
        }
        if (index < El.length) valueSet(El[index]); //For auto slide-Change

    }, 7400);

}

valueSet(El[index]);   //For First slide-Change


// let click=0;
// Back to previous slide

// changeButtonEl.addEventListener("click", () => {
//     if (index < El.length)
//         El[index].style = "right: 0cm";


//     index--;

//     El[index].style = "right: 0cm";

//     valueSet(El[index]);


//     click++;


// })


