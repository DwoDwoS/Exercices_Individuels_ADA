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

// let randomNumber = parseInt(window.prompt("Veuillez choisir un nombre entre 0 et 50, s'il vous plaît !"));

// let givenNumber = parseInt(window.prompt("Veuillez trouver le nombre entre 0 et 50 que le joueur 1 a choisis !"));

// function didIWin(numberToGuess,answer) {
//     if (numberToGuess == answer) {
//         alert("Félicitations ! Vous avez trouvé le bon nombre !");
//         return true;
//     } 
//     else {
//         alert("Ce n'est pas bon, essayes encore !") ;
//         return false;
//     }   
// }

// function gamePlay() {
//     while(didIWin(randomNumber, givenNumber) == false) {
//         randomNumber = window.prompt("Veuillez choisir un nombre entre 0 et 50, s'il vous plaît !");
//     }
// }

// gamePlay();

// Etape 6: 

// Si le nombre proposé par l’utilisateur est plus petit que le nombre à deviner, alors vous changerez le range minimal. Ce ne sera plus 10 mais le dernier nombre proposé. Attention si le nombre proposé est en dessous du range minimal, cela ne sert à rien de le changer.

// Ex : 12 < ? < 45, si le nombre proposé est 10, on ne change pas le range. Mais on peut afficher une alert pour indiquer que le nombre proposé n’est pas dans le range.

// Même chose si le nombre est supérieur.


let givenNumber, currentMin, currentMax, count;
let inputField, message, inputRangeParagraph, submitBtn, restartBtn;

// Initialisation du jeu
function initGame() {
    // Demande au joueur 1
    do {
        givenNumber = parseInt(prompt("Joueur 1 : choisissez un nombre entre 0 et 50, s'il vous plaît !"));
    } while (isNaN(givenNumber) || givenNumber <= 0 || givenNumber >= 50);

    // Réinitialise l’état
    currentMin = 0;
    currentMax = 50;
    count = 0;

    // Réaffiche les bons éléments
    message.style.display = "none";
    message.innerHTML = "";
    restartBtn.style.display = "none";
    submitBtn.disabled = false;

    updateRangeDisplay();
}

// Met à jour le paragraphe HTML avec les bornes dynamiques
function updateRangeDisplay() {
    const min = currentMin;
    const max = currentMax;

    inputRangeParagraph.innerHTML = `${min} < <input id="number" type="number" min="${min + 1}" max="${max - 1}" /> < ${max}`;

    // Réassigne l'input
    inputField = document.getElementById("number");

    // Ajoute un support pour appuyer sur "Entrée"
    inputField.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            gamePlay();
        }
    });
}

// Fonction de jeu principal
function gamePlay() {
    const value = parseInt(inputField.value.trim());
    message.style.display = "block";
    message.innerHTML = "";

    if (isNaN(value)) {
        message.innerHTML = `❗ Veuillez entrer un nombre valide.`;
        return;
    }

    if (value <= currentMin || value >= currentMax) {
        message.innerHTML = `⚠️ Le nombre est hors de la plage actuelle : ${currentMin} < ? < ${currentMax}`;
        return;
    }

    count++;

    if (value === givenNumber) {
        inputRangeParagraph.innerHTML = "";
        message.innerHTML = `<p>🎉 Bravo ! Trouvé en ${count} tentative(s) !</p>`;
        submitBtn.disabled = true;
        restartBtn.style.display = "inline-block";
        return;
    }

    // Met à jour la plage dynamique
    if (value < givenNumber && value > currentMin) {
        currentMin = value;
    } else if (value > givenNumber && value < currentMax) {
        currentMax = value;
    }

    updateRangeDisplay();
    message.innerHTML = `❌ Mauvais nombre. Tentative n°${count}`;
    inputField.value = "";
}

// Initialisation après chargement DOM
window.addEventListener("DOMContentLoaded", () => {
    // Sélection des éléments
    inputRangeParagraph = document.getElementById("input-range-paragraph");
    message = document.querySelector(".player2");
    submitBtn = document.getElementById("submit");
    restartBtn = document.getElementById("restart");

    // Bouton Valider
    submitBtn.addEventListener("click", gamePlay);

    // Bouton Rejouer
    restartBtn.addEventListener("click", initGame);

    // Lancer première partie
    initGame();
});





