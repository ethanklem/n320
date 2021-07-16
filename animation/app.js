
//start function which adds the body class for the animation
function start(event) {
    event.target.classList.add("body");
}

//creates new header div with title and adds class
let newHeader = document.createElement("div");
newHeader.classList.add("title");
newHeader.innerHTML = "<h1> Animation Lab</h1>";
title.appendChild(newHeader);

//creates new rectangle div and adds rectangle class
let newRect = document.createElement("div");
newRect.classList.add("rectangle");
rect.appendChild(newRect);




//loop 6 cards for gallery
for (i = 0; i < 6; i++) {
    //new card div
    let newCard = document.createElement("div");
    //add the card class
    newCard.classList.add("card");

    //event listners for hovering on and off, and clicking
    newCard.addEventListener("mouseover", onHover);
    newCard.addEventListener("mouseout", offHover);
    newCard.addEventListener("click", clickCard);


    //adds newCard
    gallery.appendChild(newCard);
}

//adds oncard class for animation
function onHover(event) {
    event.target.classList.add("oncard");
}

//adds offcard class for animation
function offHover(event) {
    event.target.classList.add("offcard");
}


//adds clickcard class for animation
function clickCard(event) {
    event.target.classList.add("clickcard");
}


