
const audio = new Audio();
let isGamePlayOn = false;
const artbord = document.getElementById("art-board");
function handleEventlistenerKeyUp(event) {
  if (isGamePlayOn == false) return;
  const playerPres = event.key;
  const presentAlphabetElement = document.getElementById('present-alphabet')
  const presentAlphabet = presentAlphabetElement.innerText;
  const expectedAlphabet = presentAlphabet.toLowerCase(); 
  // console.log(expectedAlphabet)
  if (playerPres === 'Escape') {
    gameOver();
  }
  if (playerPres === expectedAlphabet) {
    audio.src = "../audio/success.mp3";
    audio.play();
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
    continuePlay();
  }
  else {
    audio.src = "../audio/wrong.mp3";
    audio.play();
    // const lifeElement = document.getElementById('present-life')
    // const lifeText = lifeElement.innerText;
    // const life = parseInt(lifeText);
    // const updateLife = life - 1;
    // lifeElement.innerText = updateLife;
    const life = getElementValueById('present-life');
    const updateLife = life - 1;
    const updateLifeColorPercentage = (updateLife * 100) / 10;
    artbord.style.background = `linear-gradient(white ${updateLifeColorPercentage}%,red)`;
    setElementValueById('present-life', updateLife);
    if (updateLife === 0) {
      gameOver()
        audio.src = ("../audio/game-over.mp3");
      audio.play();
       artbord.style.background = `linear-gradient(white 100%,red)`;
    }
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
  hideClass('final-score');
  showClass('play-ground');
  setElementValueById('present-life', 10);
  setElementValueById('present-score', 0)
  isGamePlayOn = true;
  continuePlay()
}
function gameOver() {
  isGamePlayOn = false;

  console.log('game over')
   hideClass('play-ground');
      showClass('final-score');
      const text = getElementValueById('present-score')
  setElementValueById('last-score', text)
  const element = getElementTextById('present-alphabet');
  removeBackgroundColor(element);

}