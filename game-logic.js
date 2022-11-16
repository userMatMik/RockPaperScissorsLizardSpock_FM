import { createGameBoard } from "./dom-create-elements.js";
import { renderBattle } from "./create-result.js";

export const possibleChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const winningCombinations = {
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    rock: ['scissors', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['scissors', 'rock'],
}

// let playerScoreLS = playerScoreLSKey;

export let RPSstate = {
    playerScore: Number(localStorage.getItem('RPSPlayerScoreLS')) || 0,
    playerPick: null,
    AIPick: null,
    winner: null,
}

export const setWinner = () => {
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

export const setAIPick = () => {
    const randomPick = Math.floor(Math.random() * 3);
    
    RPSstate = {
        ...RPSstate,
        AIPick: possibleChoices[randomPick],
    }
}

export const setPlayerPick = (button) => {
    RPSstate = {
        ...RPSstate,
        playerPick: button.dataset.choice,
    }
}

export const updateScore = () => {
    const scoreElement = document.querySelector('.score__points');
    scoreElement.innerText = RPSstate.playerScore;
}
