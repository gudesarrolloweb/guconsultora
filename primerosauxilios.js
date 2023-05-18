/***************botiquin************/
let botiquinblancoBtn = document.getElementById("botiquinblanco");
let botiquinmarronBtn = document.getElementById("botiquinmarron");
let botiquin = document.getElementById("botiquin");

botiquinblancoBtn.onclick = function () {
    botiquin.src = "../img/primero auxilios botiquin metalico.jpg" ;
}
botiquinmarronBtn.onclick = function () {
    botiquin.src = "../img/primero auxilios botiquin madera.jpg";
}