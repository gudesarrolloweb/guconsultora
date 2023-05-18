/***************casco************/
let cascoblancoBtn = document.getElementById("cascoblanco");
let cascorojoBtn = document.getElementById("cascorojo");
let cascoamarilloBtn = document.getElementById("cascoamarillo");
let cascofotoluminicoBtn = document.getElementById("cascofotoluminico");
let proteccioncraneal = document.getElementById("proteccioncraneal");

cascoblancoBtn.onclick = function () {
    proteccioncraneal.src = "../img/casco de seguridad blanco.jpg" ;
}
cascorojoBtn.onclick = function () {
    proteccioncraneal.src = "../img/casco de seguridad rojo.png";
}
cascoamarilloBtn.onclick = function () {
    proteccioncraneal.src = "../img/casco de seguridad amarillo.jpg" ;
}
/***************auditivo**********/
let auditivonegroBtn = document.getElementById("auditivonegro");
let auditivoverdeBtn = document.getElementById("auditivoverde");
let auditivonaranjaBtn = document.getElementById("auditivonaranja");
let proteccionauditiva = document.getElementById("proteccionauditiva");

auditivonegroBtn.onclick = function () {
    proteccionauditiva.src = "../img/protector auditivo copa.png" ;
}
auditivoverdeBtn.onclick = function () {
    proteccionauditiva.src = "../img/protector auditivo endoarual.jpg";
}
auditivonaranjaBtn.onclick = function () {
    proteccionauditiva.src = "../img/protector auditivo silicona.jpg" ;
}
/***************guantes**********/
let guantenegroBtn = document.getElementById("guantenegro");
let guanterojoBtn = document.getElementById("guanterojo");
let guanteverdeBtn = document.getElementById("guanteverde");
let protecciondemanos = document.getElementById("protecciondemanos");

guantenegroBtn.onclick = function () {
    protecciondemanos.src = "../img/guante de poliester.jpg" ;
}
guanterojoBtn.onclick = function () {
    protecciondemanos.src = "../img/guante de descarne.jpg";
}
guanteverdeBtn.onclick = function () {
    protecciondemanos.src = "../img/guante de algodon.jpg" ;
}
/*************facial********/
let facialblancoBtn = document.getElementById("facialblanco");
let facialnegroBtn = document.getElementById("facialnegro");
let proteccionfacial = document.getElementById("proteccionfacial");

facialblancoBtn.onclick = function () {
    proteccionfacial.src = "../img/proteccion facial corte.jpg" ;
}
facialnegroBtn.onclick = function () {
    proteccionfacial.src = "../img/careta soldador.jpg";
}
/*************ocular********/
let ocularnegroBtn = document.getElementById("ocularnegro");
let ocularblancoBtn = document.getElementById("ocularblanco");
let proteccionocular = document.getElementById("proteccionocular");

ocularnegroBtn.onclick = function () {
    proteccionocular.src = "../img/proteccion ocular negro.jpg" ;
}
ocularblancoBtn.onclick = function () {
    proteccionocular.src = "../img/proteccion ocular transparente.jpg";
}
/*************respiratoria********/
let respiratorianegroBtn = document.getElementById("respiratorianegro");
let respiratoriagrisBtn = document.getElementById("respiratoriagris");
let proteccionrespiratoria = document.getElementById("proteccionrespiratoria");

respiratorianegroBtn.onclick = function () {
    proteccionrespiratoria.src = "../img/proteccion respiratoria semimascara.png" ;
}
respiratoriagrisBtn.onclick = function () {
    proteccionrespiratoria.src = "../img/proteccion respiratoria mascara.png";
}