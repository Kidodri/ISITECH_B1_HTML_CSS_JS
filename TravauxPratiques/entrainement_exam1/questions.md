# énoncé

- <u>**Questions sur la Structure**</u> :
  Dans l'exercice du gestionnaire de films, pourquoi a-t-on utilisé la propriété flex: 1 sur la classe .input-zone ? Quel effet cela produit-il sur la mise en page ?

Il permet de faire grandir l'élément html flexible pour lui faire prendre tout l'espace disponible. 

les éléments html de zone d'entrées prennent chacuns la même place dans la div.


- <u>**Questions sur le JavaScript**</u> :
  Expliquez pourquoi on utilise selectedIndex = 0 pour réinitialiser le select de genre au lieu de value = "" comme pour les autres inputs ?

Car on ne veut pas de choix vide dans select. Les options dans select sont organisés en indice. La première option est d'indice 0, la deuxième 1, etc... On réinitialise au premier choix (à l'indice 0). Ici c'est l'option 'Action'.


- <u>**Questions de Modification**</u> :
  Comment modifieriez-vous le code pour que les films dont l'année est antérieure à 2000 apparaissent en italique dans le tableau ?

```html
<input oninput="italiqueAnnee()" type="number" id="annee" min="1900" />
```

oninput est un event listener qui détecte quand il y a une entrée dans l'input.

```js
function italiqueAnnee(){
      if (inputAnnee.value < 2000) {
          inputAnnee.setAttribute("style","font-style : italic");
      }
      else{
        inputAnnee.setAttribute("style","font-style : normal");
      }
}
```

Permet de mettre en italique l'entrée de l'année en temps réel pendant qu'on l'écrit dans l'input de l'année.

```js
if(inputAnnee.value < 2000){
          cellTitre.setAttribute("style", "font-style: italic");
        }
```
Condition à mettre dans la fonction ajouterFilm(). Elle permet de mettre en Italique le titre d'un film dont l'année de parution est inférieure à 2000. 

