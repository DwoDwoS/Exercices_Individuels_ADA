// Etape 1: Création d'une fonction pour récupérer le paramètre et le mettre sous forme de tableau

// --------------------------------------------------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------ LATIN -------------------------------------------------------------------------------- //
// --------------------------------------------------------------------------------------------------------------------------------------------- //

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
	'Z':'--..',
    '0':'-----',
    '1':'.----',
    '2':'..---',
    '3':'...--',
    '4':'....-',
    '5':'.....',
    '6':'-....',
    '7':'--...',
    '8':'---..',
    '9':'----.',
    '.':'.-.-.-',
    ',':'--..--',
    '?':'..--..',
    '!':'-.-.--',
    '\'':'.----.',
    '"':'.-..-.',
    '(': '-.--.',
    ' )':'-.--.-',
    '&':'.-...',
    '/':'-..-.',
    ':':'---...',
    ';':'-.-.-.',
    '=':'-...-',
    '+':'.-.-.',
    '-':'-....-',
    '_':'..--.-',
    '$':'...-..-',
    '@':'.--.-.',
    ' ':'/'
}

function translateLatinCharacter(char) {
  const UPPER_CHARACTER = char.toUpperCase();
  return LATIN_TO_MORSE[UPPER_CHARACTER] || ''; // Retourne une chaîne vide si le caractère n'existe pas
}

// Étape 3: Encode tout un texte en morse
function encode(text) {
  const CHARACTERS = getLatinCharacterList(text);
  const MORSE_CHARACTERS = CHARACTERS.map(translateLatinCharacter);
  return MORSE_CHARACTERS.join(' ');
}

// -------------------------------------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------- MORSE -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------------------------------------- //

// Etape 4: Ajout d'un dictionnaire inversé

// Permet d'inverser directement le dictionnaire latin même si l'on y applique des changements, le dictionnaire morse sera à jour
const MORSE_TO_LATIN = {};
for (let char in LATIN_TO_MORSE) {
  MORSE_TO_LATIN[LATIN_TO_MORSE[char]] = char;
}
// const MORSE_TO_LATIN = {
//   '-': "T",
//   '--': "M",
//   '---': "O",
//   '--.': "G",
//   '--.-': "Q",
//   '--..': "Z",
//   '-.': "N",
//   '-.-': "K",
//   '-.--': "Y",
//   '-.-.': "C",
//   '-..': "D",
//   '-..-': "X",
//   '-...': "B",
//   '.': "E",
//   '.-': "A",
//   '.--': "W",
//   '.---': "J",
//   '.--.': "P",
//   '.-.': "R",
//   '.-..': "L",
//   '..': "I",
//   '..-': "U",
//   '..-.': "F",
//   '...': "S",
//   '...-': "V",
//   '....': "H"
// }

function getMorseCharacterList(morseText) {
  return morseText.trim().split(' ');
}

function translateMorseCharacter(morseChar) {
  return MORSE_TO_LATIN[morseChar] || '';
}

function decode(text) {
  const WORDS = text.trim().split(' / ');
  const DECODED_WORDS = WORDS.map(word => {
    const SPACING = word.split(' ');
    const LATIN_CHARACTERS = SPACING.map(translateMorseCharacter);
    // Pas d’espace entre lettres d’un mot
    return LATIN_CHARACTERS.join(''); 
  });
  // Espace entre mots
  return DECODED_WORDS.join(' '); 
}

// Test
console.log(encode("Hello, World!"));
console.log(decode(".... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -.. -.-.--"));