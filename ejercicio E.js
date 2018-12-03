var enviar = document.getElementById("env");					//boton enviar
var input_1 = document.getElementById("num");					//numero que se comparara


enviar.addEventListener("click",abrir);



function abrir() {
	document.write("el numero a buscar en el arreglo es: "+input_1.value+"<br>");
	var numerito = parseInt(input_1.value);
var arreglo =[10];


function aleatorio(minimo, maximo)
{
		var minimo =parseInt(1)							//valor minimo en el arreglo
		var maximo =parseInt(2)						//valor maximo en el arreglo
	var resultado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
return resultado;
}
////////////imprimir posiciones//////////////////////////
for (var i = 0; i < 10; i++)
{
document.write(i+" ");
}
var buscar=0;
document.write("<br>");
/////////////////imprimir numeros aleatorios///////////////
														for ( i = 0; i < 10; i++)
														{
															buscar=aleatorio();
													document.write(buscar +" ");
													console.log(arreglo[i]);
													if (numerito == buscar)
													{
														arreglo[i]=1;
													}
													else {
														arreglo[i]=0;
													}
													console.log(arreglo[i]);
														}
/////////////Imprimir	posiciones
	document.write("<br>el numero se encontro en la posicion: ");
		for ( i = 0; i < 10; i++)
		{
	if (arreglo[i]==1)
	{
		document.write(i+1 +" ");
	}

		}
}
