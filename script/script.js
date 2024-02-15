function handleEventlistenerKeyUp(event) {
  const playerPres = event.key;
  const presentAlphabetElement = document.getElementById('present-alphabet')
  const presentAlphabet = presentAlphabetElement.innerText;
  const expectedAlphabet = presentAlphabet.toLowerCase();
  // console.log(expectedAlphabet)
  if (playerPres === expectedAlphabet) {

    // update the score
    // const scoreElement = document.getElementById('present-score')
    // const scoreText = scoreElement.innerText;
    // const score = parseInt(scoreText);
    // const updateScore = score + 1;
    // scoreElement.innerText = updateScore;
    const score = getElementValueById('present-score')
    const updateScore = score + 1;
    setElementValueById('present-score',updateScore)
    removeBackgroundColor(expectedAlphabet);
    continuePlay() 
  }
  else {
    // const lifeElement = document.getElementById('present-life')
    // const lifeText = lifeElement.innerText;
    // const life = parseInt(lifeText);
    // const updateLife = life - 1;
    // lifeElement.innerText = updateLife;
    const life = getElementValueById('present-life');
    const updateLife = life - 1;
    setElementValueById('present-life', updateLife);
  }
  
}

document.addEventListener('keyup',handleEventlistenerKeyUp)

function continuePlay() {
  const alphabet = randomAlphabet();
  const presentAlphabet = document.getElementById('present-alphabet')
  presentAlphabet.innerText = alphabet;
  setBackgroundColor(alphabet);
}



function play() {
  hideClass('home');
  showClass('play-ground');
  continuePlay()
}