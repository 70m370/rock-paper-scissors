
/*
ROCK PAPER AND SCISSORS GAME
assignment is to do it using the console, i'll do a button to start to play it
so we dont have a problem while loading the page
*/


//global section

//dom section
const Rbutton = document.querySelector("#rock");
const Pbutton = document.querySelector("#paper");
const Sbutton = document.querySelector("#scissors");
const reply = document.querySelector("p");
const playerPointsDIV = document.querySelector(".player");
const cpuPointsDIV = document.querySelector(".cpu");

//game variables
const GameInstruments = ["rock", "paper", "scissors"];
let playerScore = 0;
let cpuScore = 0;

//functions

//random choice
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function StartGame(playerchoice){

    //variables
    const Computerchoice = GameInstruments[getRandomInt(3)];

    //game logic
    switch(playerchoice){

        case Computerchoice:
   
            reply.textContent = "TIE";
            break;

        case "rock":
            if(Computerchoice === "scissors"){
                playerScore++;
                reply.textContent = "YOU WON";
            }else {
                cpuScore++;
                reply.textContent = "YOU LOST";
            }
            break;

        case "paper":
            if(Computerchoice === "rock"){
                playerScore++;
                reply.textContent = "YOU WON";
            }else {
                cpuScore++;
                reply.textContent = "YOU LOST";
            }
            break;

        case "scissors":
            if(Computerchoice === "paper"){
                playerScore++;
                reply.textContent = "YOU WON";
            }else {
                cpuScore++;
                reply.textContent = "YOU LOST";
            }
            break;
    }

   //scoreboard update and game result
    playerPointsDIV.textContent = playerScore;
    cpuPointsDIV.textContent = cpuScore;

};

//get user input
function GetUserinput(){

    let UserInp = "";

    Rbutton.addEventListener("click", () => {
        UserInp = "rock";
        StartGame(UserInp);
    });

    Pbutton.addEventListener("click", () => {
        UserInp = "paper";
        StartGame(UserInp);
    });

    Sbutton.addEventListener("click", () => {
        UserInp = "scissors";
        StartGame(UserInp);
    });

};

//main
GetUserinput();