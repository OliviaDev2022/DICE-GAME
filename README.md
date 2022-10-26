# DICE-GAME
Création d’un petit jeu sur navigateur web à l’aide du DOM. Le jeu sera fonctionnel, et comportera plusieurs fonctionnalités comme :
        La possibilité de créer une nouvelle partie
        La possibilité de retenir le score courant
        La possibilité de lancer le dé
        La possibilité d’avoir 2 joueurs

Règles : Le jeu comprend 2 joueurs sur un seul et même écran. Chaque joueur possède un score temporaire (CURRENT) et un score global (GLOBAL). À chaque lancer du dé, le score temporaire s'additionne du nombre de points affichés par le dé, et le joueur peut lancer un dé autant de fois qu'il souhaite.
Lors de son tour, chaque joueur peut décider à tout moment de :

Cliquer sur l’option “Hold”, qui permet d’envoyer les points du CURRENT vers le GLOBAL. Dnas ce cas, ce sera alors le tour de l’autre joueur.
Si un joueur lance le dé et obtient 1, son score CUURENT est perdu et c’est la fin de son tour. 
Le premier joueur qui atteint les 100 points sur son score GLOBAL gagne le jeu.

Technos utilisés : HTML - CSS - JAVASCRIPT
