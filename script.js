//1ere fonctionnalité : afficher "clique" dans la console quand on clique sur le footer.
 
var footer = document.getElementsByTagName("footer");

var count = 0;

footer[0].addEventListener("click", function(){
    count +=1
    console.log("click n° " + count)
 });

//2eme fonctionnalité : Hamburger perd son steack quand on mange la tranche de cornichon.

var hamburger = document.getElementsByClassName("navbar-toggler")

var navbar = document.getElementById("navbarHeader");

hamburger[0].addEventListener("click", function(){
        navbar.classList.toggle("collapse")
    }
);

//3eme fonctionnalité :  si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page)

var edit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

var card = document.getElementsByClassName("card mb-4 box-shadow")[0];

edit.addEventListener("click", function(){
    card.style.color = "red"
    }
)

//4eme fonctionnalité : change de couleur de texte sur la 2eme card en cliquant sur édit, clique un seconde fois pour revenir sur la couleur initiale.

var edit2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

var card2 = document.getElementsByClassName("card mb-4 box-shadow")[1];

edit2.addEventListener("click", function(){
    if (card2.style.color === 'green'){
            card2.style.color = 'black' ;
        }
        else (card2.style.color = "green")
     }
)

//5eme fonctionnalité : enlever le css en double cliquant sur la navbar, idem pour le faire revenir.

var header = document.getElementsByTagName("header")[0];

var cdn = document.getElementsByTagName("link")[0];

header.addEventListener("dblclick", function(){
    if (cdn.disabled){
        cdn.disabled = false}
        else (cdn.disabled = true)
    }
)