function afficherPointeSapin(hauteur) {
  let espaces = '';
  for (let i = 0; i < hauteur; i++) {
    espaces += ' ';
  }
  console.log(espaces + '+');
  
  for (let i = 0; i < hauteur; i++) {
    let ligne = '';
    
    for (let j = 0; j < hauteur - 1 - i; j++) {
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

console.log("=== Tests afficherPointeSapin ===");
afficherPointeSapin(4);