function getTableau(){

    let tableau = document.getElementById("tableau");

    let row = tableau.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    const name = document.getElementById("name").value;
    const interest = document.getElementById("interest").value;
    const age = document.getElementById("age").value;

    cell1.textContent = name;
    cell2.textContent = interest;
    cell3.textContent = age;
}



function moyenne(){
    let tableau = document.getElementById("tableau");
    let moyenne = document.getElementById("moyenne");
    let moy = 0;
    let somme = 0;
    let compteur = 0;

    for (let index = 0; index < tableau.rows.length; index++) {
        const rangee = tableau.rows[index];
        const ageMoyen = parseInt(rangee.cells[rangee.cells.length - 1].textContent)
        if (!isNaN(ageMoyen)) {
            somme += ageMoyen;
        }

        compteur += 1;
    }

    if (compteur>0){
        moy = somme / compteur;
        moyenne.textContent = moy;
    }
}

function supprimerLigne(){
    let tableau = document.getElementById("tableau");
    tableau = tableau.deleteRow(tableau.rows.length - 1);
}

function supprimerToutesLignes(){
    let tableau = document.getElementById("tableau");
    while (tableau.rows.length>0) {
        supprimerLigne();
    }
}



