function afficherEtoiles(n) {
  let ligne = '';
  for (let i = 0; i < n; i++) {
    ligne += '*';
  }
  console.log(ligne);
}

console.log("=== Tests afficherEtoiles ===");
afficherEtoiles(2);
afficherEtoiles(5);