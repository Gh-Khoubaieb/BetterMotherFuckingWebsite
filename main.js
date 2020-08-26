 
//récupération les  éléments du DOM 
var titles = document.getElementsByClassName("titles");
var psychedelicButton = document.getElementById("psychedelicButton");
var paragraphs = document.getElementsByTagName("p");
var body = document.getElementsByTagName("body");



//Affichage d'un message d'information dans une boîte de dialogue modale de type confirm
if (window.confirm("Hey, vite consulter ce site xxxvidsxxx :)")) {

    window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}

//modifier les éléments (body,paragraphs,heading) après cliqué sur le button "Mode Psychédélique"
psychedelicButton.onclick = function() {

    body[0].style.backgroundColor = "magenta";

    for(let i = 0; i < paragraphs.length; i++) {

         paragraphs[i].style.color = "blue";
         paragraphs[i].style.fontFamily= "courier";
    }
    for(let j = 0; j < heading.length; j++) {

        titles[j].style.color = "green";
        titles[j].style.fontFamily = "Comic Sans MS";
    }

}


