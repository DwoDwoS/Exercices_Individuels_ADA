// function maxDaysInMonth(month, year) {
//   const MONTH_INT = parseInt(month, 10);
//   const YEAR_INT = parseInt(year, 10);

//   // Février et année bissextile
//   if (MONTH_INT === 2) {
//     // Une année bissextile est divisible par 4, bissextile si n'est pas divisible par 100 ou divisible par 400
//     return (YEAR_INT % 4 === 0 && (YEAR_INT % 100 !== 0 || YEAR_INT % 400 === 0)) ? 29 : 28; 
//   }

//   // Mois à 30 jours
//   if ([4, 6, 9, 11].includes(MONTH_INT)) {
//     return 30;
//   }

//   // Mois à 31 jours
//   return 31;
// }

// function isValidDate(dateStr) {
//   // Vérifie la structure générale : longueur et présence de 2 "/"
//   if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) return false;

//   const [dd, mm, yyyy] = dateStr.split("/");

//   const DAY = parseInt(dd, 10);
//   const MONTH = parseInt(mm, 10);
//   const YEAR = parseInt(yyyy, 10);

//   if (YEAR < 1000 || YEAR > 9999) return false;
//   if (MONTH < 1 || MONTH > 12) return false;

//   const MAX_DAY = maxDaysInMonth(MONTH, YEAR);
//   if (DAY < 1 || DAY > MAX_DAY) return false;

//   return true;
// }

// // console.log(isValidDate("03/04/2001")); // true
// // console.log(isValidDate("31/11/2020")); // false
// // console.log(isValidDate("29/02/2020")); // true (année bissextile)
// // console.log(isValidDate("29/02/2021")); // false
// // console.log(isValidDate("03/14/2001")); // false
// // console.log(isValidDate("00/01/2020")); // false
// // console.log(isValidDate("31/04/2020")); // false

// function isPalindrome(dateStr) {
//   if(!isValidDate(dateStr)) {
//     return false;
//   }

//   const CLEANED = dateStr.replaceAll("/", "");
//   const REVERSED = CLEANED.split("").reverse().join("");

//   return CLEANED === REVERSED;
// } 
// // console.log(isPalindrome("11/02/2011")); // true
// // console.log(isPalindrome("03/04/2001")); // false

// // On reformate la date
// function formatDate(date) {
//   const DD = String(date.getDate()).padStart(2, '0');
//   const MM = String(date.getMonth() + 1).padStart(2, '0');
//   const YYYY = date.getFullYear();
//     return `${DD}/${MM}/${YYYY}`;
// }

// function getNextPalindromes(x) {
//   const RESULTS = [];
//   let currentDate = new Date();

//   while (RESULTS.length < x) {
//     currentDate.setDate(currentDate.getDate() + 1);

//     const FORMATTED = formatDate(currentDate);
//     if (isPalindrome(FORMATTED)) {
//       RESULTS.push(FORMATTED);
//     }
//   }

//   return RESULTS;
// }
// console.log(getNextPalindromes(8));

// Etape 4: Refactorisation

function isPalindrome(str) {
  const CLEANED = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return CLEANED === CLEANED.split('').reverse().join('');
}

function isDatePalindrome(dateStr) {
  const [DD, MM, YYYY] = dateStr.split('/');

  const DATE = new Date(Number(YYYY), Number(MM) - 1, Number(DD));

  if (isNaN(DATE.getTime())) {
    return false;
  }

  const VALID_DAY = String(DATE.getDate()).padStart(2, '0');
  const VALID_MONTH = String(DATE.getMonth() + 1).padStart(2, '0');
  const VALID_YEAR = String(DATE.getFullYear());

  if (DD !== VALID_DAY || MM !== VALID_MONTH || YYYY !== VALID_YEAR) {
    return false;
  }

  const DATE_STRING = `${VALID_DAY}${VALID_MONTH}${VALID_YEAR}`;
  return isPalindrome(DATE_STRING);
}
 
console.log(isDatePalindrome("02/02/2020"));
console.log(isDatePalindrome("12/02/2021"));
console.log(isDatePalindrome("21/12/2112"));
console.log(isDatePalindrome("22/02/9999"));