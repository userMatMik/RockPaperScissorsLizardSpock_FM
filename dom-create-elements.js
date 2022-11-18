const createGameButton = (btnName, gameMode) => {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('choice-button', `choice-button--${btnName}`,  `choice-button--${btnName}--${gameMode}`)
    buttonElement.setAttribute('data-choice', `${btnName}`)

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('choice-button__image-container')

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', `./images/icon-${btnName}.svg`)
    imgElement.setAttribute('alt', `${btnName}`);
    imgContainer.appendChild(imgElement);
    buttonElement.appendChild(imgContainer);

    return buttonElement;
}

export const createGameBoard = ( { gameMode, possibleChoices }) => {
    const mainElement = document.querySelector('#main');
    const gameBoard = document.createElement('div');
    
    mainElement.innerHTML = "";
    
    gameBoard.classList.add('game-board', `game-board--${gameMode}`, 'moved-right')
    
    possibleChoices.forEach((choice) => {
        gameBoard.appendChild(createGameButton(choice, gameMode))
    })
   
    mainElement.appendChild(gameBoard);
    setTimeout(() => {
        gameBoard.classList.remove('moved-right');
    }, 100)   
}
