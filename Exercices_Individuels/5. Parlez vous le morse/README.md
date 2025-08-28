# Traducteur Morse

Ce projet est une application web simple permettant de traduire du texte (alphabet latin) en code Morse, et inversement.
L’utilisateur peut entrer du texte ou du Morse et obtenir instantanément la traduction grâce à une interface intuitive.

## Fonctionnalités

- Traduction Texte → Morse

- Traduction Morse → Texte

- Prise en charge de l’alphabet A–Z, des chiffres (0–9), ainsi que de nombreux caractères spéciaux et accents français.

- Bouton de bascule ⇄ pour traduire automatiquement selon le champ rempli.

- Gestion des espaces (/ représente un espace entre mots en Morse).

- Interface claire avec deux zones de saisie (Texte et Morse).

## Structure du projet
    traducteur-morse/
    │
    ├── index.html      # Structure HTML principale
    ├── style.css       # Feuille de style (design de l’interface)
    ├── script.js       # Logique JavaScript (traduction et interactions)
    
    
## Fonctionnement

1. Encodage (Texte → Morse)

    - Chaque caractère est découpé (getLatinCharacterList).

    - On utilise un dictionnaire LATIN_TO_MORSE pour traduire chaque lettre.

    - Les caractères sont convertis en Morse puis joints par un espace.

    - Exemple :
    ```bash
    "HELLO" → ".... . .-.. .-.. ---"

2. Décodage (Morse → Texte)

    - Chaque séquence Morse est découpée (getMorseCharacterList).

    - Un dictionnaire inversé MORSE_TO_LATIN est généré automatiquement.

    - Les symboles sont traduits en lettres, les / représentent les espaces entre mots.

    - Exemple :
    ```bash
    ".... . .-.. .-.. ---" → "HELLO"

3. Bascule automatique

    - Le bouton ⇄ déclenche toggleTranslation() :

    - Si la zone Texte est remplie → traduction en Morse.

    - Si la zone Morse est remplie → traduction en Texte.

    - Si aucune zone n’est remplie → affichage d’une alerte.

## Utilisation

    - Ouvrir index.html dans un navigateur.

    - Entrer un texte dans la zone Texte et cliquer sur ⇄ → traduction en Morse.

    - Entrer du code Morse dans la zone Morse et cliquer sur ⇄ → traduction en Texte.

    - Copier/coller les résultats selon vos besoins.

## Exemple
**Texte → Morse** 

Entrée :
    ```bash
    Bonjour le monde


Sortie :
    ```bash
    -... --- -. .--- --- ..- .-. / .-.. . / -- --- -. -.. .

**Morse → Texte**

Entrée :
    ```bash
    .... . .-.. .-.. --- / .-- --- .-. .-.. -..


Sortie :
    ```bash
    HELLO WORLD

## Améliorations possibles

    - Ajout d’un bouton Copier pour copier rapidement la traduction.

    - Ajout de tests unitaires pour vérifier la cohérence des traductions.

    - Amélioration du design (dark mode, animations, responsive).

    - Support audio : écouter le Morse en bip sonore.

    - Intégration d’un mode apprentissage (quiz Morse ↔ Texte).

## Licence

Projet libre d’utilisation et de modification.