
/*
ROCK PAPER AND SCISSORS GAME
assignment is to do it using the console, i'll do a button to start to play it
so we dont have a problem while loading the page
*/

const button = document.querySelector("button");
const reply = document.querySelector("p");

function ButtonAction(){
    //receive input
    const UserInp = prompt("ROCK PAPER OR SCISSORS ? ");

    //print answer
    reply.textContent = `${UserInp}`;
}


//main
button.addEventListener("click", ButtonAction);