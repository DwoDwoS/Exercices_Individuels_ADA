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
// let randomNumber = window.prompt("Veuillez choisir un nombre, s'il vous plaît !");

// function didIWin(givenNumber) {
//     if (givenNumber == 22) {
//         return true;
//     } 
//     else {
//         return false;
//     }
// }

// function gamePlay() {
//     while (didIWin(randomNumber) == false) {
//         randomNumber = window.prompt("Veuillez choisir un nombre, s'il vous plaît !");
//     }
// }

// gamePlay()

// Etape 4: 

// Créer une fonction qui demande au joueur 1 de fournir un nombre à deviner compris entre 0 et 50 tant qu’il ne respecte pas ce range.
// La fonction didIWin doit prendre désormais un autre paramètre, le nombre à deviner.
// Reprenez la logique 1, 2 et 3 pour gérer la partie et lui indiquer s’il doit continuer à jouer ou s’il a gagné.

// Etape 3:

let randomNumber = parseInt(window.prompt("Veuillez choisir un nombre entre 0 et 50, s'il vous plaît !"));

let givenNumber = parseInt(window.prompt("Veuillez trouver le nombre entre 0 et 50 que le joueur 1 a choisis !"));

function didIWin(numberToGuess,answer) {
    if (numberToGuess == answer) {
        alert("Félicitations ! Vous avez trouvé le bon nombre !");
        return true;
    } 
    else {
        alert("Ce n'est pas bon, essayes encore !") ;
        return false;
    }   
}

function gamePlay() {
    while(didIWin(randomNumber, givenNumber) == false) {
        randomNumber = window.prompt("Veuillez choisir un nombre entre 0 et 50, s'il vous plaît !");
    }
}

gamePlay();
