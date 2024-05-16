
/*
ROCK PAPER AND SCISSORS GAME
assignment is to do it using the console, i'll do a button to start to play it
so we dont have a problem while loading the page
*/


//global section
const button = document.querySelector("button");
const reply = document.querySelector("p");

//functions
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };
  

//game logic

function ButtonAction(){
    //receive input
    const UserInp = prompt("ROCK PAPER OR SCISSORS ? ");

    //game logic

    const GameInstruments = ["rock", "paper", "scissors"];

    const Computerchoice = GameInstruments[getRandomInt(3)];

    if(UserInp.toLowerCase() === "rock"){
            console.log("we got a rock  ");
        } else {
            console.log("ain't no rock here");
        }
    
    console.log(`\\n testing stuff: ${Computerchoice}`);    
    //print answer
    reply.textContent = `${UserInp}`;
};


//main
button.addEventListener("click", ButtonAction);