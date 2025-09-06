# Jouons avec les palindromes

Ce projet contient deux fonctions JavaScript permettant de vérifier si une chaîne de caractères ou une date est un palindrome.

## Fonctionnalités
```js
isPalindrome(str)
```
Vérifie si une chaîne de caractères est un palindrome.

## Ignore la casse (majuscules/minuscules).

Supprime les caractères non alphanumériques.
```js
isDatePalindrome(dateStr)
```
Vérifie si une date (au format DD/MM/YYYY) est un palindrome.

Valide d'abord la date (gestion des jours/mois corrects).

Reformate la date en DDMMYYYY.

Vérifie si cette chaîne est un palindrome.

## Exemples d’utilisation
```js
console.log(isDatePalindrome("02/02/2020")); // true (palindrome)
console.log(isDatePalindrome("12/02/2021")); // false (pas un palindrome)
console.log(isDatePalindrome("21/12/2112")); // true (palindrome)
console.log(isDatePalindrome("22/02/9999")); // false (pas un palindrome valide)
```

## Installation et utilisation

Clone ce dépôt :
```bash
git clone https://github.com/ton-utilisateur/palindrome-date-checker.git
cd palindrome-date-checker
```

Exécute le fichier avec Node.js :
```bash
node index.js
```
##Tests rapides

Tu peux tester d’autres dates ou chaînes directement dans index.js :
```js
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello World")); // false
```
## Structure du projet
```swift
├── index.js   # Contient les fonctions et quelques exemples
└── README.md  # Documentation du projet
```