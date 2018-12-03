var textox1 = document.getElementById("texto_lineasx1");
var textoy1 = document.getElementById("texto_lineasy1");
var textox2 = document.getElementById("texto_lineasx2");
var textoy2 = document.getElementById("texto_lineasy2");
var textox3 = document.getElementById("texto_lineasx3");
var textoy3 = document.getElementById("texto_lineasy3");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{

  var colorcito = "#000000";
  var puntox1 = parseInt(textox1.value);
  var puntoy1 = parseInt(textoy1.value);
  var puntox2 = parseInt(textox2.value);
  var puntoy2 = parseInt(textoy2.value);
  var puntox3 = parseInt(textox3.value);
  var puntoy3 = parseInt(textoy3.value);
  dibujarLinea(colorcito, puntox1,puntoy1,puntox1-1,puntoy1-1);
  dibujarLinea(colorcito, puntox2,puntoy2,puntox2-1,puntoy2-1);
  dibujarLinea(colorcito, puntox3,puntoy3,puntox3-1,puntoy3-1);
  dibujarLinea(colorcito, 151,1,151,299);
  dibujarLinea(colorcito, 1,151,299,151);
  

}
