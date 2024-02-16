function hideClass(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('hidden')
}
function showClass(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}
function randomAlphabet() {
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabet = alphabetString.split('');
  const randomMath = Math.random() * 25;
  const index = Math.round(randomMath);
  const randomAlphabet = alphabet[index];
  return randomAlphabet;
}
function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}
function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const elementValue = parseInt(elementText);
  return elementValue;
}
function setElementValueById(elementId,value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function setBackgroundColor(elementId) {
  const elements = document.getElementById(elementId);
  elements.classList.add('bg-orange-400');
}

function removeBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('bg-orange-400');
}