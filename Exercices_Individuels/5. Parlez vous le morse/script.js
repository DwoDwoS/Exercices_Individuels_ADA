// Etape 1: Création d'une fonction pour récupérer le paramètre et le mettre sous forme de tableau

function getLatinCharacterList(text) {
    return text.split('');
}

const CHAIN_CHARACTER_LIST = "Hello, world";
const RESULT = getLatinCharacterList(CHAIN_CHARACTER_LIST);
console.log(RESULT);

// Etape 2: Intégration du dictionnaire et test
// Dictionnaire Latin to Morse
const LATIN_TO_MORSE = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

function translateLatinCharacter(char) {
  const UPPER_CHARACTER = char.toUpperCase();
  return LATIN_TO_MORSE[UPPER_CHARACTER] || ''; // Retourne une chaîne vide si le caractère n'existe pas
}

// Test
console.log(translateLatinCharacter("A")); // Résultat attendu : .-