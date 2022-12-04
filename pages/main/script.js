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


/*Carousel handling in PETS section*/
let cardOne = document.getElementsByClassName("card1")[0];
let cardTwo = document.getElementsByClassName("card2")[0];
let cardThree = document.getElementsByClassName("card3")[0];

let cardFour = document.getElementsByClassName("card4")[0];
let cardFive = document.getElementsByClassName("card5")[0];
let cardSix = document.getElementsByClassName("card6")[0];


let toRightButton = document.getElementsByClassName("arrow right")[0];
let toLeftButton = document.getElementsByClassName("arrow left")[0];

// returns a random number: 0 or 1
const min = 0;
const max = 2;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



const moveRight = () => {
    /* Random shuffle */
    cardOne.style.order = getRandomInt(min, max);
    cardTwo.style.order = getRandomInt(min, max);
    cardThree.style.order = getRandomInt(min, max);
    cardFour.style.order = getRandomInt(min, max);
    cardFive.style.order = getRandomInt(min, max);
    cardSix.style.order = getRandomInt(min, max);
}

const moveLeft = () => {
    /* Random shuffle */
    cardOne.style.order = getRandomInt(min, max);
    cardTwo.style.order = getRandomInt(min, max);
    cardThree.style.order = getRandomInt(min, max);
    cardFour.style.order = getRandomInt(min, max);
    cardFive.style.order = getRandomInt(min, max);
    cardSix.style.order = getRandomInt(min, max);
}


toRightButton.addEventListener("click", moveRight);
toRightButton.addEventListener("click", function(){
    let petsCardsContainer = document.getElementsByClassName("pets-cards-container")[0];
    petsCardsContainer.classList.add("fade");

    const myTimeout = setTimeout(() => petsCardsContainer.classList.remove("fade"), 150);
    console.log("myTimeout", myTimeout);

});

toLeftButton.addEventListener("click", moveLeft);
toLeftButton.addEventListener("click", function(){
    let petsCardsContainer = document.getElementsByClassName("pets-cards-container")[0];
    petsCardsContainer.classList.add("fade");

    const myTimeout = setTimeout(() => petsCardsContainer.classList.remove("fade"), 150);
    console.log("myTimeout", myTimeout);

});
/*//Carousel handling in PETS section*/



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