Chapitre 1 : LE WEB

# Prise de note

## Qu'est ce que le web ? 

Web : Ensemble des données reliées par des liens hypertextes, sur Internet.

Serveur : Ordi relié à internet avec un programme qui tourne et qui est accessible avec le protocole HTTP.

Navigateur : Affiche seulement HTTP, CSS, JavaScript (JS) = Ce que l'on voit.

## Qu'est ce qu'une page web ?

Coté client, le navigateur web est un logiciel qui permet d'interpréter du code HTML/CSS/JS
pour l'afficher sous forme de page web à l'écran. Une page web est donc le résultat affiché après
l'éxécution du code HTML/CSS/JS.

## <u> Les languages et leur utilité </u>

### HTML (Hypertext Markup Language)

HTML : Langages constitués de balises qui permettent de structurer le contenu d'une page web. Il est utilisé pour créer des pages web statiques.

```html
<p> Ceci est un paragraphe </p>
```
Ici, on utilise une <b>balise</b> ```<p>``` pour afficher un paragraphe sur la page web.

Balise pour afficher une image en HTML :

```html
<img src="image.jpg" alt="Image">
```
On dit qu'<b>src</b> est un <b>attribut</b> de la balise img.

<b>alt</b> permet d'afficher une autre image (atlernative) si l'image dans src ne fonctionne pas.

Voici un autre exemple de balise, cette fois avec un <b>Event Listener</b>:

