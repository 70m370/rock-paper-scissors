
/*
ROCK PAPER AND SCISSORS GAME
assignment is to do it using the console, i'll do a button to start to play it
so we dont have a problem while loading the page
*/


//global section
const button = document.querySelector("button");
const reply = document.querySelector("p");

const GameInstruments = ["rock", "paper", "scissors"];

let playerScore = 0;
let cpuScore = 0;

const playerPointsDIV = document.querySelector(".player");

const cpuPointsDIV = document.querySelector(".cpu");
//functions

//random choice
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

//get user input
function GetUserinput(){

    let UserInp = prompt("ROCK PAPER OR SCISSORS ? ");

    while(UserInp === null || UserInp.trim() === ""){
        UserInp = prompt("ROCK PAPER OR SCISSORS ? ");
    }

    return UserInp;
};

//check user input
function CheckUserinput(){

    let UserInp = GetUserinput();
    let ValidInput = false;

    do{
        for(i = 0; i < 3; i++){
            if(UserInp.toLowerCase() == GameInstruments[i]){
                ValidInput = true;
            }
        }
    }while(ValidInput === false);

    return UserInp;
};


function StartGame(){

    //variables
    const playerchoice = CheckUserinput();
    const Computerchoice = GameInstruments[getRandomInt(3)];

    //game logic
    switch(playerchoice){

        case Computerchoice:
            //just to be sure
            //console.log("TIE");
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


//main
button.addEventListener("click", StartGame);