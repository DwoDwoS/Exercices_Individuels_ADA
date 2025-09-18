function afficherEtoiles(n) {
  let ligne = '';
  for (let i = 0; i < n; i++) {
    ligne += '*';
  }
  console.log(ligne);
}

function afficherTriangleDroite(n) {
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      console.log('\\');
    } else {
      let ligne = '';
      for (let j = 0; j < i; j++) {
        ligne += '*';
      }
      ligne += '\\';
      console.log(ligne);
    }
  }
}

console.log("=== Tests afficherTriangleDroite ===");
afficherTriangleDroite(5);