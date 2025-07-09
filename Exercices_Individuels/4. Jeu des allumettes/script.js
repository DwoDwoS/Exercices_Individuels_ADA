// Etape 1: Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste. Pour rappel, une nom de fonction doit décrire clairement ce que fait celle-ci.

// On setup le nombre d'allumettes à 50 au départ, comme demandé
// let matches = 50;

// Etape 2: Demander a l'utilisateur combien d'allumettes il souhaite retirer tant qu’il y a des allumettes dans le tas. Pour rappel, on a 50 allumettes au départ.

// On crée une fonction que l'on pourra appeler par la suite et qui retourne le nombre restant d'allumettes selon ce que l'on a retiré
// function removeMatches(left, numberOfMatchesToRemove) {
//   return left - numberOfMatchesToRemove;
// }

// // On crée une fonction jeu qui permet de lancer le code
// function play() {
// // On précise la quantité qu'il reste
//   let matchesLeft = 50;

//   // Tant que les allumettes sont supérieures à 0, on continue le jeu
//   while (matchesLeft > 0) {
//     let choice = parseInt(prompt(`Il reste ${matchesLeft} allumettes. Combien souhaites-tu en retirer, de 1 à 6 ?`));
    
//     // Vérification de la validité du choix, s'il rentre dans le delta entre 0 et 50 et que ce n'est pas supérieur à la quantité restante
//     while (isNaN(choice) || choice < 1 || choice > 6 || choice > matchesLeft) {
//     // On indique une erreur si ce n'est pas dans le bon delta en reprécisant le nombre d'allumettes restantes    
//       choice = parseInt(prompt(`Choix invalide. Tu peux retirer seulement de 1 à 6 allumettes sans dépasser ${matchesLeft}. Réessaie :`));
//     }
//     // On indique au jeu ce qu'il doit faire avec l'information à savoir soustraire le nombre donné à la quantité
//     matchesLeft = removeMatches(matchesLeft, choice);
//     // On affiche dans la console pour vérifier tout ça
//     console.log(matchesLeft);
//   }
//   // Une alerte pour signifier qu'il n'y a plus d'allumette et donc que le joueur a gagner
//   alert("Bravo ! Tu as retiré la dernière allumette et tu as gagné !");
// }
// // On enclenche la fonction "play"
// play();

// Etape 4: Rajout d'un deuxième joueur

// Fonction pour retirer les allumettes
function removeMatches(left, numberOfMatchesToRemove) {
  return left - numberOfMatchesToRemove;
}

// Fonction de jeu à deux joueurs
function playWithTwoPlayers() {
  let matchesLeft = 50;
  let currentPlayer = 1;

  while (matchesLeft > 0) {
    let choice = parseInt(prompt(`Joueur ${currentPlayer}, il reste ${matchesLeft} allumettes. Combien souhaites-tu en retirer, de 1 à 6 ?`));

    // Validation du choix
    while (isNaN(choice) || choice < 1 || choice > 6 || choice > matchesLeft) {
      choice = parseInt(prompt(`Choix invalide, Joueur ${currentPlayer}. Tu peux retirer entre 1 et 6 allumettes sans dépasser ${matchesLeft}. Réessaie :`));
    }

    // On indique au jeu ce qu'il doit faire avec l'information à savoir soustraire le nombre donné à la quantité
    matchesLeft = removeMatches(matchesLeft, choice);
    console.log(`Joueur ${currentPlayer} a retiré ${choice} allumette(s). Il en reste ${matchesLeft}.`);

    if (matchesLeft === 0) {
      alert(`Félicitations Joueur ${currentPlayer}, tu as gagné !`);
      break;
    }

    // Changer de joueur (1 → 2, 2 → 1)
    currentPlayer = currentPlayer === 1 ? 2 : 1;
  }
}

// Lance le jeu à deux joueurs
playWithTwoPlayers();