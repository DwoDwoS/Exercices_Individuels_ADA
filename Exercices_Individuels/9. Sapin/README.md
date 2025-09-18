# Exercice Individuel du Sapin

Si vous souhaitez le lancer, il vous faut le télécharger puis aller sur votre IDE, lancer le fichier sapin.js et aller dans le terminal. 
Faites la commande:

```bash
node sapin.js
```
Et un sapin devrait apparaître !

Si vous n'avez pas node js, vous pouvez le télécharger [ici](https://nodejs.org/fr/download/) 

# 1. Enoncé

Nous allons utiliser les boucles et les imbrications de boucles pour construire un beau sapin, roi des forêts 🎄.

Faites un maximum de fonctions pour organiser votre code.

*Contraintes:* 

- Langage : JS
- Suivez les étapes.

A la fin de l’exercice, votre fonction devra afficher un sapin comme ci-dessous:

```bash
       + 
      /|\
     /*|*\
    /**|**\
    /*o|**\
   /***|***\
  /**+*|*o**\
  /****|****\
 /***o*|**+**\
/*o*+**|***o**\
      ###
      ###
      ###
```

## Etape 1: Un triangle d’étoiles

Pour cette première étape, nous allons commencer par la pointe du sapin.

Notre but est d'écrire une fonction `afficherPointeSapin()` qui prendra en paramètre la hauteur de ce triangle, telle que:

```jsx
function afficherPointeSapin(hauteur) {
  // à remplir
}

afficherPointeSapin(4)
```

affichera:

```bash
    +
   /|\
  /*|*\
 /**|**\
/***|***\x
```

> ⚠️ La pointe affichée est toujours plus haute de 1 du fait de l’étoile `+` tout en haut (ici il y a bien 5 lignes pour une hauteur de pointe de 4)
> 

### Détails de l’étape 1

### 1.1 Une ligne d’étoiles

Commençons par écrire une fonction `afficherEtoiles(n)` qui affiche une ligne de `*` en fonction du paramètre `n` 

example (à remplir):

```jsx
function afficherEtoiles(n) {
  // console.log('*') pour afficher une etoile
  // à faire pour chaque n étoile !
}

afficherEtoiles(2)
afficherEtoiles(5)
```

affichera:

```bash
**
*****
```

Forts de cette première fonction, nous allons maintenant pouvoir dessiner nos premières formes !

### 1.2 Carré d’étoiles

Nous allons maintenant définir une nouvelle fonction `afficherRectangle(hauteur, largeur)`

```jsx
function afficherRectangle(hauteur, largeur) {
  // pour chaque "étage" de la hauteur
  //    appeler printEtoile
}

afficherRectangle(5, 5)
```

affichera:

```bash
*****
*****
*****
*****
*****
```

### 1.3 Triangle d’étoiles

Il semblerait donc que nous pouvons nous inspirer du comportement de notre précédente fonction pour en définir une nouvelle `afficherTriangleDroite(n)`

ℹ️ ’Droite’ parce que ce triangle servira à la partie droite du sapin

Écrivons cette fonction:

```jsx
function afficherTriangleDroite(n) {
  // En s'inspirant de la fonction afficherRectangle(),
  // comment afficher des lignes qui "s'allongent" un peu plus à chaque itération ?
}

afficherTriangleDroite(5)
```

Devra afficher:

```jsx
\
*\
**\
***\
****\
```

### 1.4 Seconde moitié et espaces

Nous pouvons maintenant faire la seconde moitié de la pointe du sapin en faisant le symétrique !

```jsx
function afficherTriangleGauche(n) {
  // En s'inspirant de la fonction afficherTriangleDroite(), 
  // comment aligner correctement les etoiles sur le bord de droite ?
}

afficherTriangleGauche(5)
```

Sortie attendue:

```bash
    /
   /*
  /**
 /***
/****
```

<details>
<summary>Indice</summary>
   
  ```bash
    ..../
    .../*
    ../**
    ./***
    /****
  ```
    
  si nous remplaçons les espaces  ` ` par des `.` , un pattern apparait !
</details>
    

### 1.5 Assemblage et décorations

Dernière étape, nous allons combiner le travail effectué sur `afficherTriangleGauche()` & `afficherTriangleDroite()` pour réaliser une nouvelle fonction `afficherPointeSapin()`, en ajoutant le tronc `|` et l’étoile `+` au milieu ! (cf l’affichage plus haut, en début d’exercice)

### Etape 2: Sapin à étages

 Écrivons maintenant une fonction `afficherSapin` qui affichera les différents étages de sapin.

```jsx
function afficherSapin(etages, hauteur_etage) {
  // à remplir
}

afficherSapin(3, 3)
```

