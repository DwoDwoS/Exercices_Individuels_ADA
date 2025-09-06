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