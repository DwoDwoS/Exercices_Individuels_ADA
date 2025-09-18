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

function afficherSapin(etages, hauteur_etage) {
  let espacement_max = etages - 1;
  let espaces = '';
  for (let i = 0; i <= espacement_max + hauteur_etage - 1; i++) {
    espaces += ' ';
  }
  console.log(espaces + '+');
  
  for (let etage = 0; etage < etages; etage++) {
    let pointe_offset = etage;
    let espacement = espacement_max - etage;
    
    afficherEtage(hauteur_etage, pointe_offset, espacement);
  }
}

console.log("=== Tests afficherSapin ===");
afficherSapin(3, 3);