/* Hamburger menu handling in HEADER section**/
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
/*// Hamburger menu handling in HEADER section*/


/*Popup handling in TESTIMONIALS section*/

// Get the card modal windows
let modalWindows = document.querySelectorAll(".card-modal-window"); //NodeList
let modalWindowsArr = [... modalWindows];
// console.log(modalWindowsArr);

// Get the cards that opens the modal
let cards = document.querySelectorAll(".testimonials-card"); //NodeList
let cardsArr = [... cards].filter((v, index) => (index % 2) == 0);
// console.log(cardsArr);

// Get the element that closes the modal
let modalWindowsCloseButtons = document.querySelectorAll(".modal-close-button"); //NodeList
let modalWindowsCloseButtonsArr = [... modalWindowsCloseButtons];
// console.log(modalWindowsCloseButtonsArr);

// When the user clicks the card review, open the modal window
cardsArr.forEach(function(card,index){
        card.addEventListener("click", function(){
            if(window.innerWidth < 1000){
                modalWindowsArr[index].style.display = "block";
            }
        })
});

// When the user clicks on the close button(x), close the modal
modalWindowsCloseButtonsArr.forEach(function(btn, index){
        btn.addEventListener("click", function(){
            if(window.innerWidth < 1000){
                modalWindowsArr[index].style.display = "none";
            }
        })
    }
)

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    modalWindows.forEach(function(modalWindow, index){
        if(window.innerWidth < 1000){
            if (event.target == modalWindow) {
                modalWindow.style.display = "none";
            }
        }
    })
}




/*// Popup handling in TESTIMONIALS section*/