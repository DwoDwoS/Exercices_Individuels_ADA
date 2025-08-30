# Exercices SQL – Edusign

L’objectif de cet exercice est de se familiariser avec les **bases de SQL** à travers la création et la manipulation d’une base de données simplifiée inspirée d’**Edusign**.

---

## Objectif
- Découvrir la structuration d’une base de données.
- Comprendre l’importance de la normalisation et de la réduction des redondances.
- Manipuler SQL à travers des requêtes de différents niveaux de difficulté.

Contexte :  
Nous allons créer une version réduite de la base de données **Edusign**, centrée sur l’application des apprenants et apprenantes.

---

## Instructions générales
- Vous pouvez commencer par réaliser des schémas à la main (papier/stylo) ou via un outil comme [Figjam](https://www.figma.com/).
- Les noms de colonnes et de tables seront en **anglais** (bonne pratique), mais vous pouvez utiliser le français si vous êtes plus à l’aise (⚠️ pas d’accents ni de caractères spéciaux).
- Convention : utilisez le **snake_case**.
- Pensez à **sauvegarder vos requêtes** dans un fichier `.sql` au fur et à mesure.

---

## Outils recommandés
Un SQLite en ligne suffit.  
Quelques suggestions :
- [Simple SQLite Editor](https://simple-sqlite-editor.vercel.app/) ✅ recommandé
- [SQLite Online](https://sqliteonline.com/)
- [SQL Fiddle](https://sqlfiddle.com/)

---

## Étape 1 : Premiers pas (papier / schéma)
Objectif : comprendre pourquoi une table unique peut poser des problèmes de redondance.

Exemple de première table `edusign` (schéma simplifié) :
- firstname
- lastname
- email
- signature_date

Problème : les informations d’un apprenant(e) se répètent à chaque signature → manque d’optimisation.

---

## Étape 2 : Structuration de la base
Séparons les données pour éviter les répétitions.

---

### Instructions
1. Créer la table `users` :
   - `id` (clé primaire)
   - `firstname`
   - `lastname`
   - `email`
2. Modifier la table `edusign` :
   - Remplacer les colonnes `firstname`, `lastname`, `email` par `user_id` (clé étrangère vers `users`).
3. Insérer quelques données fictives :

```sql
INSERT INTO users (firstname, lastname, email) VALUES ('Ada', 'Lovelace', 'ada@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Beatrice', 'Worsley', 'bea@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Bella', 'Guerin', 'bella@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Barbara', 'Chase', 'barbara@test.fr');

## Étape 3 : Requêtes SQL

### Niveau facile
- Sélectionner toutes les lignes de `users`
- Sélectionner la ligne où le prénom est `Ada`
- Sélectionner les lignes dont le prénom commence par `B`
- Compter le nombre total de lignes dans `users`
- Compter le nombre de lignes où le prénom commence par `B`
- Afficher uniquement la colonne `firstname`

---

### Niveau moyen
- Insérer une ligne dans `edusign` pour `Ada` avec la date `2024-05-30 09:30:00`
- Insérer une ligne dans `edusign` pour `Bella` avec la date `2024-05-30 09:30:00`
- Insérer **tous les users** dans `edusign` avec la date `2024-09-01 09:30:00`
- Sélectionner toutes les lignes de `edusign`, triées :
  - par date de signature (récent → ancien),
  - puis par `user_id` (ascendant)
- Sélectionner les signatures dont la date est `2024-05-30 09:30:00`

---

### Niveau moyen+ (bonus)
- Afficher le nombre d’apprenants par **date de signature**
- Compter le nombre de signatures où le prénom est `Bella` (nommez la colonne `volume`)

---

## Bonnes pratiques
- Toujours **tester vos requêtes** après les avoir écrites.
- Bien penser vos **relations entre tables** avant d’écrire du SQL.
- Garder vos scripts dans un **fichier `.sql` versionné** pour suivre vos progrès.

---

## Organisation du projet


├── README.md          # Consignes de l’exercice
├── schema.png         # Schéma de la base (optionnel)
├── edusign.sql        # Script SQL (création des tables + insertions)
└── queries.sql        # Script SQL (requêtes de l’exercice)

---

## Résultat attendu

 - Un schéma relationnel clair (users ↔ edusign).

 - Des tables SQL peuplées avec des données fictives.

 - Une série de requêtes allant du plus simple au plus avancé.