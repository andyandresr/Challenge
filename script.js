/*
e--> enter
o--> ober
i--> imes
a--> ai
u--? ufat
*/

var encriptar
var desencriptar



function encriptar() {
var texto = document.getElementById("texto").value.toLowerCase();

var txtCifrado = texto.replace(/e/igm, "enter");
var txtCifrado = txtCifrado.replace(/o/igm, "ober");
var txtCifrado = txtCifrado.replace(/i/igm, "imes");
var txtCifrado = txtCifrado.replace(/a/igm, "ai");
var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

document.getElementById("munheco").style.display = "none";
document.getElementById("mensaje").innerHTML = txtCifrado;
document.getElementById("texto").value = "";

}

function desencriptar() {
var texto = document.getElementById("texto").value.toLowerCase();


var txtCifrado = texto.replace(/enter/igm, "e");
var txtCifrado = txtCifrado.replace(/ober/igm, "o");
var txtCifrado = txtCifrado.replace(/imes/igm, "i");
var txtCifrado = txtCifrado.replace(/ai/igm, "a");
var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

document.getElementById("munheco").style.display = "none";
document.getElementById("mensaje").innerHTML = txtCifrado;
document.getElementById("texto").value = "";



}
 

function copiar(){
    var contenido = document.getElementById("mensaje");
    contenido.select();
    document.execCommand("copy");



    //document.getElementById("mensaje");
    //mensaje.value="";

}

function limpiar(){
    textarea.value = "";
}


