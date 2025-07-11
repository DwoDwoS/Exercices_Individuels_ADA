// Etape 1: Création d'une fonction pour récupérer le paramètre et le mettre sous forme de tableau

function getLatinCharacterList(text) {
    return text.split('');
}

const CHAIN_CHARACTER_LIST = "Hello, world";
const RESULT = getLatinCharacterList(CHAIN_CHARACTER_LIST);
console.log(RESULT);