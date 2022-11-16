const createGameButton = (btnName) => {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('choice-button', `choice-button--${btnName}`)
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


export const createGameBoard = (choices, gameMode) => {
    const mainElement = document.querySelector('#main');

    console.log(choices)
    const gameBoard = document.createElement('div');
    gameBoard.classList.add('game-board', `game-board--${gameMode}`)
    
    choices.forEach((choice) => {
        gameBoard.appendChild(createGameButton(choice))
    })
   
    mainElement.appendChild(gameBoard);
}
