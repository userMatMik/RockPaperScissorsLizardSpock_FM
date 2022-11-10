import { createGameBoard } from "./dom-create-elements.js";
import { renderBattle } from "./create-result.js";

const possibleChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const winningCombinations = {
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    rock: ['scissors', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['scissors', 'rock'],
}

export let RPSstate = {
    playerScore: Number(localStorage.getItem('RPSPlayerScoreLS')) || 0,
    playerPick: null,
    AIPick: null,
    winner: null,
}

const setWinner = () => {
    const playerPick = RPSstate.playerPick;
    const aiPick = RPSstate.AIPick;

    if (playerPick === aiPick) {
        RPSstate = {
            ...RPSstate,
            winner: 'draw',
        }
    } else if( winningCombinations[RPSstate.playerPick].includes(aiPick)) {
        localStorage.setItem('RPSPlayerScoreLS', RPSstate.playerScore + 1)
        RPSstate = {
            ...RPSstate,
            playerScore: RPSstate.playerScore + 1,
            winner: 'player',
        }
    } else {
        localStorage.setItem('RPSPlayerScoreLS', RPSstate.playerScore - 1)
        RPSstate = {
            ...RPSstate,
            playerScore: RPSstate.playerScore - 1,
            winner : 'ai',
        }
    }
}

const setAIPick = () => {
    const randomPick = Math.floor(Math.random() * 3);
    
    RPSstate = {
        ...RPSstate,
        AIPick: possibleChoices[randomPick],
    }
}

const setPlayerPick = (button) => {
    RPSstate = {
        ...RPSstate,
        playerPick: button.dataset.choice,
    }
}

export const updateScore = () => {
    const scoreElement = document.querySelector('.score__points');
    scoreElement.innerText = RPSstate.playerScore;
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
}

const init = () => {
    createGameBoard();
    updateScore();
    eventListeners();
}
init();
