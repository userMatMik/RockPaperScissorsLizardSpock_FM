const createGameButton = (btnName) => {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('choice-button', `choice-button--${btnName}`)
    buttonElement.setAttribute('alt', `${btnName}`)
    buttonElement.setAttribute('data-choice', `${btnName}`)

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('choice-button__image-container')

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', `./images/icon-${btnName}.svg`)
    imgContainer.appendChild(imgElement);
    buttonElement.appendChild(imgContainer);

    return buttonElement;
}

const createGameBoard = () => {
    const mainElement = document.querySelector('#main');

    const gameBoard = document.createElement('div');
    gameBoard.classList.add('game-board')
    const boardBackground = document.createElement('img');
    boardBackground.setAttribute('src', './images/bg-triangle.svg');

    gameBoard.appendChild(boardBackground);
    
    gameBoard.appendChild(createGameButton('paper'));
    gameBoard.appendChild(createGameButton('rock'));
    gameBoard.appendChild(createGameButton('scissors'));

    mainElement.appendChild(gameBoard);
}


createGameBoard()
