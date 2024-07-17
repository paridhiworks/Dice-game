const min = 1;
const max = 6;
let randomNum;

const button = document.getElementById('dice-btn');
const diceNumber = document.getElementById('dice-number');

button.onclick = function(){
    randomNum = Math.floor(Math.random() * max ) + min;
    diceNumber.textContent = randomNum;
}