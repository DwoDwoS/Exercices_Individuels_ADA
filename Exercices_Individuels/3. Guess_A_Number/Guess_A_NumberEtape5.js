let givenNumber;

// Boucle jusqu'à ce que le joueur entre un nombre valide
do {
    givenNumber = parseInt(window.prompt("Veuillez choisir un nombre entre 0 et 50, s'il vous plaît !"));
} while (isNaN(givenNumber) || givenNumber < 0 || givenNumber > 50);
let guessNumber = document.querySelector('.player2');
let winnerMessage = "Félicitations, vous avez réussi ! Votre nombre de tentatives est de : ";
let loserMessage = "Désolé, ce n'est pas le bon nombre, veuillez recommencer ! Votre nombre de tentatives est de : ";

const validateNumber = document.getElementById('submit');
let count = 0;

function didIWin(numberToGuess, answer) {
    count++;
    guessNumber.style.display = 'block';
    if (numberToGuess === answer) {
        document.body.innerHTML = `<p>${winnerMessage}${count}</p>`;
    } else {
        guessNumber.innerHTML = `<p>${loserMessage}${count}</p>`;
    }
}

validateNumber.addEventListener('click', gamePlay);

function gamePlay() {
    let inputValue = parseInt(document.getElementById('number').value);
    if (!isNaN(inputValue)) {
        didIWin(inputValue, givenNumber);
    }
}
