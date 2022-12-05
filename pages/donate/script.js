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

/*Amount panel handling */
let radioButtons = document.querySelectorAll(".button-wrapper");
let smallCircleAreas = document.querySelectorAll(".small-ring");
let bigCircleAreas = document.querySelectorAll(".big-ring");
let amountAreas = document.querySelectorAll(".amount");

let inputAmountMoney = document.querySelector(".amount-money input");

Array.from(radioButtons).forEach(item => {
    item.addEventListener("click", elem => {
        bigCircleAreas.forEach(el=>{ el.classList.remove('make-visible'); });
        smallCircleAreas.forEach(el=>{ el.classList.remove('make-visible'); });
        amountAreas.forEach(el=>{ el.style.color = "#333B41"; });

        item.querySelector(".small-ring").classList.add('make-visible');
        item.querySelector(".big-ring").classList.add('make-visible');
        item.querySelector(".amount").style.color = "rgba(254, 144, 19, 1)";

        let feedNum = item.querySelector(".amount");
        inputAmountMoney = document.querySelector(".amount-money input").value = feedNum.innerHTML.slice(1);
    })
})

inputAmountMoney.addEventListener("input", elem => {
    radioButtons.forEach(item => {

        if(inputAmountMoney.value === item.querySelector(".amount").innerHTML.slice(1)){
            bigCircleAreas.forEach(el=>{ el.classList.remove('make-visible'); });
            smallCircleAreas.forEach(el=>{ el.classList.remove('make-visible'); });
            amountAreas.forEach(el=>{ el.style.color = "#333B41"; });

            item.querySelector(".small-ring").classList.add('make-visible');
            item.querySelector(".big-ring").classList.add('make-visible');
            item.querySelector(".amount").style.color = "rgba(254, 144, 19, 1)";
        }
    });
})



if(window.innerWidth <1000 && window.innerWidth >=320){
    // document.querySelector(".six .small-ring").style.visibility = "visible";
    // document.querySelector(".six .big-ring").style.visibility = "visible";

    document.querySelector(".six .small-ring").classList.add('make-visible');
    document.querySelector(".six .big-ring").classList.add('make-visible');

}



/*//Amount panel handling */