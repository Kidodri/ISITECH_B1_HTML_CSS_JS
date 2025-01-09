# Enonce

- Questions sur le CSS :
  "Expliquez l'utilité de la propriété flex-wrap: wrap dans la classe .task-form. Que se passe-t-il si on la retire ?"

flex-wrap: wrap permet aux éléments de passer à une nouvelle ligne inférieure (si flex-direction = row) ou colonne (flex-direction = column) si il n'y a pas assez de place sur une même ligne pour plusieurs éléments .

Si on l'enlève, les éléments se confondent pour prendre tout l'espace disponible sur la ligne.

- Questions sur la Logique :
  "Dans la fonction ajouterTache(), expliquez la condition qui vérifie la priorité haute et ajoute la classe CSS. Comment pourriez-vous l'étendre pour gérer différemment les priorités moyennes ?"

```js
if (selectPriorite.value === "Haute") {
          cellPriorite.classList.add("priorite-haute");
        }
```

La conditon vérifie que la valeur dans l'élément select au moment de l'execution de la fonction est "HAUTE". Si c'est le cas, on donne la classe .priorite-haute à la cellule propriété ce qui va colorer son contenu en rouge et le mettre en gras. On peut étendre la conditon en mettent un else et en rajoutant une classe .priorite-moyenne:

```js
if (selectPriorite.value === "Haute") {
  cellPriorite.classList.add("priorite-haute");
}
else if(selectPriorite.value === "Moyen"){
  cellPriorite.classList.add("priorite-haute");
}
```

```css
.priorite-moyenne{
  color:rgb(232, 91, 21);
  font-weight: bold;
}
```


- Questions sur l'Amélioration :
  "Comment ajouteriez-vous une validation pour empêcher l'ajout d'une tâche si la date limite est antérieure à la date du jour ?"

On peut mettre une condition dans la fonction avant de créer nos cellules:

```js
let dateLimite = new Date(inputDate.value);

  if(dateLimite < new Date()){
    alert("Limite expirée");
    return;
  }
```
