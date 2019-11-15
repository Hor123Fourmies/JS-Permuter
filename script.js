/*
var champs1 = document.getElementById('champs1');
var champs2 = document.getElementById('champs2');
var bouton = document.getElementById('bouton');
bouton.addEventListener('click', function () {
   ;
});
*/

var bouton = document.getElementById('bouton');
bouton.addEventListener('click', function () {
        x=document.formulaire.champs1.value;
        document.formulaire.champs1.value=document.formulaire.champs2.value;
        document.formulaire.champs2.value=x;
});
