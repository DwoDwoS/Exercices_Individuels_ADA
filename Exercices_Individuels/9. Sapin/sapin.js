function afficherEtage(hauteur, pointe_offset, espacement, avec_decorations = false) {
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
      if (avec_decorations && Math.random() < 0.2) {
        ligne += Math.random() < 0.5 ? 'o' : '+';
      } else {
        ligne += '*';
      }
    }
    
    ligne += '|';
    
    for (let k = 0; k < i; k++) {
      if (avec_decorations && Math.random() < 0.2) {
        ligne += Math.random() < 0.5 ? 'o' : '+';
      } else {
        ligne += '*';
      }
    }
    
    ligne += '\\';
    
    console.log(ligne);
  }
}

function afficherTronc(largeur_tronc, hauteur_tronc, espacement_tronc) {
  for (let i = 0; i < hauteur_tronc; i++) {
    let ligne = '';
    
    for (let j = 0; j < espacement_tronc; j++) {
      ligne += ' ';
    }
    
    for (let k = 0; k < largeur_tronc; k++) {
      ligne += '#';
    }
    
    console.log(ligne);
  }
}

function afficherSapin(etages, hauteur_etage, avec_decorations = false) {
  let espacement_max = etages - 1;
  let espaces = '';
  for (let i = 0; i <= espacement_max + hauteur_etage - 1; i++) {
    espaces += ' ';
  }
  console.log(espaces + '+');
  
  for (let etage = 0; etage < etages; etage++) {
    let pointe_offset = etage;
    let espacement = espacement_max - etage;
    
    afficherEtage(hauteur_etage, pointe_offset, espacement, avec_decorations);
  }
  
  let largeur_tronc = 3;
  let hauteur_tronc = 3;
  let derniere_ligne_index = (etages - 1) + (hauteur_etage - 1);
  let espaces_derniere_ligne = 0;
  let position_pipe = espaces_derniere_ligne + 1 + derniere_ligne_index;
  let espacement_tronc = position_pipe - 1;
  
  afficherTronc(largeur_tronc, hauteur_tronc, espacement_tronc);
}

function afficherSapinSimple(etages, hauteur_etage) {
  console.log("=== Sapin sans décorations ===");
  afficherSapin(etages, hauteur_etage, false);
}

function afficherSapinDecore(etages, hauteur_etage) {
  console.log("=== Sapin avec décorations ===");
  afficherSapin(etages, hauteur_etage, true);
}

console.log("=== Tests du sapin final ===");
afficherSapinSimple(3, 3);
console.log("");
afficherSapinDecore(4, 2);