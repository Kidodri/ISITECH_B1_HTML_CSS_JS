let boutonBurger = document.getElementById("boutonBurger");
let menu = document.getElementById("menu");


function OpenCloseNav() {

    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        boutonBurger.classList.replace("closeButton","openButton"); 
    }else{
        menu.classList.add("active");
        boutonBurger.classList.replace("openButton","closeButton"); 
    }
    
}

boutonBurger.onclick = OpenCloseNav; /*Ne pas mettre de () car on veut faire référence à la fonction sans l'éxécuter car sinon la fonction 
ne sera chargé qu'une fois au chargement de la page ce qui n'est pas voulu*/