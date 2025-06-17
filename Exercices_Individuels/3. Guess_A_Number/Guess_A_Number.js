// Etape 1:

// randomNumber = window.prompt("Veuillez choisir un nombre, s'il vous plaît !");

// let givenNumber = randomNumber;

// // Etape 2:

// function didIWin(givenNumber) {
//     if (givenNumber < 22) {
//     return "Plus grand";
//     } 
//     else if (givenNumber > 22) {
//     return "Plus petit";
//     }
//     else {
//     return "Bravo ! Vous avez deviné le nombre";
//     }
// }

// let result = givenNumber;

// alert(didIWin(givenNumber))

// // Etape 3:

// function gamePlay(statement) {
//     if(result == 22) {
//         return True;
//     } 
//     else {
//         return False;
//     }
// }

// alert(gamePlay(result))

// Etape 3:
let randomNumber = window.prompt("Veuillez choisir un nombre, s'il vous plaît !");

function didIWin(givenNumber) {
    if (givenNumber == 22) {
        return true;
    } 
    else {
        return false;
    }
}

function gamePlay() {
    while (didIWin(randomNumber) == false) {
        randomNumber = window.prompt("Veuillez choisir un nombre, s'il vous plaît !");
    }
}

gamePlay()