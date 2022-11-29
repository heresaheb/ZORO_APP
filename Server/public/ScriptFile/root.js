const topBackEl = document.querySelector("#top-back");
const navBarEl = document.querySelector("#nav-bar1");
const searchEl = document.querySelector("#search-box");
const searchButtEl = document.querySelector("#search-button1");
// const logoEl = document.querySelector("#zoro-logo");
const logoContaintEl = document.querySelector("#logo-container");
const navOp = `<ul>
<li><a href="/home">Home</a></li>
<li><a href="/movies">Movies</a></li>
<li><a href="e">TV Series</a></li>
<li><a href="e">Most Popular</a></li>
<li><a href="e">Top Anime</a></li>
</ul>`;

// navButton available for only mobile users
if (window.innerWidth < 430 ) {
    let navButt = `
    <i class="fa fa-bars" id="nav-button" aria-hidden="true"></i>`;
    let navBarPrev = navBarEl.innerHTML;
    navBarEl.innerHTML = navButt + navBarPrev;

// if condition doesn't met then it will be always return null.
const navButtEL = document.querySelector("#nav-button");
const navOptionsEl = document.querySelector("#nav-options");

const topSearchEl = document.querySelector("#top-search-list");

let buttonClick = true;
const hide = "visibility: hidden";
const unHide  = " visibility: visible";

const logo = logoContaintEl.innerHTML;

        navButtEL.addEventListener("click", () => {

            if (buttonClick) {
                searchEl.style = hide;
                searchButtEl.style = hide;
                navOptionsEl.innerHTML=navOp;
                logoContaintEl.innerHTML=""; //to disable the logo anchor tag
                logoContaintEl.textContent="";
                topSearchEl.style="margin-top: 5cm";
                navOptionsEl.style="background-color: rgb(2, 1, 1)";
                buttonClick = false;
            }
            else{
                searchEl.style = unHide;
                searchButtEl.style = unHide;
                navOptionsEl.innerHTML = "";
                logoContaintEl.innerHTML=logo;
                navOptionsEl.style="background-color: none";
                topSearchEl.style="margin-top: 3cm";
                buttonClick = true; 
            }

        })

}

//nav-bar set for pc users
else{
    document.querySelector("#menu").innerHTML="";
    document.querySelector("#nav-options").innerHTML= navOp;
}


