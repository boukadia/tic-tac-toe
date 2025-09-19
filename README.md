# Documentation du Jeu Tic Tac Toe

## Table des Matières
1. [Structure du Projet](#structure-du-projet)
2. [Variables Globales](#variables-globales)
3. [Fonctions Principales](#fonctions-principales)
4. [Logique de Détection de Victoire](#logique-de-détection-de-victoire)
5. [Déroulement du Jeu](#déroulement-du-jeu)

## Structure du Projet
Le jeu est composé de trois fichiers principaux :
- `index.html` : Structure de la page et éléments UI
- `style.css` : Styles et animations
- `script.js` : Logique du jeu et interactions

## Variables Globales

```javascript
let container        // Élément contenant la grille de jeu
let largeur         // Input pour la taille du plateau (3x3, 4x4, etc.)
let winningLength   // Input pour la longueur de victoire
let counter         // Compteur de tours (0 = X, 1 = O)
let player1/player2 // Indicateurs des joueurs
let popUpWinner     // Popup d'affichage du gagnant
```

## Fonctions Principales

### `rolee(event)`
Gère l'affichage actif des indicateurs de joueurs.
```javascript
// Paramètres :
// - event : Événement de clic
// Fonctionnement :
// - Si X joue : Active l'indicateur du joueur O
// - Si O joue : Active l'indicateur du joueur X
```

### `closePopup()`
Ferme la fenêtre popup et réinitialise le jeu.
```javascript
// Actions :
// - Cache le popup de victoire
// - Appelle la fonction reset()
```

### `remplire(event)`
Fonction principale gérant la logique du jeu.
```javascript
// Paramètres :
// - event : Événement de clic sur une cellule
// Actions :
// 1. Placement des symboles (X/O)
// 2. Vérification des victoires
// 3. Mise à jour des indicateurs
```

### `reset()`
Réinitialise le jeu à son état initial.
```javascript
// Actions :
// - Remet le compteur à 0
// - Réinitialise les indicateurs
// - Recrée le plateau
```

### `creationTabl()`
Crée un nouveau plateau de jeu.
```javascript
// Actions :
// 1. Vide le conteneur
// 2. Calcule les dimensions
// 3. Crée la grille de cellules
```

## Logique de Détection de Victoire

### Variables de Contrôle
```javascript
ct  // Compteur de symboles identiques
t   // wins
win // wins
```



## Déroulement du Jeu

1. **Initialisation**
   - Clic sur "Start" → `creationTabl()`
   - Création du plateau selon dimensions

2. **Tour de Jeu**
   - Clic sur une cellule → `remplire()`
   - Placement du symbole (X ou O)
   - Vérification des conditions de victoire
   - Changement d'indicateur de joueur

3. **Fin de Partie**
   - Si victoire : Affichage du popup
   - "Rejouer" → `closePopup()` → `reset()`

## Notes Techniques

### Calculs d'Index
- Diagonale descendante : `j += nombr + 1`
- Diagonale montante : `m += nombr - 1`
- Horizontale : `k < i + nombr`
- Verticale : `l += nombr`

### Gestion de la Grille
- Taille dynamique basée sur `largeur.value`
- Cellules responsives avec flex
- Événements attachés à chaque cellule

### Validation des Mouvements
- Vérification des cases vides
- Alternance X/O via counter
- Détection des limites de grille
