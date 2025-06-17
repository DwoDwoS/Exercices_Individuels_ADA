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

let result = givenNumber;

alert(didIWin(givenNumber))

function gamePlay(statement) {
    if(result == 22) {
        return True;
    } 
    else{
        return False;
    }
}

alert(gamePlay(result))
