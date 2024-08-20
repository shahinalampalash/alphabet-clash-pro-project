
function handleKeyBoardButtonPress(event) {
    // ki press korsi
    const playerPressed = event.key;

    // stop the game 
   if(playerPressed === 'Escape'){
    gameOver();
   }


    //    ki press korte bolse
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const alphabetElement = currentAlphabetElement.innerText;
    const expectedAlphabet = alphabetElement.toLowerCase();

    if (playerPressed === expectedAlphabet) {

        const currentScore = getElementByValue('current-score');
        const updateScore = currentScore + 1;
        setTextElementById('current-score', updateScore)


        hideBackgroundColorById(expectedAlphabet);
        continueGame()
    }
    else {
        const currentLife = getElementByValue('current-life');
        const updateLife = currentLife - 1;
        setTextElementById('current-life', updateLife)

        if (updateLife === 0) {
            gameOver();
        }
    }


}

document.addEventListener('keyup', handleKeyBoardButtonPress)

function continueGame() {
    // random number
    const alphabet = getARandomAlphabet();

    // show display
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    hideElement('home-part');
    hideElement('score-parts-section')
    showElement('playground-part')

    setTextElementById('current-life', 5)
    setTextElementById('current-score', 0)

    continueGame()
}
function gameOver() {
    hideElement('playground-part');
    showElement('score-parts-section');

    //    update final score
    const lastScore = getElementByValue('current-score');
       setTextElementById('show-score', lastScore);
    
       const currentAlphabet = getElementByTextId('current-alphabet')
       hideBackgroundColorById(currentAlphabet)
}