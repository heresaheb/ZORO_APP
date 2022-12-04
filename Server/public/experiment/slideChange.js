const mainSubEl = document.querySelector("#main-sub-container");
// const prevEl = document.querySelector("#change-prev");
// const nextEl = document.querySelector("#change-next");

let playAuto = true;
let delay =true;
// let count =0;

// prevEl.addEventListener("click" , ()=>{
//     mainSubEl.style= "animation-play-state:running;";
//     playAuto = false;
//     mainSubEl.style ="transition-duration: 300ms";
//         if(count >= 4){
//             count=0;
//         }

//         mainSubEl.style = `transform: translate3d(${
//             ( 1365*count)}px, 0px, 0px)`;
//             console.log(count);
//         count++;
//             // mainSubEl.style= "animation-play-state:paused;";
// })

// nextEl.addEventListener("click" , ()=>{
//     mainSubEl.style= "animation-play-state:running;";
//     playAuto = false;
//     setTimeout(()=>{
//         mainSubEl.style = "animation-play-state:paused;";
//     },1200);
// })


function playPause () {

    if(playAuto){ // when true
        mainSubEl.style= "animation-play-state:running;";
        setTimeout(()=>{
            mainSubEl.style= "animation-play-state:paused;";
            setTimeout(()=>{
                if(delay) { 
                    mainSubEl.style= "animation-delay: 2s";
                    delay=false;
                     }
                playPause();
            } , 1213)
        }, 1193)
    }
}



playPause();