```html
<p onMouseOver="clignote()"> bonjour </p>
```
Ici, onMouseOver est un évènement (<b>Event Listener</b>) (Quand la souris passe au dessus d'un évènement). Si cet évènement est vrai, alors on appelle la fonction JavaScript entre "" : clignote(), qui s'appliquera sur le paragraphe.

### CSS (Cascading Style Sheets)

CSS : Langage utilisé pour mettre en forme les pages web. Il permet de définir la couleur, la taille, la police, etc. des éléments HTML.

```css
img{
    width = 30px
}
```
Ici, ce bout de code est appelé un <b>sélecteur</b>. Il met toutes les images à la même largeur de 30 pixels. 

### JavaScript

JavaScript : Langage qui permet de rendre une page web dynamique. (qui répond aux actions de l'utilisateur). Permet la prise de décision via: 
- Variables (stockages d'informations), 
- Conditions (tests et choix), 
- Boucles (Répétition d'action).

# Formats d'images

## Format Bitmap

?????????????

## Format JPEG (JPG)

Format le plus couramment utilisé. 16 Million de couleurs (256x256x256 car codé sur 3 octets), compression irréversible et pas de transparence. (pas d'alpha) 

## Format PNG

Format conçut pour le web, jusqu'à 48 bits. Gère la transparence.

## Format GIF

Boucle, superposition d'image pour faire des animations.

## Format Vectoriel 

L'image est redessinée et donc ne perd pas en qualité lorsqu'on zoom ou dézoom.

## Les navigateurs et leurs outils

Navigateurs Principaux : Chrome, Firefox, Edge, Opera, Safari.
Le meilleur pour le dev : Chrome. (Ou Firefox)

## Le référencement

Utilisation de mots-clés :
- Identifier les recherches des utilisateurs cibles
- Intégrer des mots-clés dans :
    - Le contenu textuel du site
    - Le texte des liens 

## Dossiers et chemins vers les fichiers

Nom du site :
- /www: Fichiers du site
- /works ou /src: Fichiers de travail (non publiés)

Organisation des dossiers :
- Séparer par type: /css, /html, /js, /img, etc.
- Sous-dossier, exemples : /deco, /content.

<b>NE JAMAIS METTRE D'ESPACE DANS LES NOMS DE FICHIERS.</b>
(Mettre des underscores ou mettre des majuscules pour séparer les mots)

## Éditeurs pour le code
Éditeur recommendé : <b>Visual Studio Code</b>
- Léger et performant
- Extensions disponibles
- Prise en main facile

# HTML

Pour avoir le squelette de la page html comme ci-dessus, taper html dans VScode et sélectionner html:5.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Premiers pas</title>
</head>
<body>
    
</body>
</html>
```

La balise head contient des éléments qui ne sont pas visibles sur la page web.


```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Premiers pas</title>
</head>
```


# CSS3

## Il y a 3 niveaux de CSS: Inline, Interne et Externe

### Inline (Dans la balise HTML concernée)
```html
<p style="color: red;">Inline</p>
```

### Interne (Dans une balise style)
```html
<style>
    p{
        color = red;
    }
</style>
```

### Externe (Dans un fichier CSS à part)
```css
p{
    color = red;
}
```
## Id et Class

### Class

La classe est un <b>sélecteur</b> 
qui permet de définir un style pour plusieurs éléments html simultanément.

```css
.rouge{
    color = red;
}
```

Dans cet exemple, tout les éléments html avec la classe "rouge" seront coloriés en rouge

### Id

L'id ressemble au <b>sélecteur</b> "class" mais celui-ci est censé 
n'être utilisé que par un seul élément html. C'est un identifiant unique.

```css
#deuxiemeBouton{
    color: red;
    border-radius: 10px
}
```

Dans ce cas ci, l'élément avec l'id "deuxiemeBouton" sera colorié
 en rouge et aura des bords arrondis.

## Police de caractères et le web

- Aller sur google font pour trouver une police d'écriture
- Copier la balise link pour la mettre dans le head de notre fichier html
- Utiliser l'attribut font-familly en css pour utiliser la police

## Sélecteur d'élément (tag, balise)
Exemple : 
```css
p{
    color: red;
}
```

Dans cet exemple, le sélecteur prend en compte tout les éléments
 ```<p>``` dans le code html et les colorient en rouge.


## Sélecteur de classe
Exemple : 
```css
.petit{
    font-size : 10px;
}
```

Ce sélecteur prend en compte tout les éléments html possédant la
classe "petit" et met la taille de la police d'écriture à
10 pixels pour ceux-ci.

## Sélecteur d'id
Exemple : 
```css
#boutonSouscription{
    background-color: red
    border-radius: 40px;
}
```

Ce sélecteur prend en compte l'élément unique possédant
 l'id "boutonSouscription" et met sa couleur de fond en rouge et 
 arrondis les bords de cet élément.

## Combinaison de sélecteur
Exemple : 
```css
.salut p{
    color: red
}
```

Ce sélecteur prend en compte tout les éléments ```<p>``` présents dans
les éléments possédant une classe "salut" et les colorient en rouge.

## L'attribut nth-child
```css
#contenu p:nth-child(2){
    color: red
}
```
Ici, l'attribut permet colorier en rouge le deuxième paragraphe contenu dans l'élément de classe "contenu".

## Les pseudosclasses CSS

Ce sont des classes qui sont intégrées au langages CSS. Elles permettent de styliser un élément html en fonction de l'état de celui-ci. (ex : Survolé, visité)


```css
button:hover{
    background-color: red;
}
```
Ici la pseudo classe <b>":hover"</b> désigne un bouton qui est survolé par la souris de l'utilisateur qui deviendra donc rouge si on regarde la suite du code.

## Positionnement des éléments

Border,margin,padding,left...

### Propriété position

position: static

position: relative

position: absolute

### Propriété display

Display permet de g

La propriété display: flex transforme l'élément auquel il est appliqué en conteneur flex. Cette propriété flex permet d'organiser tout le positionement des élément à l'intérieur.

Permet d'utiliser d'autre propriétés:

flex-direction : Permet de déterminer comment les éléments dans le conteneur flex sont agencés. En rangées (row) ou en colonnes (collumns). Elle change par conséquent l'axe principal.

justify-content : 

flex-warp : Détermine l'effet sur les éléments par rapport à l'axe principal.

flex-grow: Indique à un ou plusieurs enfants comment grandir pour partager l'espace restant sur l'axe principal.

flex-shrink: 

# JavaScript

## Introduction

<b>JavaScript</b>: Langage de programmation qui permet de rendre les pages web interactives. 

Il permet de modifier le contenu de la page (html, css) suite à une intéraction de l'utilisateur sans passer par une requête serveur. 

C'est un langage exécuté coté client.

On peut réaliser des animations qui étaient possibles en css mais
il permet d'aller encore plus loin.

Le JavaScript étant coté client, il utilise les ressources du client. Il faut donc faire attention à ne pas surcharger un site web avec du code JavaScript pour que tout les ordis puissent l'afficher.

Il faut faire attention à ne pas mettre des informations sensibles en JavaScript car elles seront visibles coté client.

Mieux vaux le placer à la fin du body pour pouvoir charger la page avant de charger le JS (Pour éviter que si le JS est lourd, il empêche le html et le css de charger)

## Fonctions

Runtime JS : Ensemble des fonctions JavaScript pré-créées dans le navigateur.

Exemple de fonction :
```js
alert("Hello World!"); // ceci est un appel de la fonction alert
```
Pour relier un fchier js dans un fichier html:

```js
<script src="script.js"/> // à mettre dans le head
```

## Les différentes variables

### var

Elles sont accessibles partout dans le script, elles ont une porté globale (hoisting).


```js
var maVariable // déclaration de variable
```

```js
maVariable = "Hello World" // affectation de variable
// = est un 
```

```js
var uneAutreVariable = "hello"// déclaration + affectation de variable
```

```js
console.log(maVariable) // affiche la valeur de la variable "maVariable"
```

### let

Sa portée est restreinte au scope dans lequel elle est déclarée (block scope)

```js
let maVariable2 = "Bonjour" 
```

## const

Possède la même portée que let et permet de déclarer une constante, qu'on ne peut pas réaffecter.

```js
const PI = 3.14;
```

## Déclaration multiple

```js
let a,b,c;
a = 1; 
b = "coucou";
c = false;
```

## Les types en JavaScript

Le type de données determine la nature des valeurs que vous allez manipuler au sein d'un programme.

## Les types primitifs

En js les types primitif sont les types de données qui ne stockent qu'une seule valeur. Les types primitifs sont les suivants:
- string
- number
- boolean

### Chaine de caractère (string)

```js
let a = "Hello World"; // String
let b = 'Hello world'; // String
let b = `Hello 
world`; // String sur plusieurs lignes avec backtick
```

## Les nombres

```js
let a = 123; // Number
let b = 123.456; // Number
```
## Les booléens

```js
let a = true; // Boolean
let b = false; // Boolean
let c = 1 === 1; // Boolean qui renvoie si 1 est strictement égal à 1 (vérifie que les deux soit de la même valeur et du même type)
let d = 10 > 5; // Boolean
let e = 10 < 5; // Boolean
let f = 10 >= 5; // Boolean
let g = 1 !== true; // Boolean qui renvoie si un est strictement différent de true
```

Une expression est booléenne si elle retourne ine valeur de type `Boolean` après son évaluation

## Les types complexes

Les types complexes sont les types de données qui stockent des informations plus complexes. Les types complexes sont les suivant:
- object
- array
- function

Pour les déclarer :

```js
let a = new <type>;
let b = {};
let c = [];
let d = function() {}
```

### Dates

```js
let now = new Date(); // Date
```
#### Les méthodes de l'objet Date

```js
let now = new Date(); // Date
a.getDate();
console.log(now.getMinutes()); // .getMinutes permet d'obtenir le nombre de minutes de la date
```

## Les commentaires

Portion de texte non-exécuté par un programme qui sert à documenter le code.

```js
/* Ceci
est un commmentaire
multiligne */ 
```

## Les fonctions

Les fonctions sont des blocs de code qui peuvent être appelés à partir d'autres parties du code dans le but d'executer un tâche spécifique.

```js
function saySomething(message){
    // le corps de la fonction
    console.log(message)
}
```

On peut avoir 0, 1 ou plusieurs paramètres dans une fonction.

Voici un exemple d'appel de la fonction saySomething:

```js
saySomething("Hello World"); // Hello World
```
Nomenclature : Les fonctions sont nommées en camelCase {}
Leur nom sera un verbe qui décrit l'action qu'elles effectuent. (Ici c'est saySomething)

## Instruction return

```js
function add(a,b){
    return a + b;
}

let num1, num2, resultat
num1 = 10;
num2 = 20;

resultat = add(num1,num2);
```
## Les Events

Les évènement sont des actions qui se produisent dans le navigateur. Les évènements sont déclenchés par l'utilisateur ou par le navigateur lui même.

## Debugger

```js
debugger;
```
Cette instruction permet de vérifier les étapes d'éxecutions du code JavaScript, qui se situe après cette instruction, dans un inspecteur d'un navigateur.

### Sélectionner un élément html dans JavaScript à partir de son id

```js
let tableau1 = document.getElementById("tableau_1")
/* document est une variable globale pré-présente dans js qui
désigne la page web */
```

tableau1 est la <b>référence</b> de l'élément en html.

# Vocabulaire

Une ligne de code est appelé une instruction.

<b>ECMA SCRIPT</b> : Désigne les normes/versions de JavaScript.

# Raccourcis


Ctrl + P : rechercher un fichier

Ctrl + shift + P : ouvrir les commandes dans Vscode / Ouvrir l'invite de commande web.

Ctrl + F : Rechercher dans le fichier

shift + ctrl + F : rechercher dans tout les fichiers

alt + shift + flèche du bas : Duplique la sélection vers le bas

# Documentations + Informations intéressantes

<b>Documentation pour les langages de développement: https://developer.mozilla.org/en-US/</b>

<b>Documentation pour git: https://git-scm.com</b>

<b>Extension chrome : Lighthouse (Score de référencement pour site web)</b>

<b>Site pour obtenir des polices d'écritures pour le web : [Google Font](https://fonts.google.com/), [Dafont](https://www.dafont.com/)</b>

<b>Site pour avoir des animation en CSS : https://codepen.io</b>

<b>Youtuber CSS: Kevin Powell</b>

<b>Bibliothèque CSS utile : Tailwind, Bootstrap. (A utiliser après avoir plutôt maitrisé le CSS)</b>


GitHub Desktop

Pratiquer propriété flex : https://flexboxfroggy.com/#fr

Ressource apprentissage: https://education.github.com/

Palette de couleur pour design: https://colorhunt.co

Bibliothèque JavaScript utile: React.js, Angular.

Platforme logicielle pour utiliser du JS sur un serveur: Node.js 


Utilisateur Prof Isitech: https://github.com/bendahmanem

Déployer portfolio sur pages.github.com (Rapporte des points) ou VERCEL à rendre le 23 Janvier.

Youtuber veille : Fireship

How to actually learn code... 7 roadmaps to 2023 <-- A revoir pour avoir un plan pour l'apprentissage

Pour Android: Kotline. 

Rust <-- demandé

Hardware

Linux <-- Super important. Se former sur une distrib linux
--> Meilleur pour faire du web dev

Windows
--> Meilleur dev/jouer jeu vidéo
--> IA, deeplearning

Mac
--> Dev mobile
--> IA, deeplearning


1 langage, 1 framework, 1 distrib linux(Debian très bien), 1 projet

