function maxDaysInMonth(month, year) {
  const MONTH_INT = parseInt(month, 10);
  const YEAR_INT = parseInt(year, 10);

  // Février et année bissextile
  if (MONTH_INT === 2) {
    // Une année bissextile est divisible par 4, bissextile si n'est pas divisible par 100 ou divisible par 400
    return (YEAR_INT % 4 === 0 && (YEAR_INT % 100 !== 0 || YEAR_INT % 400 === 0)) ? 29 : 28; 
  }

  // Mois à 30 jours
  if ([4, 6, 9, 11].includes(MONTH_INT)) {
    return 30;
  }

  // Mois à 31 jours
  return 31;
}

function isValidDate(dateStr) {
  // Vérifie la structure générale : longueur et présence de 2 "/"
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) return false;

  const [dd, mm, yyyy] = dateStr.split("/");

  const DAY = parseInt(dd, 10);
  const MONTH = parseInt(mm, 10);
  const YEAR = parseInt(yyyy, 10);

  if (YEAR < 1000 || YEAR > 9999) return false;
  if (MONTH < 1 || MONTH > 12) return false;

  const MAX_DAY = maxDaysInMonth(MONTH, YEAR);
  if (DAY < 1 || DAY > MAX_DAY) return false;

  return true;
}

console.log(isValidDate("03/04/2001")); // true
console.log(isValidDate("31/11/2020")); // false
console.log(isValidDate("29/02/2020")); // true (année bissextile)
console.log(isValidDate("29/02/2021")); // false
console.log(isValidDate("03/14/2001")); // false
console.log(isValidDate("00/01/2020")); // false
console.log(isValidDate("31/04/2020")); // false
