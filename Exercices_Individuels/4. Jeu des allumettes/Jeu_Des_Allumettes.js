let matches = 50;
let playerCount = 2;
let currentPlayer = 1;

// On initie le jeu
function startGame() {
  playerCount = parseInt(document.getElementById("playerCount").value);
    if (isNaN(playerCount) || playerCount < 2) {
      alert("Veuillez entrer un nombre de joueurs valide (au moins 2).");
      return;
    }

    matches = 50;
    currentPlayer = 1;

    // On affiche les éléments en fonction
    document.getElementById("setup").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("matchesLeft").textContent = matches;
    document.getElementById("currentPlayer").textContent = `C'est au tour du Joueur ${currentPlayer}`;
    document.getElementById("winnerMsg").textContent = "";
    document.getElementById("errorMsg").textContent = "";
}

// Gestion des tours
function playTurn() {
  const INPUT = document.getElementById("moveInput");
  const CHOICE = parseInt(INPUT.value);
  const ERROR_MSG = document.getElementById("errorMsg");

    // Conditions précisant que ce n'est pas valide comme choix de nombre d'allumettes
    if (isNaN(CHOICE) || CHOICE < 1 || CHOICE > 6 || CHOICE > matches) {
      ERROR_MSG.textContent = `Entrée invalide. Tu dois retirer entre 1 et 6 allumettes, sans dépasser ${matches}.`;
      return;
    }

      // On soustrait le choix au nombre d'allumettes
      matches -= CHOICE;
      document.getElementById("matchesLeft").textContent = matches;
      ERROR_MSG.textContent = "";

      // Si l'on arrive à 0, on affiche le gagnant
      if (matches === 0) {
        document.getElementById("winnerMsg").textContent = `🎉 Joueur ${currentPlayer} a gagné !`;
        document.getElementById("currentPlayer").textContent = "";
        INPUT.disabled = true;
        return;
      }

      // Tour suivant, on fait jouer chaque joueur tour à tour
      currentPlayer = (currentPlayer % playerCount) + 1;
      document.getElementById("currentPlayer").textContent = `C'est au tour du Joueur ${currentPlayer}`;
      INPUT.value = "";
      INPUT.focus();
    }

    // Juste une fonction pour appliquer le bouton entrée pour aller plus vite sur le jeu
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
      playTurn();
  }
});