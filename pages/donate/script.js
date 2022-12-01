/* Hamburger menu handling */
let divHamburgerMenu = document.querySelector(".hamburger-menu");
divHamburgerMenu.addEventListener("click", hamburgerMenuHandler);

let divOverlay = document.querySelector(".overlay");
divOverlay.addEventListener("click", closeHamburgerMenu);

function hamburgerMenuHandler(e){
    let divHamburgerNav = document.querySelector("nav.hamburger-nav");

    if(divHamburgerNav.style.display === "block"){
        divHamburgerNav.style.display = "none";
        divOverlay.classList.remove("active");
    } else {
        divHamburgerNav.style.display = "block";
        divOverlay.classList.add("active");
    }
}


function closeHamburgerMenu(e){
    let divHamburgerNav = document.querySelector("nav.hamburger-nav");

    if(divHamburgerNav.style.display === "block"){
        divHamburgerNav.style.display = "none";
        divOverlay.classList.remove("active");
    }
}
/*// Hamburger menu handling */