affichera:

```bash
     +
    /|\
   /*|*\
  /**|**\
   /*|*\
  /**|**\
 /***|***\
  /**|**\
 /***|***\
/****|****\
```

### Détails de l’étape 2

Essayons d’appeler notre fonction `afficherPointeSapin` plusieurs fois de suite:

- Exemple
    
    ```jsx
    afficherPointeSapin(1)
    afficherPointeSapin(2)
    afficherPointeSapin(3)
    ```
    
    sortie:
    
    ```bash
     +
    /|\
      +
     /|\
    /*|*\
       +
      /|\
     /*|*\
    /**|**\
    ```
    

Ce n’est clairement pas encore un sapin du fait de deux problèmes: 

- les différents étages du sapin ne sont pas alignés au niveau du tronc
- chaque étage commence par une étoile `+` au lieu de commencer directement par une ligne de `*`

### 2.1 Afficher un étage

Changeons maintenant notre function `afficherPointeSapin` pour afficher n’importe quel étage du sapin ! Elle se nommera `afficherEtage` et prendra les paramètres suivant:

```jsx
function afficherEtage(hauteur, pointe_offset) {
   // comment sauter les premières lignes d'étoiles pour ne commencer qu'à la ligne numero 'pointe_offset' ?
}

afficherEtage(3, 0) // les 3 premières lignes
afficherEtage(3, 1) // affiche à partir de la deuxième ligne, et continue sur 3 lignes
afficherEtage(3, 2) // affiche à partie de la troisième lige, et continue sur 3 lignes
```

affichera:

```bash
  /|\
 /*|*\
/**|**\
  /*|*\
 /**|**\
/***|***\
  /**|**\
 /***|***\
/****|****\
```

Beaucoup mieux déjà !

### 2.2 Aligner les étages

Parce que la partie à aligner arrive en premier (les étages les plus hauts du sapin), il nous faut savoir en avance quel `espacement` sera nécessaire pour cet alignement. À partir de l’étape précédente, on peut voir qu’il aurait fallu 2 espacements au premier étage, et 1 seul au deuxième.
Nous allons donc modifier notre fonction `afficherEtage` pour ajouter cet `espacement`:

```jsx
function afficherEtage(hauteur, pointe_offset, espacement) {
   // afficher 'espacement' fois un espace ' '
   
   // [ ..reste de la fonction]
}

afficherEtage(3, 0, 3)
afficherEtage(3, 1, 2)
afficherEtage(3, 2, 1)
afficherEtage(3, 3, 0)
```

Affichera:

```bash
     /|\
    /*|*\
   /**|**\
    /*|*\
   /**|**\
  /***|***\
   /**|**\
  /***|***\
 /****|****\
  /***|***\
 /****|****\
/*****|*****\
```

❓Peut-on observer un pattern entre l’évolution de la valeur des variables `espacement` et `pointe_offset` ?

### 2.3 Factorisation

Il ne nous reste plus qu'à placer ces différents étages au sein d’une même fonction `afficherSapin`.  Comme cette fonction prend le paramètre `etages`, nous devrions pouvoir rendre le nombre d'étage dynamique à l’aide de notre fonction `afficherEtage` et d’une boucle.

```jsx
function afficherSapin(etages, hauteur_etage) {
  // pour chaque étage, appeler printEtage pour hauteur_etage
}

afficherSapin(3, 3)
```

<details>
<summary>Indice</summary>
  
  Ne pas oublier le paramètre `pointe_offset` qui, on l’a vu à la fin de la partie 2.2, doit être modifié entre chaque appel de `afficherEtage`! Toute la difficulté est alors de trouver comment inclure ce changement de valeur au sein de la boucle dans `afficherSapin`.
</details>
    

### Etape 3: Sapin de salon

Il ne nous reste plus qu’à rendre notre sapin crédible pour le mettre dans notre salon (ou celui de nos ami.e.s !).

Pour cela, nous allons tout d’abord lui rajouter un tronc puis des décorations `o` et `+` :

```bash
       + 
      /|\
     /*|*\
    /**|**\
    /*o|**\
   /***|***\
  /**+*|*o**\
  /****|****\
 /***o*|**+**\
/*o*+**|***o**\
      ###
      ###
      ###
```

<details>
<summary>Indices</summary>

  - Tronc:
        
    💡Pensez à réutiliser `afficherRectangle` 
        
    ❓Quelle relation entre les dimensions (hauteur/largeur) du tronc et le reste du sapin ?
        
  - Décorations:
        
    💡Pensez à utiliser la fonction `Math.random()` 
        
    ❓Comment éviter d’avoir des décorations collées sur les bords ou collées entre elles?
  
</details>