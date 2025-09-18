function afficherEtage(hauteur, pointe_offset, espacement) {
  
  for (let i = pointe_offset; i < pointe_offset + hauteur; i++) {
    let ligne = '';
    
    for (let e = 0; e < espacement; e++) {
      ligne += ' ';
    }
    
    let hauteur_max = pointe_offset + hauteur;
    for (let j = 0; j < hauteur_max - 1 - i; j++) {
      ligne += ' ';
    }
    
    ligne += '/';
    
    for (let k = 0; k < i; k++) {
      ligne += '*';
    }
    
    ligne += '|';
    
    for (let k = 0; k < i; k++) {
      ligne += '*';
    }
    
    ligne += '\\';
    
    console.log(ligne);
  }
}

console.log("=== Tests afficherEtage avec alignement ===");
afficherEtage(3, 0, 3);
afficherEtage(3, 1, 2);
afficherEtage(3, 2, 1);
afficherEtage(3, 3, 0);