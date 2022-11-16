import { createGameBoard } from "./dom-create-elements.js";
import { playAgain, renderBattle } from "./create-result.js";
import { RPSstate } from "./game-logic.js";
import { updateScore } from "./game-logic.js";
import { setPlayerPick } from "./game-logic.js";
import { setAIPick } from "./game-logic.js";
import { setWinner } from "./game-logic.js";


const playRPS = () => {
    const possibleChoices = ['rock', 'paper', 'scissors'];
    const playerScoreLSKey = "playerScoreRPS"
    createGameBoard(possibleChoices, 'rps')
    updateScore();
    eventListeners();
} 

const playRPSLS = () => {
    const possibleChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const playerScoreLSKey = "playerScoreRPSLS"
    createGameBoard(possibleChoices, 'rpsls')
    updateScore();
    eventListeners();
} 


const eventListeners = () => {
    document.querySelectorAll('.choice-button').forEach((button) => {
        button.addEventListener('click', () => {
            setPlayerPick(button);
            setAIPick();
            setWinner();
            renderBattle();
        })
    })
    const rpsLogo = document.querySelector('#rps');
    const rpslsLogo = document.querySelector('#rpsls');
    rpsLogo.addEventListener('click', () => {
        rpsLogo.classList.add('hidden');
        rpslsLogo.classList.remove('hidden');
        playRPSLS();
    })
    rpslsLogo.addEventListener('click', () => {
        rpslsLogo.classList.add('hidden');
        rpsLogo.classList.remove('hidden');
        playRPS();
    })
}

const init = () => {
    playRPS()
    updateScore();
    eventListeners();
}
init();