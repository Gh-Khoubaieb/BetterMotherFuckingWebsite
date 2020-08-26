 
//récupération les  éléments du DOM 
var titles = document.getElementsByClassName("titles");
var psychedelicButton = document.getElementById("psychedelicButton");
var p = document.getElementsByTagName("p");
var body = document.getElementsByTagName("body");



//Affichage d'un message d'information dans une boîte de dialogue modale de type confirm
if (window.confirm("Hey, vite consulter ce site xxxvidsxxx :)")) {

    window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}

//modifier les éléments (arriére plan,paragraphs,titres) après cliqué sur le button "Mode Psychédélique"
psychedelicButton.onclick = function() {

    body[0].style.backgroundColor = "magenta";

    for(var i = 0; i < p.length; i++) {
         //Changer la couleur des polices des paragraphes en blue
         p[i].style.color = "blue";
         //Changer la police des paragraphes en courier 
         p[i].style.fontFamily = "courier";
    }
    for(var j = 0; j < titles.length; j++) {
        //Changer la couleur des polices de tous les headings en green
        titles[j].style.color = "green";
        //Changer la police des headers en Comic Sans
        titles[j].style.fontFamily = "Comic Sans MS";
    }

}


