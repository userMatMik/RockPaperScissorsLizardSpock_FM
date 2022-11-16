import { RPSstate } from "./game-logic.js";
import { updateScore } from "./game-logic.js";


const handleAiPick = () => {
    const aiPickElement = document.querySelector('#ai-pick');
    const playerPickContainerElement = document.querySelector('#player-pick-container');
    const aiPickContainerElement = document.querySelector('#ai-pick-container');
    setTimeout(() => {
        aiPickElement.classList.remove('pick__placeholder')
        displayAiPick();
        createResult();
        playerPickContainerElement.classList.add('move-player-pick');
        aiPickContainerElement.classList.add('move-ai-pick');
        updateScore();
        addWinnerClass();
    }, 3000)
}

const addWinnerClass = () => {
    const pickElements = document.querySelectorAll('.pick');
    if (RPSstate.winner === 'draw') {
         return
     } else if (RPSstate.winner === 'player') {
        pickElements[0].classList.add('winner')
    } else {
        pickElements[1].classList.add('winner')
    }
}

const setResultText = () => {
    if (RPSstate.winner === 'draw') {
        return 'Draw'
    } else if (RPSstate.winner === 'player') {
        return 'You win'
    } else {
        return 'You lost'
    }
}

const createResult = () => {
    const resultsContainer = document.querySelector('.results');

    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result')

    const resultText = document.createElement('span');
    resultText.classList.add('result__text');
    resultText.innerText = setResultText();

    const playAgainBtn = document.createElement('button');
    playAgainBtn.classList.add('result__button');
    playAgainBtn.innerText = "Play again";

    resultContainer.appendChild(resultText);
    resultContainer.appendChild(playAgainBtn);

    resultsContainer.appendChild(resultContainer);

    playAgain()
    return resultsContainer;
}

const displayAiPick = () => {
    const resultElement = document.querySelector('#ai-pick');
    resultElement.classList.add('pick', `pick--${RPSstate.AIPick}`);

    const titleElement = document.querySelector('#ai-title')
    titleElement.innerText = "House picked";

    const resultImgContainerElement = document.createElement('div');
    resultImgContainerElement.classList.add('pick__img-container', 'pick__img-placeholder');

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', `./images/icon-${RPSstate.AIPick}.svg`);
    imgElement.setAttribute('alt', RPSstate.AIPick);

    resultImgContainerElement.appendChild(imgElement)

    resultElement.appendChild(resultImgContainerElement);

}

const createAiPick = (str) => {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('pick-container');
    resultContainer.setAttribute('id', 'ai-pick-container');

    const resultTitleElement = document.createElement('p');
    resultTitleElement.setAttribute('id', 'ai-title');
    resultTitleElement.classList.add('pick-title');
    resultTitleElement.innerText = str;

    const resultElement = document.createElement('div');
    resultElement.setAttribute('id', 'ai-pick');
    resultElement.classList.add('pick', 'pick__placeholder');

    resultContainer.appendChild(resultTitleElement);
    resultContainer.appendChild(resultElement);

    return resultContainer;
}

const createPlayerPick = (str) => {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('pick-container');
    resultContainer.setAttribute('id', 'player-pick-container');

    const resultTitleElement = document.createElement('p');
    resultTitleElement.classList.add('pick-title');
    resultTitleElement.innerText = str;

    const resultElement = document.createElement('div');
    resultElement.classList.add('pick', `pick--${RPSstate.playerPick}`);

    const resultImgContainerElement = document.createElement('div');
    resultImgContainerElement.classList.add('pick__img-container');

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', `./images/icon-${RPSstate.playerPick}.svg`);
    imgElement.setAttribute('alt', RPSstate.playerPick);

    resultImgContainerElement.appendChild(imgElement);
    
    resultElement.appendChild(resultImgContainerElement);

    resultContainer.appendChild(resultTitleElement);
    resultContainer.appendChild(resultElement);

    return resultContainer;
}

export const playAgain = () => {
    document.querySelector('.result__button').addEventListener('click', () => {
        hideBattle();
        showGameBoard();
    })
   
}

const showGameBoard = () => {
    const gameBoardElement = document.querySelector('.game-board');
    gameBoardElement.classList.remove('hidden');
    setTimeout(() => {
        gameBoardElement.classList.remove('move-left');
    }, 100)
    
}

const hideBattle = () => {
    const battleElement = document.querySelector('.results');
    battleElement.classList.remove('slide-left');
    setTimeout(() => {
        battleElement.remove();
    } , 500)

}

const hideGameBoard = () => {
    const gameBoardElement = document.querySelector('.game-board');
    gameBoardElement.classList.add('move-left');
    setTimeout(() => {
        gameBoardElement.classList.add('hidden')
    }, 500)
}

const showBattle = () => {
    const battleElement = document.querySelector('.results');
    battleElement.classList.add('slide-left');
}

export const renderBattle = () => {
    const mainElement = document.querySelector('#main');

    const battleElement = document.createElement('div');
    battleElement.classList.add('results');

    battleElement.appendChild(createPlayerPick('You picked'));
    battleElement.appendChild(createAiPick('House is picking...'));

    mainElement.appendChild(battleElement);

    setTimeout(() => {
        hideGameBoard();
        showBattle();
    }, 100);
    handleAiPick();
}