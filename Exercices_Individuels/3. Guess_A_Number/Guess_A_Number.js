// Etape 1:

randomNumber = window.prompt("Veuillez choisir un nombre, s'il vous plaît !");

let givenNumber = randomNumber;

// Etape 2:

function didIWin(givenNumber) {
    if (givenNumber < 22) {
    return "Plus grand";
    } 
    else if (givenNumber > 22) {
    return "Plus petit";
    }
    else {
    return "Bravo ! Vous avez deviné le nombre";
    }
}

alert(didIWin(givenNumber))

function gamePlay() {
}

gamePlay()
